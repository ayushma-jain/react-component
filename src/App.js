import Header from './pages/includes/Header';
import LeftNavBar from './pages/includes/LeftNavBar.js';
import ImageUpload from './pages/Components/ImageUpload';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import DataTable from './pages/Components/DataTable';



function App() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 headerSection'>
                <Header />
            </div>
            <div className='col-2 sideBarSection'>
                <LeftNavBar/>
            </div>
            <div className='col-10'>
                
                <BrowserRouter>
                  <Routes>
                    <Route exact path="/image-upload" element={<ImageUpload/>} />
                    <Route exact path="/data-table" element={<DataTable/>} />
                  </Routes>
              </BrowserRouter>
            </div>
            
        </div>
  
    </div>
   
   
</>
    
  );
}

export default App;
