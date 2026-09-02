import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../scss/auth/auth.scss";
import MemberService from "../../services/MemberService";
import { useGlobals } from "../../hooks/useGlobals";

export function RegistrationPage() {
  const navigate = useNavigate();
  const { setAuthMember } = useGlobals();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [memberNick, setMemberNick] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (memberPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const member = await new MemberService().signup({ memberNick, memberPhone, memberPassword });
      setAuthMember(member);
      navigate("/");
    } catch {
      setError("That username or phone number is already in use.");
    }
  };

  return (
    <div className="login-area registration-area">
      <div className="login-wrapper">
        <div className="login-left">
          <Link to="/" className="logo logo-lockup">
            <img src="/icons/logo-icon.png" alt="" />
            <span>LightBooks</span>
          </Link>
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
            <div className="input-field">
              <input
                type="tel"
                name="memberPhone"
                className="form-control"
                placeholder="Phone"
                value={memberPhone}
                onChange={(e) => setMemberPhone(e.target.value)}
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
            <div className="input-field pass-field-with-icon">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i
                className={`icon fas fa-eye${showConfirmPassword ? "-slash" : ""} toggle-password`}
                onClick={() => setShowConfirmPassword((v) => !v)}
              ></i>
            </div>
            <div className="d-flex justify-content-between input-field">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" required />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I Agreed with the <Link to="/privacy-policy">Privacy policy</Link>
                </label>
              </div>
            </div>
            <button type="submit" className="bj_theme_btn w-100 border-0">
              Sign Up
            </button>
          </form>
          <div className="new-user">
            Already have an account?<Link to="/login"> Login Here</Link>
          </div>
        </div>
        <div className="login-right">
          <img className="mt-auto" src="/img/login/reginstration-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
