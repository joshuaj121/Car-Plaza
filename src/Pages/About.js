import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';


function Home() {
    const [count, setCount] = useState(0)

  return (

    <div>About
        <h1>About Page</h1>
        <h2>{count}</h2>
        <button type='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>

        <button type='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>

        <Navbar />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Home