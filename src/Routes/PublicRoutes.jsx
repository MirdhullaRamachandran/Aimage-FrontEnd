import React from 'react'
import Home from '../pages/Home/Home'
import Event from '../pages/Event/Event'
import Develop from '../pages/Developer/Developer'
import Admin from '../pages/Admin/UserAdmin'
import {Route,Routes} from 'react-router-dom'
export default function PublicRoutes() {
  return (
<>
<Routes> 
    <Route path="/home" element={<Home/>}/>
    <Route path="/event" element={<Event/>}/>
    <Route path="/develop"element={<Develop/>}/>
    <Route path="/admin"element={<Admin/>}/>
</Routes>
</>
  )
}
