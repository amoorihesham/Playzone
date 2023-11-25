import "./login.css";
import gamepad from "../../assets/gamingpad.jpg";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { ClockLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const LoginSubmit = async (values) => {
    setIsLoading(true);
    const request = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .catch((err) => console.log(err));
    // setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: LoginSubmit,
  });

  return (
    <div className="loginPage f-height d-flex align-items-center">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="left">
              <img src={gamepad} alt="Gaming Pad" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right h-100 py-3 px-2 bg-dark text-center">
              <img src={logo} alt="Site Logo" />
              <h4 className="text-white mt-3 mb-4">Login To Playzone !</h4>
              <form
                className="boeder border-bottom pb-4"
                onSubmit={formik.handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  className="form-control my-3"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {isLoading ? (
                  <button className="btn bg-transparent text-white" disabled>
                    <ClockLoader color="#36d7b7" />
                  </button>
                ) : (
                  <button className="btn btn-success text-white" type="submit">
                    Login
                  </button>
                )}
              </form>
              <Link className="mt-3 d-block">Forget Password?</Link>
              <span className="d-block mt-2 text-white">
                or Create Your Account. <Link to={"/register"}>Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
