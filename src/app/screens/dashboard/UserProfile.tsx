import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useGlobals } from "../../hooks/useGlobals";
import MemberService from "../../services/MemberService";
import { serverApi, extractErrorMessage } from "../../../lib/config";

export function UserProfile() {
  const { authMember, setAuthMember } = useGlobals();
  const [memberNick, setMemberNick] = useState(authMember?.memberNick ?? "");
  const [memberPhone, setMemberPhone] = useState(authMember?.memberPhone ?? "");
  const [memberAddress, setMemberAddress] = useState(authMember?.memberAddress ?? "");
  const [memberDesc, setMemberDesc] = useState(authMember?.memberDesc ?? "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    authMember?.memberImage ? `${serverApi}/${authMember.memberImage}` : null,
  );
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  const photoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (newPassword && newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSaving(true);
    try {
      const member = await new MemberService().updateMember(
        {
          memberNick,
          memberPhone,
          memberAddress,
          memberDesc,
          ...(newPassword ? { memberPassword: newPassword } : {}),
        },
        imageFile ?? undefined,
      );
      setAuthMember(member);
      setSuccess("Profile updated successfully.");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(extractErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3 className="dashboard-card__title">Personal Information</h3>
        <p className="dashboard-card__subtitle">Update your personal details here</p>
      </div>

      <div className="dashboard-card__body">
        <form className="profile-form" onSubmit={submitHandler}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <div className="profile-photo">
            <div className="profile-photo__preview">
              <img src={imagePreview ?? "/img/profile-img.png"} alt="Profile Photo" />
              <div className="profile-photo__overlay">
                <i className="fa-solid fa-camera"></i>
              </div>
            </div>
            <div className="profile-photo__actions">
              <label className="profile-photo__upload" htmlFor="profile-picture-file">
                <i className="fa-solid fa-cloud-arrow-up"></i>
                Upload New Photo
                <input type="file" id="profile-picture-file" accept="image/*" onChange={photoChangeHandler} />
              </label>
              <span className="profile-photo__hint">JPG, PNG or GIF. Max size 2MB</span>
            </div>
          </div>

          <div className="form-section">
            <h5 className="form-section__title">Basic Information</h5>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input
                    type="text"
                    className="form-floating-group__input"
                    id="memberNick"
                    placeholder=" "
                    value={memberNick}
                    onChange={(e) => setMemberNick(e.target.value)}
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="memberNick">
                    Username
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input
                    type="tel"
                    className="form-floating-group__input"
                    id="memberPhone"
                    placeholder=" "
                    value={memberPhone}
                    onChange={(e) => setMemberPhone(e.target.value)}
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="memberPhone">
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input
                    type="text"
                    className="form-floating-group__input"
                    id="memberAddress"
                    placeholder=" "
                    value={memberAddress}
                    onChange={(e) => setMemberAddress(e.target.value)}
                  />
                  <label className="form-floating-group__label" htmlFor="memberAddress">
                    Address
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group">
                  <input
                    type="text"
                    className="form-floating-group__input"
                    id="memberDesc"
                    placeholder=" "
                    value={memberDesc}
                    onChange={(e) => setMemberDesc(e.target.value)}
                  />
                  <label className="form-floating-group__label" htmlFor="memberDesc">
                    Bio
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h5 className="form-section__title">Change Password</h5>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-floating-group form-floating-group--password">
                  <input
                    type="password"
                    className="form-floating-group__input"
                    id="newPassword"
                    placeholder=" "
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <label className="form-floating-group__label" htmlFor="newPassword">
                    New Password
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating-group form-floating-group--password">
                  <input
                    type="password"
                    className="form-floating-group__input"
                    id="confirmPassword"
                    placeholder=" "
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <label className="form-floating-group__label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="bj_theme_btn" disabled={saving}>
              <i className="fa-regular fa-floppy-disk"></i>
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
