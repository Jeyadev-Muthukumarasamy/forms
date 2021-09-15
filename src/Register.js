import React ,{useState} from 'react'
import { signUp } from './Helper'


function Register()
 {
    
     const[phonenumber,setPhonenumber]= useState("")
     const[password,setPassword]= useState("")
     const[email,setEmail]= useState("")
     const[status,setStatus]= useState("")

      const sign_Up= () =>
      {
         
        
         let User={'phonenumber':phonenumber,'password':password,'email':email,'status':status}
         console.log(User)
         signUp(User)
          .then(data=>{console.log(data)})



         




        //  let result=await fetch("https://artiwiztech.in/User/98",{
        //    method:'POST',
        //    body:JSON.stringify(item),
        //    headers:{
        //      "Content-Type":'application/JSON',
        //      "Accept":'application/JSON'
        //    }




        //   })

        //   result=result.JSON
        //   console.warn("result",result)

   

 }

     
    return (
        <div className=" signup" >
          
            <form  className="w-50">
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="text" value={phonenumber} onChange = {(e) =>setPhonenumber(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label  htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="text" value={email} onChange = {(e) =>setEmail(e.target.value)} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    
  </div>
 
 
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange = {(e) =>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Status</label>
    <input type="text" value={status} onChange = {(e) =>setStatus(e.target.value)} className="form-control" id="exampleInputPassword2"/>
  </div>
  <button onClick={(e)=>{
    e.preventDefault();
    sign_Up()
  }}  className="btn btn-primary" >signUp</button>
  
</form>
            
            
        </div>
    )
}

export default Register