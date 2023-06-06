import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Hooks() {
  return (
    <>
       <h1>React Hooks Demo</h1>
       <nav>
            <Link to='/'>Home</Link> |{" "} 
            <Link to='/usestate'> useState</Link> |{" "} 
            <Link to='/useeffect'> useEffect</Link> |{" "} 
            <Link to='/usecontext'> useContext</Link> |{" "} 
            <Link to='/usereducer'> useReducer</Link> |{" "} 
       </nav>
       <Outlet />
    </>
  )
}

export default Hooks