import React,{useState} from "react";
import "./form.css";
import axios from 'axios'

function Form() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      // navigate("/login");
      console.log(res.message);
      console.log("hello");
      
      
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
        <h5 className="sign">Sign Up</h5>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
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
          Register
        </button>
        <div className="f-bottom">
          <span className="fbtm">Already have an account ? </span>{" "}
          <span className="log">Log In</span>
        </div>
      </form>
    </div>
  );
}

export default Form;
