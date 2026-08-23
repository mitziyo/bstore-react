import { useState } from "react";
import "../../../scss/addAddress/addAddress.scss";

export function AddNewAddress() {
  const [addressType, setAddressType] = useState<"home" | "office">("office");
  const [setDefault, setSetDefault] = useState(false);

  return (
    <>
      <div className="add_address_header">
        <a href="/my-address" className="back_link">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Addresses
        </a>
        <div className="header_content">
          <div className="header_icon">
            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="header_text">
            <h2>Add New Address</h2>
            <p>Add a new shipping or billing address to your account</p>
          </div>
        </div>
      </div>

      <div className="add_address_form_wrapper">
        <form>
          <div className="form_section">
            <div className="section_header">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Address Type</h4>
            </div>
            <p className="section_description">Select where you'd like to receive your packages</p>

            <div className="address_type_options">
              <label className="type_card">
                <input
                  type="radio"
                  name="address_type"
                  value="home"
                  checked={addressType === "home"}
                  onChange={() => setAddressType("home")}
                />
                <div className="card_content">
                  <div className="card_icon">
                    <i className="fa-solid fa-house"></i>
                  </div>
                  <div className="card_text">
                    <strong>Home</strong>
                    <span>Residential address</span>
                  </div>
                  <div className="check_indicator">
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </label>
              <label className="type_card">
                <input
                  type="radio"
                  name="address_type"
                  value="office"
                  checked={addressType === "office"}
                  onChange={() => setAddressType("office")}
                />
                <div className="card_content">
                  <div className="card_icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div className="card_text">
                    <strong>Office</strong>
                    <span>Workplace address</span>
                  </div>
                  <div className="check_indicator">
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="form_section">
            <div className="section_header">
              <i className="fa-regular fa-user"></i>
              <h4>Contact Information</h4>
            </div>

            <div className="row g-4">
              <div className="col-md-12">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-regular fa-user"></i>
                    Full Name <span className="required">*</span>
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-phone"></i>
                    Phone Number <span className="required">*</span>
                  </label>
                  <input type="tel" className="form-control" id="phone_no" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-phone"></i>
                    Alternative Phone <span className="optional">(Optional)</span>
                  </label>
                  <input type="tel" className="form-control" id="alternative_phone_no" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-regular fa-envelope"></i>
                    Email Address <span className="optional">(Optional)</span>
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="your.email@example.com" />
                </div>
              </div>
            </div>
          </div>

          <div className="form_section">
            <div className="section_header">
              <i className="fa-solid fa-map-location-dot"></i>
              <h4>Location Details</h4>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-globe"></i>
                    Country <span className="required">*</span>
                  </label>
                  <select className="form-control" defaultValue="">
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-city"></i>
                    City <span className="required">*</span>
                  </label>
                  <select className="form-control" defaultValue="">
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="New York">New York</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-map-pin"></i>
                    Area / Zone <span className="required">*</span>
                  </label>
                  <select className="form-control" defaultValue="">
                    <option value="" disabled>
                      Select Area
                    </option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Bronx">Bronx</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-hashtag"></i>
                    Postal / ZIP Code <span className="optional">(Optional)</span>
                  </label>
                  <input type="text" className="form-control" id="zip_code" placeholder="10001" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="enhanced_field">
                  <label className="field_label">
                    <i className="fa-solid fa-location-dot"></i>
                    Street Address <span className="required">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    rows={3}
                    placeholder="Enter your full street address including building name, floor, apartment number..."
                    required
                  ></textarea>
                  <span className="field_hint">Include apartment, suite, unit, building, floor, etc.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form_section form_section--light">
            <div className="default_address_toggle">
              <label className="toggle_label">
                <input
                  type="checkbox"
                  name="set_default"
                  id="set_default"
                  checked={setDefault}
                  onChange={(e) => setSetDefault(e.target.checked)}
                />
                <span className="toggle_switch"></span>
                <div className="toggle_text">
                  <strong>Set as default address</strong>
                  <span>Use this address as your primary delivery location</span>
                </div>
              </label>
            </div>
          </div>

          <div className="form_actions">
            <a href="/my-address" className="bj_theme_btn btn_outline">
              <i className="fa-solid fa-xmark"></i>
              Cancel
            </a>
            <button type="submit" className="bj_theme_btn btn_primary">
              <i className="fa-solid fa-check"></i>
              Save Address
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
