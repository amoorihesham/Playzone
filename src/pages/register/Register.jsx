import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import gamepad from "../../assets/gamingpad.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { ClockLoader } from "react-spinners";

const Register = () => {
  const [loading, setIsloading] = useState(false);
  const [registerErrors, setRegisterErrors] = useState("");
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(16, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short")
      .max(16, "Too Long")
      .required("Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords Did Not Matchs")
      .required("re-Enter Password"),
  });

  const register = async (values) => {
    setIsloading(true);
    const request = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .then((response) => {
        setRegisterErrors("");
        navigate("/login");
      })
      .catch((err) => {
        setRegisterErrors(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: register,
  });
  return (
    <div className="registerPage f-height d-flex align-items-center ">
      <div className="container">
        <div className="row g-0 ">
          <div className="col-md-6">
            <div className="left">
              <img src={gamepad} alt="Gaming Pad" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right h-100 text-center bg-dark py-3 text-white px-3">
              <h4>Create Account !</h4>
              {registerErrors ? (
                <div className="alert alert-danger p-2">{registerErrors}</div>
              ) : null}
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="username"
                  className="form-control my-3"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username && formik.touched.username ? (
                  <div className="alert alert-danger p-2 mt-1">
                    {formik.errors.username}
                  </div>
                ) : null}
                <input
                  type="email"
                  name="email"
                  className="form-control my-3"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger p-2 mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
                <input
                  type="password"
                  name="password"
                  className="form-control my-3"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger p-2 mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
                <input
                  type="password"
                  name="rePassword"
                  className="form-control my-3"
                  placeholder="rePassword"
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="alert alert-danger p-2 mt-1">
                    {formik.errors.rePassword}
                  </div>
                ) : null}
                {loading ? (
                  <button
                    type="submit"
                    disabled
                    className="btn bg-transparent text-white"
                  >
                    <ClockLoader color="#36d7b7" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className="btn btn-success text-white"
                  >
                    Register
                  </button>
                )}
              </form>
              <p className="mt-2">
                This site is protected by reCAPTCHA and the GooglePrivacy Policy
                and Terms of service applay.
              </p>
              <span>
                Already Have Account? <Link to={"/login"}>Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
