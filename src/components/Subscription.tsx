import { useState } from "react";

export default function Subscription({ month, totalPrice, perMonthPrice }) {
  const [planSelected, setPlanSelected] = useState(false);

  function handleClick() {
    setPlanSelected(true);
  }

  return (
    <div className="subscription-plans-wrapper">
      <div
        className={`subscription-plans ${planSelected ? "active" : ""}`}
        onClick={handleClick}
      >
        {totalPrice == 179 ? (
          <div className="recommended-plan">Recommended</div>
        ) : (
          ""
        )}
        <div className="subscription-duration">
          {!planSelected ? (
            <input
              type="radio"
              for="months-plan"
              name="months-plan"
              vlaue="months-plan"
            />
          ) : (
            <img
              src="filled-tick.svg"
              alt="Green circle with a tick mark inside it"
            />
          )}
          <label id="months-plan">{month} Months Subscription</label>
        </div>
        <div className="payment-details">
          <div>
            <span className="total">Total</span>
            <span className="total-price">₹{totalPrice}</span>
          </div>
          <div>
            <span className="price-per-month">₹{perMonthPrice}</span>
            <span className="per-month">/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
