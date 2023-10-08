import { useState } from 'react'
import '../App.css'
import '../Pages/des.css'

function DogAPI() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState("")

  function getData(DogAPI){
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setImage(json.message)
      })
  } 

  return (
    <div className='main4'>
        <div className='box4'>
            <h2>Free therapy here</h2>
            <div>
                <button className='button4' onClick={getData}> Sup </button>
            </div>
            <div className='image4'>
            {image && <img src={image} alt=''/>}
            </div>  
        </div>
    </div>
  )
}

export default DogAPI
