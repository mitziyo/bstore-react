import { useState } from "react";
import "../../../scss/auth/auth.scss";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-area">
      <div className="bg-shapes">
        <img className="wow fadeIn" src="/img/login/heart-shape-01.png" alt="" />
        <img className="wow fadeInLeft" src="/img/login/heart-shape-02.png" alt="" />
        <img className="wow fadeInLeft" src="/img/login/heart-shape-03.png" alt="" />
        <img className="wow" src="/img/login/heart-shape-04.png" alt="" />
      </div>
      <div className="login-wrapper">
        <div className="login-left">
          <a href="/" className="logo logo-lockup">
            <img src="/icons/logo-icon.png" alt="" />
            <span>LightBooks</span>
          </a>
          <h2 className="title">Login to Your Account</h2>
          <div className="sibtitle">Welcome Back! Select Method to login:</div>

          <div className="social-links">
            <a href="#">
              <img src="/img/login/google-icon.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/login/fb-icon.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/login/apple-icon.png" alt="" />
            </a>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <form action="#">
            <div className="input-field">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="input-field pass-field-with-icon">
              <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" />
              <i className={`icon fas fa-eye${showPassword ? "-slash" : ""} toggle-password`} onClick={() => setShowPassword((v) => !v)}></i>
            </div>
            <div className="d-flex justify-content-between input-field">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="forget-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="bj_theme_btn w-100 border-0">
              Log In
            </button>
          </form>
          <div className="new-user">
            New user?<a href="/registration"> Create an account</a>
          </div>
        </div>
        <div className="login-right">
          <img src="/img/login/login-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
