import React, { useState } from "react";
import { Subscription } from "../types";

const SubscriptionPlans: FunctionComponent<Subscription> = ({
  month,
  totalPrice,
  perMonthPrice,
  activePlan,
  selectedPlan,
}) => {
  const [planSelected, setPlanSelected] = useState(selectedPlan);

  function handleClick() {
    setPlanSelected((!planSelected);
  }

  return (
    <div className="subscription-plans-wrapper">
      <div
        className={`subscription-plans ${planSelected ? "active" : ""} ${
          activePlan ? "" : "deactive"
        }`}
        onClick={handleClick}
      >
        {totalPrice == 179 ? (
          <div className="recommended-plan">Recommended</div>
        ) : (
          ""
        )}
        <div className="subscription-duration">
          {!activePlan ? (
            <img
              src="deactive.png"
              alt="Green circle with a tick mark inside it"
            />
          ) : !planSelected ? (
            <img
              src="empty-tick.png"
              alt="Green circle with a tick mark inside it"
            />
          ) : (
            <img
              src="filled-tick.svg"
              alt="Green circle with a tick mark inside it"
            />
          )}
          {activePlan ? "" : <div className="expired-plan">Offer expired</div>}
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
};
export default SubscriptionPlans;
