import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../scss/auth/auth.scss";
import MemberService from "../../services/MemberService";
import { useGlobals } from "../../hooks/useGlobals";
import { extractErrorMessage } from "../../../lib/config";

export function LoginPage() {
  const navigate = useNavigate();
  const { setAuthMember } = useGlobals();
  const [showPassword, setShowPassword] = useState(false);
  const [memberNick, setMemberNick] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const member = await new MemberService().login({ memberNick, memberPassword });
      setAuthMember(member);
      navigate("/");
    } catch (err) {
      setError(extractErrorMessage(err));
    }
  };

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
          <Link to="/" className="logo logo-lockup">
            <img src="/icons/logo-icon.png" alt="" />
            <span>LightBooks</span>
          </Link>
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
          <form onSubmit={submitHandler}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="input-field">
              <input
                type="text"
                name="memberNick"
                className="form-control"
                placeholder="Username"
                value={memberNick}
                onChange={(e) => setMemberNick(e.target.value)}
                required
              />
            </div>
            <div className="input-field pass-field-with-icon">
              <input
                type={showPassword ? "text" : "password"}
                name="memberPassword"
                className="form-control"
                placeholder="Password"
                value={memberPassword}
                onChange={(e) => setMemberPassword(e.target.value)}
                required
              />
              <i className={`icon fas fa-eye${showPassword ? "-slash" : ""} toggle-password`} onClick={() => setShowPassword((v) => !v)}></i>
            </div>
            <div className="d-flex justify-content-between input-field">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="forget-password">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="bj_theme_btn w-100 border-0">
              Log In
            </button>
          </form>
          <div className="new-user">
            New user?<Link to="/registration"> Create an account</Link>
          </div>
        </div>
        <div className="login-right">
          <img src="/img/login/login-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
