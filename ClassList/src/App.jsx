import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './contactlistdes.css'
import Display1 from './Display1.jsx'
import Filter1 from './Filter1'


function ContactList() {
  const [input, setInput] = useState("");

  const Stud = [
    {
      name: 'Sarah',
      id: 20102141,
      age: 19,
      course: 'BS-IT',
      nty: 'Filipino'
    },
    {
      name: 'Mark Alfred',
      id: 22402010,
      age: 20,
      course: 'BS-CS',
      nty: 'American'
    },
    {
      name: 'Aisha',
      id: 22131542,
      age: 19,
      course: 'BS-IS',
      nty: 'Australian'
    },
    {
      name: 'Mikee',
      id: 12102001,
      age: 18,
      course: 'BS-IT',
      nty: 'Filipino'
    },
    {
      name: 'boyo',
      id: 12152001,
      age: 19,
      course: 'BS-IS',
      nty: 'Chinese'
    }
  ]


  const filteredStud = (Stud.filter((s) => s.id.toString().startsWith(input))).map((d) => {
    return ( 
      <Filter1 d={d}></Filter1>
    )
  }
  )

  return (
    <div>
      <p className='input'>Input student ID#: </p>

      <input className='search' onChange={(e) => setInput(e.target.value)}></input>
      <div className='bs'>
        {input === '' ? <Display1 stud={Stud}/> : filteredStud}
      </div>
    </div>
  )
}

export default ContactList
