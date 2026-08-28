import { useState } from "react";
import "../../../scss/auth/auth.scss";

export function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

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

          <div className="forgot-icon-wrapper wow fadeInUp">
            <div className="forgot-icon">
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>

          <h2 className="title text-center">Forgot Password?</h2>
          <p className="sibtitle text-center">
            No worries! Enter your registered email address and we'll send you a link to reset your password.
          </p>

          {!submitted ? (
            <>
              <form
                className="forgot-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="input-field">
                  <label htmlFor="emailInput" className="form-label">
                    Email Address
                  </label>
                  <div className="input-icon-wrapper">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" className="form-control" id="emailInput" placeholder="Enter your email address" required />
                  </div>
                </div>
                <button type="submit" className="bj_theme_btn w-100 border-0">
                  <i className="fa-solid fa-paper-plane me-2"></i>Send Reset Link
                </button>
              </form>

              <div className="form-footer">
                <div className="divider">
                  <span>or</span>
                </div>
                <a href="/login" className="bj_theme_btn strock_btn w-100 text-center">
                  <i className="fa-solid fa-arrow-left me-2"></i>Back to Login
                </a>
                <div className="new-user">
                  Don't have an account? <a href="/registration">Create an account</a>
                </div>
              </div>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4>Email Sent Successfully!</h4>
              <p>We've sent a password reset link to your email address. Please check your inbox and spam folder.</p>
              <a href="/login" className="bj_theme_btn w-100 text-center">
                <i className="fa-solid fa-arrow-left me-2"></i>Back to Login
              </a>
            </div>
          )}
        </div>

        <div className="login-right">
          <img src="/img/login/login-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
