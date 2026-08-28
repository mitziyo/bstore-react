import { useState } from "react";
import "../../../scss/auth/auth.scss";

export function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="login-area registration-area">
      <div className="login-wrapper">
        <div className="login-left">
          <a href="/" className="logo logo-lockup">
            <img src="/icons/logo-icon.png" alt="" />
            <span>LightBooks</span>
          </a>
          <h2 className="title">Sign Up to LightBooks</h2>
          <div className="sibtitle">Create Your Account with Just Few Steps</div>

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
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="input-field">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="input-field pass-field-with-icon">
              <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" />
              <i className={`icon fas fa-eye${showPassword ? "-slash" : ""} toggle-password`} onClick={() => setShowPassword((v) => !v)}></i>
            </div>
            <div className="input-field pass-field-with-icon">
              <input type={showConfirmPassword ? "text" : "password"} className="form-control" placeholder="Confirm Password" />
              <i
                className={`icon fas fa-eye${showConfirmPassword ? "-slash" : ""} toggle-password`}
                onClick={() => setShowConfirmPassword((v) => !v)}
              ></i>
            </div>
            <div className="d-flex justify-content-between input-field">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I Agreed with the <a href="/privacy-policy">Privacy policy</a>
                </label>
              </div>
            </div>
            <button type="submit" className="bj_theme_btn w-100 border-0">
              Sign Up
            </button>
          </form>
          <div className="new-user">
            Already have an account?<a href="/login"> Login Here</a>
          </div>
        </div>
        <div className="login-right">
          <img className="mt-auto" src="/img/login/reginstration-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
