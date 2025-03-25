import { useState } from "react";
import Btn from "../components/Btn";
import "./css/auth.css";
import {motion} from "framer-motion"
export default function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    // console.log(motion)
    return (
        <section className="auth-section">
            <img src="access.png" className="auth-sideimg" />
            <div className="auth-left-div">

                <div className="auth-user-pref">
                    <h1 style={{ fontSize: "2rem",fontWeight: "300" }}>You want to ...</h1>
                    <div className="auth-btn-holder">
                        <Btn
                            type = {isLogin ? "black" : "primary"}
                            text="Login to a account"
                            onclick={() => {
                                setIsLogin(!isLogin)
                            }}
                        />
                        <Btn
                            type = {!isLogin ? "black" : "primary"}
                            text="Create a new account"
                            onclick={() => {
                                setIsLogin(!isLogin)
                            }}
                        />
                    </div>
                </div>

                {isLogin &&(<motion.div
                        className="auth-login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 style={{ fontSize: "1.8rem", fontWeight: "300" }}>Login to an account</h1>
                        <div className="auth-input-grp">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" className="auth-input" name="username"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className="auth-input" name="password"/>
                        <Btn type="secondary-thin" text="Login" onclick={() => {}} style={{margin:'10px 0px'}}/>
                        </div>
                    </motion.div>)}


                {
                    !isLogin && (<motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >

                    </motion.div>)
                }
            </div>
        </section>
    );
}
