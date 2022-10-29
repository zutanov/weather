import './App.css';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Today } from './components/today/Today';
import { Tomorrow } from './components/tomorrow/Tomorrow';
import { useEffect, useState } from 'react';
import spinner from './assets/images/start.svg'

const App = () => {

  const [data0, setData1] = useState({})
  const [start, setStart] = useState(false)
  const [preLoader, setPreLoader] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false)
    },2000)
  }, [])
  if (preLoader) {
     
      return (
        <img src={spinner} alt=""/>
      )
    
  } else {
    return (
      <div className="App">
          <Router>
          <Header setData = {setData1} setStart= {setStart}/>
          <Routes>
              <Route path='/' element={<Today data1={data0} start={start} />}/>
              <Route path='/tomorrow' element={<Tomorrow/>}/>
          </Routes>
          </Router>
      </div>
    );
  }



}

export default App;
