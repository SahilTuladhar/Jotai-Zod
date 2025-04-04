import { log } from 'console'
import { useState } from 'react'
import {z} from 'zod'


async function checkUsenameAvailability(username : string):Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve , 2000))
    const unavailableUsernames = ['admin' , 'user']
    return !unavailableUsernames.includes(username)
}

const Refine = () => {

   
    
    const UserNameSchema = z
    .string()
    .min(5 , 'Username length must be atleast 5')
    .max(15, "Username legnth must be less than 15")
    .refine((val) => val.length <= 25 , {
        message : 'maximum length exceeded'
    })


    const AsyncUsernameSchema = z
    .string()
    .refine(async(username) => {
    return checkUsenameAvailability(username)
    } , {
        message: 'Username is not available'
    });
    
    try{
        console.log(AsyncUsernameSchema.parseAsync('Sahil'))
     }catch(err){
        console.log(err);
        
     }
    

    

    console.log(UserNameSchema.parse('asdasdd'));
    
  



    
    return(
        <div>
            <h1>This is the Refine method</h1>
            <p>Hi, {UserNameSchema.parse('Sahil')} </p>
        </div>
        
    )

}

export default Refine