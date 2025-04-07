import styles from './LoginInput.module.css'

const LoginInput = () => {
  return(
    <div className={styles.loginInputCover}>
    <div className={styles.formTitle}>
        <h2>Create an Account</h2>
        <p>Already have and account? <a href="">Log in</a></p>
    </div>    
    <form > 
     <div className={styles.inputField}>
     <input  placeholder = 'First Name' type="text" />
     <input  placeholder ='Last Name'type="text" />
     </div>
     <div className={styles.inputField}>
     <input placeholder = 'Email' type="email" />
     </div>
     <div className={styles.inputField}>
     <input placeholder = 'Password' type="password" />
     </div>
     <div className={styles.inputField}>
     <input placeholder = 'Confirm Password' type="password" />
     </div>
      <button type='submit'> Submit</button>

    </form>
    <div className={styles.otherSignInCover}>
        <div className={styles.otherText}>
         <hr style = {{
            flexGrow:1,
            border:'none',
            // borderTop:'1px solid #ccc',
            margin : '3px'
         }}/> <p>Or register with</p> <hr style = {{
            flexGrow:1,
            border:'none',
            // borderTop:'1px solid #ccc',
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