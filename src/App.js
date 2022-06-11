
import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm ';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'



function App() {

  const [modes, setMode] = useState("light");

  const toggleMode =()=>{
    if(modes ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(20, 20, 20)";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#f0f0f0";
    }
  }
  return (
  <>
  <Router>
   <NavBar title = "TextUtils" about = "About" mode = {modes} toggleMode = {toggleMode}/>
<Routes>
  <Route exact path ="/home" element = {<TextForm heading= "Enter a text to analyze" mode = {modes}/>}/>
  
<Route index element = {<NavBar/>}/>
  
   </Routes>
   </Router>
   </>
  );
}

export default App;
