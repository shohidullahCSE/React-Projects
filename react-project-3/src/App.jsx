import { Fragment } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Gallery from './components/Gallery'
import UserCard from './components/UserCard'
export default function App() {
  const user = { name: "Alice", age: 25, location: "New York" }
  return (
    
   < Fragment>  
     
          <UserCard user={user} />
   </Fragment>
    
   
  )
}


