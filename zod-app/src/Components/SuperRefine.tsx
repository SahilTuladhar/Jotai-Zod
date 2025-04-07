import {z} from 'zod'

import { useEffect } from 'react'



const SuperRefine = () =>{

    const invalidUsernames = ['admin' , 'user' , 'guest']

    const UserAccSchema = z.object({
        username:z.string()
        .min(3 , 'Please Enter Username greater than 3 characters')
        .default('default_user'),

        password: z.string()
        .min(7 , 'Password length invalid')
    }).superRefine((data , ctx) =>{
        if(data.username === data.password){
            ctx.addIssue({
                code : z.ZodIssueCode.custom,
                message : 'Password cannot be same as the username',
                path:['password']
            })
        }

        if(invalidUsernames.includes(data.username)){
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'The Username is prohibited',
                path : ['username']
            })
        }
    }
    )

    

    type UserAccType = z.infer<typeof UserAccSchema>

    const userAccInput : UserAccType = { 
        // username: "admin123",
        password : "SahilTuladhar"
    } as UserAccType

    const userAccValidation = async(userAccInfo : UserAccType) => {
        try{
            UserAccSchema.parseAsync(userAccInfo)
            console.log('Valid User Account');
             
        }catch(err){
            console.log(err);
            
        }
    }
    

    useEffect(()=>{
        userAccValidation(userAccInput)
    } , [])
   


    return(
        <div>
            SuperRefine Component Implementation
        </div>
    )

}

export default SuperRefine