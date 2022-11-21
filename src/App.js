import './App.css'
import { useState, useEffect } from 'react'
import listOfFood from './food.json'

// importing all the images
import p1 from './images/m_ice_cream.jpeg'
import p2 from './images/sugar-coatedHaws.jpeg'
import p3 from './images/CantoneseEggTarts.jpeg'
import p4 from './images/siuMais.jpeg'
import p5 from './images/eggWaffles.jpeg'
import p6 from './images/redBeanPuddings.jpeg'
import p7 from './images/mameeNoodles.jpeg'
import p8 from './images/sausageBun.jpeg'
import p9 from './images/pineappleBun.jpeg'
import p10 from './images/shrimpDumplings.jpeg'


function App() {


  // for carrying the food data
  const [ fID, setfID ] = useState(0);
  const [ fName, setfName ] = useState("");
  const [ fDesc, setfDesc ] = useState("");
  const [ fImage, setfImage ] = useState("");


  // for setting the random number
  const [ randomNo, setrandomNo ] = useState(0);
  

  // function for generating random number
  const generateRandom = () => {
    setrandomNo(Math.floor(Math.random() * (10 - 1 + 1) + 1));
  }


  // object for carrying the images
  let images = { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }
  

  // auto-generate the food corresponding to the random No
  useEffect(() => {

    // filter the food by id first
    const temp = listOfFood.food.filter((food) => food.id === randomNo);

    
    // match the details of food
    setfName(temp[0]?.name);
    setfDesc(temp[0]?.description);
    setfImage(temp[0]?.imageURL);


  }, [randomNo])


  // return result
  return (
    <div className='body_project'>
      
      <div className="headers">
        <h2>My Basket of Food When I Was Small</h2>
      </div>

      <div className='container1'>
        <p>
          This is a random generator showing all the food I liked when I was just a kid. The 
          description of each food is written in my own perspective about the changes of that
          particular food. Therefore, it is not like introducing the type of food one by one. 
          Instead, I am viewing this food in my childhood perspective and now.
        </p>
      </div>

      <div className='generator'>
          { randomNo != 0 ? 
            <div>
              <h3 className='foodName'>{ fName }</h3>
          
              <p className='description'>{ fDesc }</p>
          
              <img className='pic' src={ images[fImage] } ></img>
            </div>
            : null }

          <button className='btn' onClick={ generateRandom }>Draw</button>

      </div>
    </div>
  );
}

export default App;
