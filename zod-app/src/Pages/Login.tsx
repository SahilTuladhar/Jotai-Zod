import styles from './Login.module.css'
import LoginInput from '../Components/LoginInput';

const Login = () => {
   
    return( 
        <div className={styles.mainCover}>
            <div className={styles.loginCover}>
                <div className={styles.leftlLoginCover}>
                <img src="/LoginImage.jpg" alt="Image" />
                </div>
                <div className={styles.rightLoginCover}>
                    <LoginInput />
                </div>
            </div>
        </div>
    );

}

export default Login