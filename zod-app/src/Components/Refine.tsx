import { log } from 'console'
import { useState } from 'react'
import {string, z} from 'zod'


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

     
     const UserAccSchema = z.object({
        username:z.string()
        .min(3 , 'Please Enter Username greater than 3 characters')
        .default('default_user'),

        password: z.string()
        .min(7 , 'Password length invalid')
    }).merge(z.object({name : z.string()}))
    
    console.log(UserAccSchema.pick({username : true }));
    

    

    console.log(UserAccSchema.parse({
        username: 'sahiltuladhar',
        password : '12343414',
        name : 'sahil'
    }));
    
  



    
    return(
        <div>
            <h1>This is the Refine method</h1>
            <p>Hi, {UserNameSchema.parse('Sahil')} </p>
        </div>
        
    )

}

export default Refine