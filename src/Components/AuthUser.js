import React from 'react'

const AuthUser = async() => {
   const token = localStorage.getItem('token');
   const refcode = localStorage.getItem('refercode');
   let isValid = await fetch("http://localhost:5000/api/authuser",{
    method:"post",
    body:JSON.stringify({refcode:refcode}),
    headers:{
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`
    }
  });
  isValid = await isValid.json();
  return isValid;
}

export default AuthUser;