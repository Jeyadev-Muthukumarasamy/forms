import React ,{useState} from 'react'
import { signIn } from './Helper'


function Login()
 {
    
     const[phonenumber,setPhonenumber]= useState("")
     const[password,setPassword]= useState("")
     

      const sign_In= () =>
      {
         
        
         let Userone={'phonenumber':phonenumber,'password':password}
         console.log(Userone)
         signIn(Userone)
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
          <button  className="btn btn-primary" >Login</button>
            <form  className="w-50">
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="text" value={phonenumber} onChange = {(e) =>setPhonenumber(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
 
 
 
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange = {(e) =>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

 
  <button onClick={(e)=>{
    e.preventDefault();
    sign_In()
  }}  className="btn btn-primary" >signUp</button>
  
</form>
            
            
        </div>
    )
}

export default Login