import { useRef, useState, useEffect } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user_icon from "../Assets/icons8-person-24.png";
import email_icon from "../Assets/icons8-email-30.png";
import password_icon from "../Assets/icons8-password-26.png";


const USER_REGEX=/^[a-zA-Z][a-zA-Z]0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const Signup = ()=>{
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

   
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setmatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
       const result= USER_REGEX.test(user);
       console.log(result);
       console.log(user);
       setValidName(result);
    }, [user])
   
 
    useEffect(() => {
        const result= USER_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd===matchPwd;
        setValidMatch(match);
     }, [pwd,matchPwd])

     useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    
     return(
        <section className="container">
           
        <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>   
      
       <div className="header" >
           <div className="text">Register</div>
           <div className="underline"></div>
       </div>
       <form className="inputs">
       <div className="input">
           <img src={user_icon} alt="">
           <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
           </img>
           <p id="uidnote" className={userFocus && user && !validName ?"Instructions":"offsreen"}>
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            4 to 24 characters.<br></br>
            Must begin with a letter.<br></br>
            Letters ,numbers,underscore,hypens allowed.
            </p>
       </div>
       


       <div className="input">
           <img src={password_icon} alt=""></img>
           <input type="password" placeholder="Password" ref={userRef} onChange={(e)=>setPwd(e.target.value)} value={pwd} required></input>
       </div>
       <button className="sumbit-container"><a href="Signup.js">Sign in</a>
        </button>
       </form>
       
   </section>
    )
}
export default Signup