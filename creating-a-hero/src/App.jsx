import { useState } from 'react'
import './index.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [color, setColor] = useState('')
  const [food, setFood] = useState('')
  const [animal, setAnimal] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const handleClick = () => {
    setShowDetails(true)
  }

  return (
    <div className="App">
      <label>Name:</label>
      <input type="text" onChange={(event)=>{
        setName(event.target.value)
      }}/>

      <label>Age:</label>
      <input type="number" onChange={(event)=>{
        setAge(event.target.value)
      }}/>

      <label>Favorite Color:</label>
      <input type="color" onChange={(event)=>{
        setColor(event.target.value)
      }}/>

      <label>Favorite Food:</label>
      <input type="text" onChange={(event)=>{
        setFood(event.target.value)
      }}/>

      <label>Favorite Animal:</label>
      <input type="text" onChange={(event)=>{
        setAnimal(event.target.value)
      }}/>

      <button onClick={handleClick}>Show Details</button>
      <ul>
        {showDetails && (
          <div>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>Favorite Color:</strong> {color}
          </li>
          <li>
            <strong>Favorite Food:</strong> {food}
          </li>
          <li>
            <strong>Favorite Animal:</strong> {animal}
          </li>
          </div>
        )}
      </ul>
    </div>
  )
}

export default App
