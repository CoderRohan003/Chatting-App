import Add from "../images/addavatar.png";

export default function Login()
{
    return (
        <div>
            <div className="formContainer">
            <div className="formWrapper-login">
            <span className="logo-login">Welcome to fWhatsApp</span>
            <span className="title-login">Login</span>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                
                <button>Sign In</button>
            </form>
            <p>You don't have a account?<a href="#">Register</a> </p>
            </div>
            </div>
        </div>
    );
}