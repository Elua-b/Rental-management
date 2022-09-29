import React,{useState} from "react";
// import "./form.css";
import axios from 'axios'

function Login() {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			// window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <h2 className="rtl">RentalPay</h2>
        <h5 className="sign">Log In</h5>

         <h5 className="sign" style={{opacity:"0.7",fontSize:"12px"}}>Provide the credentials from your property manager.</h5>
        <div className="input-container">
          <label>Email/CellPhone</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={handleChange}

          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {error && <div style={{color:"red" ,fontSize:"13px"}}>{error}</div>}
        <button type="submit" className="form-btn">
          Login
        </button>
        <div className="f-bottom">
          <span className="fbtm">Don't have account ? </span>{" "}
          <span className="log">Sign Up</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
