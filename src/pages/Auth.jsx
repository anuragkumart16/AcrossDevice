import { useState } from "react";
import Btn from "../components/Btn";
import "./css/auth.css";
import {motion} from "framer-motion"
export default function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <section className="auth-section">
            <img src="access.png" className="auth-sideimg" />
            <div className="auth-left-div">

                <div className="auth-user-pref">
                    <h1 style={{ fontSize: "2rem" }}>You want to ...</h1>
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

                
            </div>
        </section>
    );
}
