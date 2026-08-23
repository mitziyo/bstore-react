export function UserProfile() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3 className="dashboard-card__title">Personal Information</h3>
        <p className="dashboard-card__subtitle">Update your personal details here</p>
      </div>

      <div className="dashboard-card__body">
        <form action="#" className="profile-form">
          <div className="profile-photo">
            <div className="profile-photo__preview">
              <img src="/img/profile-img.png" alt="Profile Photo" />
              <div className="profile-photo__overlay">
                <i className="fa-solid fa-camera"></i>
              </div>
            </div>
            <div className="profile-photo__actions">
              <label className="profile-photo__upload" htmlFor="profile-picture-file">
                <i className="fa-solid fa-cloud-arrow-up"></i>
                Upload New Photo
                <input type="file" id="profile-picture-file" accept="image/*" />
              </label>
              <span className="profile-photo__hint">JPG, PNG or GIF. Max size 2MB</span>
            </div>
          </div>

          <div className="form-section">
            <h5 className="form-section__title">Basic Information</h5>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input type="text" className="form-floating-group__input" id="firstName" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="firstName">
                    First Name
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input type="text" className="form-floating-group__input" id="lastName" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="lastName">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input type="email" className="form-floating-group__input" id="email" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="email">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input type="tel" className="form-floating-group__input" id="phone" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="phone">
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group-modern">
                  <label className="form-group-modern__label">Date of Birth</label>
                  <input type="date" className="form-group-modern__input" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group-modern">
                  <label className="form-group-modern__label">Gender</label>
                  <div className="radio-group">
                    <label className="radio-group__item">
                      <input type="radio" name="gender" value="male" className="radio-group__input" />
                      <span className="radio-group__custom"></span>
                      <span className="radio-group__text">Male</span>
                    </label>
                    <label className="radio-group__item">
                      <input type="radio" name="gender" value="female" className="radio-group__input" />
                      <span className="radio-group__custom"></span>
                      <span className="radio-group__text">Female</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h5 className="form-section__title">Change Password</h5>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-floating-group form-floating-group--password">
                  <input type="password" className="form-floating-group__input" id="newPassword" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="newPassword">
                    New Password
                  </label>
                  <button type="button" className="form-floating-group__toggle" data-toggle-password="#newPassword">
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group form-floating-group--password">
                  <input
                    type="password"
                    className="form-floating-group__input"
                    id="confirmPassword"
                    placeholder=" "
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <button type="button" className="form-floating-group__toggle" data-toggle-password="#confirmPassword">
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="bj_theme_btn">
              <i className="fa-regular fa-floppy-disk"></i>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
