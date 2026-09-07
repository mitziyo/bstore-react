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
            No worries! Enter your registered phone number and we'll send you a code to reset your password.
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
                  <label htmlFor="phoneInput" className="form-label">
                    Phone Number
                  </label>
                  <div className="input-icon-wrapper">
                    <i className="fa-solid fa-phone"></i>
                    <input type="tel" className="form-control" id="phoneInput" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <button type="submit" className="bj_theme_btn w-100 border-0">
                  <i className="fa-solid fa-paper-plane me-2"></i>Send Reset Code
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
              <h4>Code Sent Successfully!</h4>
              <p>We've sent a password reset code to your phone number.</p>
              <a href="/login" className="bj_theme_btn w-100 text-center">
                <i className="fa-solid fa-arrow-left me-2"></i>Back to Login
              </a>
            </div>
          )}
        </div>

        <div className="login-right">
          <div className="login-right__content">
            <i className="fa-solid fa-book-open"></i>
            <h3>Join Thousands of Readers</h3>
            <p>Discover your next favorite book and track every order in one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
