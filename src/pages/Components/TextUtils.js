import React, {useState}  from 'react'

export default function TextUtils(props) {

  const [text, setText] = useState('');

  const handleConUpp = ()=>
  {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleConLow = ()=>
  {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleConTrim = ()=>
  {
    let newText = text.trim();
    setText(newText);
  }
  const handleCoLet = ()=>
  {
    let newText =  text.split(" ").length;
    setText(newText);
  }
  const handleCoChar = ()=>
  {
    let newText = text.length;
    setText(newText);
  }
  const handleRemSpaces = ()=>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  

  const handleOnChange =(event)=>
  {
    setText(event.target.value);
  }
  return (
    <div>
       <div className='form-group'>
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className='my-4'>
            <button className='btn btn-sm btn-success' onClick={handleConUpp}>Covert to uppercase</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success'onClick={handleConLow} >Covert to lowercase</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success' onClick={handleConTrim}>Trim</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success' onClick={handleCoLet}>Count Letters</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success' onClick={handleCoChar}>Count Characters</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success' onClick={handleRemSpaces}>Remove Extra Spaces</button>&nbsp;&nbsp;
        </div>
        
    </div>
  )
}
