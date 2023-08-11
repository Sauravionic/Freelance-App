import "./Login.scss";
import { useState } from 'react';
import NewRequest from "../../utils/NewRequest";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginEndPoint = "/auth/login";
        try {
            const res = await NewRequest.post(loginEndPoint, {username, password});
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/");
        } catch (err: any) {
            setError(err.response.data);
        }
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="">Username</label>
                <input
                    name="username"
                    type="text"
                    placeholder="johndoe"
                    onChange={e=>setUsername(e.target.value)}    
                />

                <label htmlFor="">Password</label>
                <input
                    name="password"
                    type="password"
                    onChange={e=>setPassword(e.target.value)}    
                />
                <button type="submit">Login</button>
                {error && error}
            </form>
        </div>
    );
}

export default Login;
