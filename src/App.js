import React, { useState, useEffect } from 'react';
import Popup from './components/popup';
import './App.css';

const App = () => {
  const [buttonPopup,setButtonPopup] = useState(false);
  const [timedPopup,setTimedPopup] = useState(false);
  const [api, setApi] = useState([]);
  console.log(api);
  useEffect(() => {
    apistore();
  }, [])
  const apistore = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setApi(jsonData);
  }
  // apistore();
  return (
    <>
      <h2>Available Products</h2>
      <div className='container'>
        {api.map((values) => {
          return (
            <>
              
         
                <div className='box'>
                  <div className='content'>

                    <h5>{values.title}</h5>
                  <main>
                   <Popup trigger ={buttonPopup} setTrigger={setButtonPopup}>
                    <p>{values.description}</p>
                    </Popup> 
                </main>
                  </div>
                  <button onClick={()=> setButtonPopup(true)}>
                  <img src={values.image} alt="" />
                </button>
                </div>
                
              </>
              )
      })}
            </div>
    </>
      );
}

      export default App;
