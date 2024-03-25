import React, { useRef, useState , useEffect, useContext } from "react"
import AuthContext  from "../../context/AuthProvider"
import "./LoginSignup.css"
import user_icon from "../Assets/icons8-person-24.png"
import email_icon from "../Assets/icons8-email-30.png"
import password_icon from "../Assets/icons8-password-26.png"
import axios from "../../API/axios"
const LOGIN_URL ='/auth';
const LoginSignup = () => {
    const{ setAuth } = useContext(AuthContext);
    const[action,setAction]=useState("Sign Up");

    const userRef = useRef();
    const errRef = useRef();

    const[user,setuser]=useState('');
    const[email,setemail]=useState('');
    const[pwd,setPwd]=useState('');
    const[errMsg,setErrMsg]=useState('');
    const[success,setSuccess] = useState(false);
     
    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[user,email,pwd])

    const hadleSubmit = async(e)=>{
        e.preventDefault();
        try{ const response = await axios.post(LOGIN_URL,
            JSON.stringify({user,pwd}),
            {
                headers:{"Content-Type":'application/json'},
                withCredentials:true
            }
            );
            console.log(JSON.stringify(response?.data));
           // console.log(JSON.stringify(response));
           const accessToken = response?.data?.accessToken;
           const roles = response?.data?.roles;setAuth({user,pwd,roles,accessToken});
            setuser('');
            setemail('');
            setPwd('');
            setSuccess(true);
        }catch(err)
        {
             if(!err?.response){
               setErrMsg('No Server Response');
            }else if(err.response?.status===400){
                setErrMsg('Missing username or Password');
            }else if(err.response?.status===401){
                setErrMsg(' Unathorized');
            }else{
                setErrMsg('LoginFaiiled');
            }
       err.current.focus();
       
    }

    return(<>
        {success ?(<div onSubmit={hadleSubmit}>
            <h1>You are logged in!</h1>
            <p a href="">Go to home</p>
        </div>):(
        <div className="container" >
            <section>
             <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>   
            </section>
            <div className="header" >
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs" >
            {action==="Login"?<div>
               </div>:<div className="input">
                <img src={user_icon} alt=""></img>
                <input type="text" placeholder="Name" ref={userRef} autoComplete="off" onChange={(e)=>setuser(e.target.value)} value={user} required></input>
            </div>
}
            
            <div className="input">
                <img src={email_icon} alt=""></img>
                <input type="email" placeholder="E-mail" ref={userRef} autoComplete="off" onChange={(e)=>setemail(e.target.value)} value={email} required ></input>
            </div>

            <div className="input">
                <img src={password_icon} alt=""></img>
                <input type="password" placeholder="Password" ref={userRef} onChange={(e)=>setPwd(e.target.value)} value={pwd}></input>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot">Forgot password?<span>  Click here </span></div>}
            
            <div className="sumbit-container">
                <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >
                    Sign Up
                    </div>
                <div className={action === "Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}} >
                  <a href="https://www.canva.com/projects" > Login</a></div>
            </div>
            </div>
        </div>)}</>
    )
}
}
export default LoginSignup;