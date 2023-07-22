



/*import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import React,{useState} from 'react'
//import A from './practice/A';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('Enable dark mode')
  const [text1,setText1]=useState('Enable dark blue mode')
  const toggle= ()=>{
    if(mode ==='light'){
      setMode('dark');
      setText('Enable light mode');
      setText1("enable light mode");
      document.body.style.backgroundColor='rgb(52 54 48)';
      showAlert(" dark mode enable","success ");
      document.title='TextUtils-dark mode';
    }
    else{
      setMode('light');
      setText('Enable dark mode');
      setText1("enable dark blue mode")
      document.body.style.backgroundColor='white';
      showAlert(" light mode enable","succes ");
      document.title='TextUtils-light mode';
    }
  }
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  const darkBlue=()=>{
    if(mode==='light'){
      setMode('dark');
      setText1("enable light mode")
      setText("enable light mode")
      showAlert(" dark blue mode enable","succes ");
      document.body.style.backgroundColor='blue';
      document.title='TextUtils-dark blue mode';
    }
    else{
        setMode('light');
        setText1('Enable dark blue mode');
        setText("enable dark mode")
        document.body.style.backgroundColor='white';
        showAlert(" light mode enable","succes ");
        document.title='TextUtils-light mode';
    }
  }
  const [alert,setAlert]=useState(null)
  return (
    <>
<Navbar title="textUtil" Home="Home" mode={mode} toggle={toggle} darkBLue={darkBlue} text={text} text1={text1}/>
<Alert alert={alert}></Alert> /* or <Alert/> */

/*

<Router>
  <Routes>
    <Route path="/about" element={<About mode={mode}/>}>
    </Route>
    <Route exact path="/" element={
      <div className="container my-3" >
<TextForm heading="analyze text" mode={mode} showAlert={showAlert}/>
</div>}> </Route>
   </Routes>
</Router>

<A/>

    </>
  );
}
 
export default App;
*/





import React, { Component } from 'react'
import P1 from './practice/P1'
import P2 from './practice/P2'
import P3 from './practice/P3'
import P4 from './practice/P4'
import P5 from './practice/P5-state'
import P6 from './practice/P6-counter'
import P7 from './practice/P7-props-f'
import P8 from './practice/P8-props-class'
import P9 from './practice/P9-event'
import P10 from './practice/P10-event-class'
export default class App extends Component {
  render() {
    return (
      <div>
        <P1 name="khan"/>
        <P2 name="shammas"/>

        <P3 name="bruce wayne" heroName="batman"/>
        <P3 name="clark" heroName="super man"/>
        <P3 name="tony" heroName="iron man"/>

        <P4 name="bruce wayne" heroName="batman"/>
        <P4 name="clark" heroName="super man"/>
        <P4 name="tony" heroName="iron man"/>
        <P5/>
        <P6/>
        <P7 name="tony" heroName="iron man"/>
        <P8 name="bruce wayne" heroName="batman"/>
        <P9></P9>
        <P10/>
      </div>
    )
  }
}



  