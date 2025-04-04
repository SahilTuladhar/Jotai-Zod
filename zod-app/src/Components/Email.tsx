import { log } from 'console'
import { resolve } from 'path'
import { useEffect, useState } from 'react'
import {string, z} from 'zod'

const Email = () => {


 const registeredEmails = ['sailratna11@gmail.com' , 'sailratna1@gmail.com']
 const [displayMsg , setDisplayMsg] = useState('')

  const EmailValidation = async(email : string) : Promise<boolean> => {
    await new Promise(resolve => setInterval(resolve , 2000))
   
    return !registeredEmails.includes(email)
  }

  
  const EmailSchema = z.
  string()
  .email('Invalid Username , Please Provide a different Username')
  .refine(async(newEmail) => {
    return await EmailValidation(newEmail)
  } , {
    message : 'Email has Already been registered'
  })

  const validateEmail = async(tovalidateEmail : string) => {
    try{
     await EmailSchema.parseAsync(tovalidateEmail)
        console.log('The Email is Valid');
        setDisplayMsg('The Email is Valid. Registered.')
    }catch(err){
      if(err instanceof z.ZodError){
        console.log(err.errors[0].message);
         setDisplayMsg(err.errors[0].message);
         
        
      }
    }
  }

 useEffect( () => {
   validateEmail('sailratna121@gmail.com');
 }, [])
   

  return(
    <div>
        <h1>Email Availability Check</h1>
        <p>{displayMsg}</p>
    </div>
  )
}

export default Email