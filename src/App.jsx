import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashBoard from './components/Dashboard/AdminDashBoard';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  const [user, setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
  
      if (userData.role === 'employee') {
        const allEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const updatedEmployee = allEmployees.find(e => e.email === userData.data.email);
        setLoggedInUserData(updatedEmployee);
      }
    }
  }, []);
  
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}))
    } 
    else if (authData) {
      const employee = authData && authData.employees.find((e)=> email === e.email && e.password === password)
      if(employee){
         setUser('employee');
         setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", data:employee}))
      }
     
    } else {
      alert('Invalid Credentials');
    }
  };
  

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashBoard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
