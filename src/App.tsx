import { useState } from "react";
import "./theme.scss"; // in case of, for example, use dark or light themes //is not in use
import "./App.scss";
import Spinner from "./img/spinner.svg"; //spinner for auth button
import { AjaxPost } from "./utils/ajax"; // function for API request (using the fetch - native)
import InputForm from "./components/InputForm";

const App: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberLogin, setRememberLogin] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(false); //show/hide spinner during the load ajax
    const [msgError, setMsgError] = useState({ show: false, msg: "" }); //for the pink box that show the error

    const showErrorAuth = (e: string) => {
        //show the pink box and the error in case of Auth fail
        const msg =
            e === "email"
                ? "Sorry, we couldn't find this email address.\n Please check and try again."
                : "Password incorrect.\n Note that passwords are case-sensitive (AaBb).";
        setMsgError({ show: true, msg });
    };

    const ajaxAuth = async () => {
        //in case of having an api to call
        const info = { email, password, rememberLogin };
        return await AjaxPost("login", info);
    };

    const simuleAjax = (obj: { email: string; password: string }) => {
        //this is a fake function ajax. We dont need correctly write interfaces typescript here
        let res = { ok: 1, error: 0 };
        if (obj.email != "email@email.com") {
            res = { ok: 0, error: 1 };
        } else {
            if (obj.password != "12345") {
                res = { ok: 0, error: 2 };
            }
        }

        return new Promise((resolve) => {
            // return the 'response' after 1s
            setTimeout(() => {
                resolve(res);
            }, 1000);
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        //we are not using ajax, but we can simulate a request to see how works
        // in case of available server, use ajaxAuth function. See the `info` obj in there.

        setLoadingAuth(true);
        setMsgError({ show: false, msg: "" }); // in case of retry login, hide the box error

        //ajaxAuth() -> uncomment this , and delete the next line, to use  a real API
        simuleAjax({ email, password })
            .then((resposta: any) => {
                setLoadingAuth(false);
                if (resposta.ok) {
                    //ok -> redirect to Home Page
                    //... save session or set localstorage
                    window.location.replace("/");
                } else {
                    //error
                    if (resposta.error === 1) {
                        // code error=1 -> email not found
                        showErrorAuth("email");
                    }
                    if (resposta.error === 2) {
                        // code error=2 -> incorrect password
                        showErrorAuth("password");
                    }
                }
            })
            .catch((error) => {
                setLoadingAuth(false);
                console.log(error);
            });

        // console.log("credentials: ", email, password);
    };

    return (
        <div className={`App`}>
            <div className="auth-form-body">
                <div className="title">Sign in</div>

                {msgError.show && (
                    <div className="auth-form-box-error">
                        {msgError.msg.split("\n").map((item, i) => (
                            //break the msg text. In react we cannot securely inject tags like '<br>' via function
                            <div key={i}>{item}</div>
                        ))}
                    </div>
                )}

                <form onSubmit={handleSubmit} autoComplete="current-password">
                    <InputForm
                        className="auth-form-input"
                        label={"Email"}
                        type={"email"} //input type. The browser handles validation natively
                        onChange={setEmail} //pass the `setState` of a state as a prop
                        required //input cannot be empty
                    />

                    <InputForm
                        className="auth-form-input"
                        label={"Password"}
                        type={"password"}
                        onChange={setPassword}
                        required
                    />

                    <label className="auth-form-remember">
                        <input
                            type="checkbox"
                            onChange={() => setRememberLogin(!rememberLogin)}
                            checked={rememberLogin}
                        />
                        <span className="checkmark"></span>
                        <div>Remember me?</div>
                    </label>

                    <button type="submit" className="button-submit">
                        {loadingAuth ? (
                            <img src={Spinner} />
                        ) : (
                            <span>Sign in</span>
                        )}
                    </button>
                </form>

                <div className="auth-form-footer">
                    <div>
                        <a href="#">Forgot your password?</a>
                        {/* here im putting a url, but it can also be a function to open a modal. Depends on business rules */}
                    </div>
                    <div>
                        Don't have an account? <a href="#">Sign up</a>
                    </div>
                    <a href="#">Resend email confirmation</a>
                </div>
            </div>
        </div>
    );
};

export default App;
