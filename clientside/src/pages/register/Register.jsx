import './register.css';

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                 <h3 className="registerLogo">AntiSocial</h3>
                 <span className="registerDesc">Connect with friends and the world around you on AntiSocial</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm Password" className="registerInput" />
                        <button className="registerBtn">Sign Up</button>
                        <button className="registerBtn">Login to Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}