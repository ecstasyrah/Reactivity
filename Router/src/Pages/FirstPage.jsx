import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function FirstPage() {
  const [count, setCount] = useState(0)

  return (
    <div className='fpage'>
        <h1>Welcome to your homepage</h1>
        <div className='text'>
          <h1>Third Reactivity</h1>
        </div>
        <div className='inside'>
            <p>Choose where to go on your navigation bar</p>
        </div>
    </div>
  )
}

export default FirstPage