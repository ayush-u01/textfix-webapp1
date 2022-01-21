import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert]= useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2600);
  }

  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(20 13 24)';
      showAlert("Dark Mode has been enabled", "Success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success")

    }
  }
  return (
    <>
    <Navbar title="textfix" mode={mode} togglemode={togglemode} />
    <Alert alert={alert} />
    <div className="container my-3">
    
    <Textform showAlert={showAlert} heading="Enter Text To Analyze" mode={mode} /> 
    
    </div>
    
    </>
  );
}

export default App;
