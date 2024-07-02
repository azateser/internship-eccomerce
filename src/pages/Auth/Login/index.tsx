import React from "react";
import s from "./Login.module.css";
import LoginPageImage from "../../../assets/images/auth/login.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/shared/Button";
import Input from "../../../components/shared/Input";
import Checkbox from "../../../components/shared/Checkbox";
import { useAppDispatch } from "../../../services";
import { toast } from "react-toastify";
import { login } from "../../../services/authSlice";
import { getCurrentUser } from "../../../services/authSlice/api";
import { RiArrowLeftLine } from "react-icons/ri";


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState("john@mail.com");
  const [password, setPassword] = React.useState("changeme");


  const handleLogin = () => {
    if (!email && !password) {
      return toast.error<never>("Email and Password are required")
    }
    if (!email) {
      return toast.error<never>("Email is required")
    }
    if (!password) {
      return toast.error<never>("Password is required")
    }

    const loginPromise = new Promise(async (resolve, reject) => {
       try {
        const res = await dispatch(login({ email, password }))

      if (res.payload.access_token) {
      localStorage.setItem("token", JSON.stringify(res.payload.access_token));
      await dispatch(getCurrentUser());
      navigate("/");
      resolve("Login Success")
    } else {
    reject("Login Failed")
  }
} catch (error) {
  reject("Login Failed")
}
})

toast.promise(loginPromise, {
  pending: "Logging in...",
  success: "Login Success",
  error: "Login Failed"
})
}

  return (
    <div className={s.container}>
      <div className={s.left}>
        <img src={LoginPageImage} alt="login" />
        <Link to="/"
        className={s.backButton}
        ><RiArrowLeftLine size={24} /> Back to homepage</Link>
      </div>
      <div className={s.right}>
        <div className={s.titeWrapper}>
          <h1>Welcome 👋 </h1>
          <p>Please login here</p>
        </div>

        <form className={s.formWrapper} onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <Input
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <div className={s.rememberForgot}>
            <Checkbox label="Remember Me" />
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <Button width="full" onClick={handleLogin}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
