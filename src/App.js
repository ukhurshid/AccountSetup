
import './styles/App.css';
import  Loginform from './components/Loginform';
import SidebarInfo from './components/SidebarInfo';
import bgimage from './images/rocket.jpeg';


function App() {
  return (

   <div className='mainsection' style={{ backgroundImage: `url(${bgimage})` }}>
       
        <div className='subsection'>

          <Loginform/>
         
          <SidebarInfo/>
        </div>
  
   </div>
  

  );
}



export default App;