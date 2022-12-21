import Header from './includes/Header.js';
import LeftNavBar from './includes/LeftNavBar.js';
import ImageUpload from './Components/ImageUpload.js';

function Home(){
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 headerSection'>
                        <Header/>
                    </div>
                    <div className='col-2 sideBarSection'>
                        <LeftNavBar/>
                    </div>
                    <div className='col-10'>
                        <ImageUpload />
                    </div>
                </div>
            </div>
           
           
        </>
    )
}
export default Home;