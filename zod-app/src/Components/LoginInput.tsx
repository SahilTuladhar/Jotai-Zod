import styles from './LoginInput.module.css'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { resolve } from 'path'

import {z} from 'zod'

const FormSchema = z.object({
    firstName : z.string().min(1 , 'first Name is required'),
    lastName : z.string().min(1 , 'Last Name is required'),
    email : z.string().email().min(1 , 'email is required'),
    password : z.string().min(8 , 'Password must be atleast 8 characters'),
    confirmPassword : z.string().min(8)
}).refine((data) => data.password == data.confirmPassword , {
    message : "Passwords do not match",
    path:['confirmPassword']
})

type FormFields = z.infer<typeof FormSchema>

const LoginInput = () => {

  const {register , 
    handleSubmit , 
    setError,
    formState : {
        errors , isSubmitting
    }} = useForm<FormFields>({
        resolver : zodResolver(FormSchema)
    })

  const onSubmitHandler = async(data : FormFields) => {
   try{
    await new Promise(resolve => setTimeout(resolve , 1000))
    // throw new Error
    console.log(data);
   }catch(err){ 
    setError('email' , {
        message : 'The Email is already Taken'
    })
}
  }

  return(
    <div className={styles.loginInputCover}>
    <div className={styles.formTitle}>
        <h2>Create an Account</h2>
        <p>Already have and account? <a href="">Log in</a></p>
  
    </div>    
    <form onSubmit={handleSubmit(onSubmitHandler)}> 
     <div className={styles.inputField}>
     <input {...register('firstName')} placeholder = 'First Name' type="text" />
   
     <input {...register('lastName')} placeholder ='Last Name'type="text" />
      
     </div>
     <div style={{display : 'flex' , justifyContent: 'space-around' , alignItems:'center'}}>
     {errors.firstName && (<div className={styles.errorMsg}>{errors.firstName.message}</div>)}
     {errors.lastName && (<div className={styles.errorMsg}>{errors.lastName.message}</div>)}

     </div>
     <div className={styles.inputField}>
     <input {...register('email')}placeholder = 'Email' type="email" />
     </div>
     {errors.email && (<div className={styles.errorMsg}>{errors.email.message}</div>)}

     <div className={styles.inputField}>
     <input {...register('password')} placeholder = 'Password' type="password" />
     </div>
     {errors.password && (<div className={styles.errorMsg}>{errors.password.message}</div>)}

     <div className={styles.inputField}>
     <input {...register('confirmPassword')} placeholder = 'Confirm Password' type="password" />
     </div>
     {errors.confirmPassword && (<div className={styles.errorMsg}>{errors.confirmPassword.message}</div>)}
      <button type='submit'> {
        isSubmitting ? '...Loading' : 'Submit'
        }</button>

    </form>
    <div className={styles.otherSignInCover}>
        <div className={styles.otherText}>
         <hr style = {{
            flexGrow:1,
            border:'none',
            borderTop:'1px solid #ccc',
            margin : '3px'
         }}/> <p>Or register with</p> <hr style = {{
            flexGrow:1,
            border:'none',
            borderTop:'1px solid #ccc',
            margin : '3px'
         }}/>
        </div>
        <div className={styles.otherButtons}>
          <button>
            <div className={styles.optionImgCover}>
            <img src="/google.svg" alt="" />
            </div>
    
            <p>Google</p>
          </button>
          <button>
          <div className={styles.optionImgCover}>
            <img src="/facebook.svg" alt="" />
            </div>
            <p>Facebook</p>
          </button>
        </div>
    </div>
    </div>
  )
}

export default LoginInput