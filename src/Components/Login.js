import React ,{useState} from "react";

import './CSS/Login.css';

function Login(){
    const [username, setusername] = useState("");
    const [password,setpassword] = useState("");
    const handleSignin = (event) => {
        event.preventDefault();
        alert(`Username : ${username}  Password :${password}`)
    }
        const [Rusername, setRusername] = useState("");
        const [Rpassword,setRpassword] = useState("");
        const [repassword,setrepassword] = useState("");
        const [mobile,setmobile] = useState("");

        const handleSignup = (e) => {
            e.preventDefault();
            if(Rpassword!==repassword){
                alert("password verification failed")
            }
            else{
          alert(`Username : ${Rusername}  Password :${Rpassword}
          Re-enter password : ${repassword} mobile no. : ${mobile}`)}
        }
        const [activetab, setactivetab] = useState(true);

    return(
    <div className="loginbox">
    <div className="login-wrap">
        <div className="login-html">
            <input  type="radio" id="tab-1" className="sign-in" name="tab" defaultChecked={activetab}/>
            <label  onClick={() => {setactivetab(!activetab)}} for="tab-1" className="tab">Sign In</label>
            <input  type="radio" id="tab-2" className="sign-up" name="tab" />
            <label  for="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
                <form onSubmit={handleSignin} className="sign-in-html">
                    <div className="group"><label for="user" className="label">Email</label>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} id="user" className="input"/>
                </div>
                <div className="group">
                    <label for="pass" className="label">Password</label>
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} id="pass" className="input" data-type="password"/>
                </div>
                <div className="group">
                    <input type="checkbox" id="check" className="check" checked/>
                    <label for="check"><span className="icon"></span>Keep me Signed in</label>
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign In"/>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <a className="login-a" href="#forgot">Forgot Password</a>
                </div>
                </form>
                <form onSubmit = {handleSignup} className="sign-up-html">
                    <div className="group">
                        <label for="user" className="label">Email</label>
                        <input type="text" id="user" className="input" value={Rusername} onChange={(e) => setRusername(e.target.value)} />
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input type="password" id="pass" className="input" data-type="password" value={Rpassword} onChange={(e) => setRpassword(e.target.value)} />
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Confirm Password</label>
                        <input type="password" id="pass" className="input" data-type="password"  value={repassword} onChange={(e) => setrepassword(e.target.value)} />
                    </div>
                    {/* <div className="group">
                        <label for="pass" className="label">Mobile No.</label>
                        <input type="text" id="pass" className="input" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                    </div> */}
                    <div className="group">
                        <input type="submit" className="button" value="Sign Up"/>
                    </div>
                    {/* <div className="hr"></div> */}
                    <div className="foot-lnk">
                        <label for="tab-1">Already Member</label>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
   
    );

}
export default Login;