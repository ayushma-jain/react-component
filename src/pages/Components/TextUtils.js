import React from 'react'

export default function TextUtils() {
  return (
    <div>
       <div className='form-group'>
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <div className='my-4'>
            <button className='btn btn-sm btn-success'>Covert to uppercase</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success'>Covert to lowercase</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success'>Trim</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success'>Count Letters</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success'>Count Characters</button>&nbsp;&nbsp;
            <button className='btn btn-sm btn-success'>Remove Extra Spaces</button>&nbsp;&nbsp;
        </div>
        
    </div>
  )
}
