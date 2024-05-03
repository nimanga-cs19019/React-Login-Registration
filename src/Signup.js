import { useRef, useState, useEffect ,useContext } from "react";
//import LoginSignup from "./Components/LginSignup/LoginSingup";
import AuthContext from "./context/AuthProvider";
//import axios from "./api/axios";
//const LOGIN_URL ='/auth';

const Signup = ()=>{
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

     useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
/*    const handleSubmit = async (event) => {
    event.preventDefault();
    try{
       const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    console.log(JSON.stringify(response?.data));
    const accessToken = response?.data?.accessToken;
    const roles =response?.data?.roles;
    setAuth({user,pwd,roles,accessToken});
    setUser('');
    setPwd('');
    setSuccess(true);
    }
    catch(err)
    {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username of Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus();
    }
    }
    */
    const handleSuccess = () => {
        // Update the success state to true
        setSuccess(true);
    };

    // This function could be called upon a form submission, for example
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Perform some action, e.g., API request

        try {
            // Assume the request is successful
            // This is where you would call your API request and check the response
            // If the request is successful:
            handleSuccess();
        } catch (error) {
            console.error('Request failed:', error);
        }
    }
     
     return(
        <>
        {success ?( <section className="container">
                    <h1>You are Loged in!</h1>
                    <p>
                        <a href="https://www.canva.com/projects">Go to Home</a>
                    </p>
                </section>):(
        <section className="container">
           
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
           <h1>Sign In</h1>
           <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
        
                        <label htmlFor="password">
                         Password:
                        </label>
       
                        <input type="password" id="password"   onChange={(e)=>setPwd(e.target.value)} value={pwd}   required></input>
    
       
                       <button>Sign In</button>
       
       </form>
       <p>Need an Account?<span className="line">
        {/*put ruoter lunk here*/}
        <a href="/">Sign Up</a>
        </span></p>
   </section>

)}
        
        
</>
    )
}
export default Signup