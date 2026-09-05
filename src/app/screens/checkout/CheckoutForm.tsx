import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";
import { extractErrorMessage } from "../../../lib/config";

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export function CheckoutForm({ total }: { total: number }) {
  const navigate = useNavigate();
  const { basket } = useGlobals();
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (basket.cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setSubmitting(true);
    try {
      const order = await new OrderService().createOrder(basket.cartItems);
      basket.onDeleteAll();
      navigate("/order-confrmation", { state: { order } });
    } catch (err) {
      setError(extractErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="col-lg-7">
      <div className="checkout-card">
        <div className="checkout-card__header">
          <div className="checkout-card__icon">
            <i className="fa-regular fa-credit-card"></i>
          </div>
          <div>
            <h3 className="checkout-card__title">Payment details</h3>
            <p className="checkout-card__subtitle">Enter your card to complete the transaction.</p>
          </div>
        </div>
        <div className="checkout-card__body">
          <div className={`payment-card-preview${flipped ? " flip" : ""}`}>
            <div className="payment-card-preview__front">
              <div className="payment-card-preview__chip"></div>
              <div className="payment-card-preview__number">{cardNumber || "•••• •••• •••• ••••"}</div>
              <div className="payment-card-preview__row">
                <span>{cardholderName || "CARDHOLDER NAME"}</span>
                <span>{expiry || "MM/YY"}</span>
              </div>
            </div>
            <div className="payment-card-preview__back">
              <div className="payment-card-preview__stripe"></div>
              <div className="payment-card-preview__cvc">{cvc || "•••"}</div>
            </div>
          </div>

          <form className="checkout-form" onSubmit={submitHandler}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row gy-3">
              <div className="col-md-12">
                <div className="form-floating-group">
                  <input
                    className="form-floating-group__input"
                    type="text"
                    placeholder=" "
                    id="cardholder_name"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="cardholder_name">
                    Cardholder Name *
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating-group">
                  <input
                    className="form-floating-group__input"
                    type="text"
                    inputMode="numeric"
                    placeholder=" "
                    id="card_number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="card_number">
                    Card Number *
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating-group">
                  <input
                    className="form-floating-group__input"
                    type="text"
                    inputMode="numeric"
                    placeholder=" "
                    id="expiry_date"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="expiry_date">
                    Expiry Date (MM/YY) *
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating-group">
                  <input
                    className="form-floating-group__input"
                    type="text"
                    inputMode="numeric"
                    placeholder=" "
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
                    onFocus={() => setFlipped(true)}
                    onBlur={() => setFlipped(false)}
                    required
                  />
                  <label className="form-floating-group__label" htmlFor="cvc">
                    CVC *
                  </label>
                </div>
              </div>
            </div>
            <div className="checkout-card__footer">
              <button type="submit" className="checkout-submit" disabled={submitting}>
                <i className="fa-solid fa-lock"></i>
                <span>{submitting ? "Processing…" : "Pay"}</span>
                <span className="checkout-submit__price">${total.toFixed(2)}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
