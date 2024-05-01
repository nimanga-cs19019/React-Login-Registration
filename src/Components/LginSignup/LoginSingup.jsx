
import { useRef, useState, useEffect } from "react";
import "./LoginSignup.css";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const LoginSignup = () => {
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
        const result= PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
     }, [pwd,matchPwd])

     useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    
     return(
        <section className="container">
           
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
        <label htmlFor="password">
           Password:
            <span className={validPwd?"valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPwd || !pwd ? "hide" : "invalid"} >
            <FontAwesomeIcon icon={faTimes} />
            </span>
           </label>
       
        <input type="password" id="password"   onChange={(e)=>setPwd(e.target.value)} required aria-invalid={validPwd?"false":"true"} aria-describedby="pwdnote" onFocus={()=>setPwdFocus(true)} onBlur={()=>setPwdFocus(false)}></input>
    
       <p id="pwdnote" className={pwdFocus && !validPwd ?"Instructions":"offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            8 to 24 characters.<br></br>
            Must include Lowercase and Uppercase letters,a number and a special character<br></br>
            Allowed speacial Characters:<span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hashtag">#$</span>
            <span aria-label="dollar sign">$</span>
            <span aria-label="percent">%</span>
        </p>
        


        <label htmlFor="comfirm_pwd">
          Confirm Password:
            <span className={validMatch && matchPwd?"valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validMatch || !matchPwd ? "hide" : "invalid"} >
            <FontAwesomeIcon icon={faTimes} />
            </span>
           </label>
       
        <input type="password" id="comfirm_pwd"   onChange={(e)=>setmatchPwd(e.target.value)} required aria-invalid={validMatch?"false":"true"} aria-describedby="comfirmnote" onFocus={()=>setMatchFocus(true)} onBlur={()=>setMatchFocus(false)}></input>
    
       <p id="comfirm_note" className={matchFocus && !validMatch ?"Instructions":"offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            Must match the first password input Feild
        </p>

       
       </form>
       
   </section>
    )
}


export default LoginSignup;
