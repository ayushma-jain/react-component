import Header from './pages/includes/Header';
import LeftNavBar from './pages/includes/LeftNavBar.js';
import ImageUpload from './pages/Components/ImageUpload';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import DataTable from './pages/Components/DataTable';
import TextUtils from './pages/Components/TextUtils';
import MyCalendar from './pages/Components/MyCalendar';
import Dashboard from './pages/Components/Dashboard';



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
                    <Route exact path="/" element={<Dashboard/>} />
                    <Route exact path="/image-upload" element={<ImageUpload/>} />
                    <Route exact path="/data-table" element={<DataTable/>} />
                    <Route exact path="/calendar" element={<MyCalendar/>} />
                    <Route exact path="/text-utils" element={<TextUtils/>} />
                    
                  </Routes>
              </BrowserRouter>
            </div>
            
        </div>
  
    </div>
   
   
</>
    
  );
}

export default App;
