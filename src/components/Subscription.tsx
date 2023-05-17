import React, { useState } from "react";

const Subscription = ({
  id,
  month,
  totalPrice,
  perMonthPrice,
  activePlan,
  planSelectedId,
  setPlanSelectedId
}) => {
 

  function handleClick(id) {
    setPlanSelectedId(id !== 1 ? id : planSelectedId);
  }

  return (
    <div className="subscription-plans-wrapper">
      <div
        className={`subscription-plans ${ planSelectedId === id ? "active" : ""} ${
          activePlan ? "" : "deactive"
        }`}
        onClick={ () => handleClick(id)}
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
          ) : !(id === planSelectedId) ? (
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
export default Subscription;
