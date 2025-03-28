import React, { useContext, useState } from 'react';
import  Login  from "./components/Auth/Login.jsx";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
// import { getLocalstorage, setLocalstorage } from './Utils/localstorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = ()=>{

  const [user,setUser] = useState(null)
  const authData = useContext(AuthContext)
  // if(authData){
  // console.log(authData.employees);
  // }

  const handleLogin = (email,password)=>{
     if (email == "admin@me.com" && password == "123") {
      setUser('admin')
     }else if (authData ) {
      setUser('employee')
     }
     else{
      alert("invalid credential")
     }
  }
  return(
    <>
      {!user?<Login handleLogin = {handleLogin}/>:''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
} 
export default App
