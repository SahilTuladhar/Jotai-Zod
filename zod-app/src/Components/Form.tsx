
import {z} from 'zod'
import { useState } from 'react'



const UserSchema = z.object({
    username : z.string().optional().default("Guest"),
    age : z.number().optional(),
    birthday : z.date().optional(),
    isProgrammer : z.boolean().optional().default(true),
    locations : z.enum(['Primary' , 'Secondary']),


})

type UserType = z.infer<typeof UserSchema>

const user : UserType = {
    username : 'asdasd',
    age: 1,
    birthday: new Date(),
    locations : "Primary"
  
} as UserType

console.log(UserSchema.safeParse(user));

const Form = () => {
  return(
    <>
      <h1>Form Page</h1>
      <h2>Validation: {UserSchema.safeParse(user).success}</h2>
    </>
  )
}

export default Form