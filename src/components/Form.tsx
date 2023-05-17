import React, { useState } from "react";
import content from "../../content";
import Subscription from "./Subscription";

const Form = () => {
  const [planSelectedId, setPlanSelectedId] = useState(2);
  const { subscriptionPlan } = content;
  const { id, month, totalPrice, perMonthPrice, activePlan } =
    content.subscriptionPlan;

  const selectedPlanObject = subscriptionPlan.filter(
    (selected) => selected.id === planSelectedId
  );
  const selectedPlanPrice = selectedPlanObject[0].totalPrice;
  const gstPrice = 0.18 * selectedPlanPrice;
  const priceAfterGst = gstPrice + selectedPlanPrice;

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-top-actions">
          <div className="sign-up">
            <p className="one">1</p>
            <p>Sign Up</p>
          </div>
          <div className="subscribe">
            <p className="two">2</p>
            <p>Subscribe</p>
          </div>
        </div>
        <form className="subscription-plans-form">
          <div className="form-header">
            <p>Select your subscription plan</p>
          </div>
          {subscriptionPlan.map(
            ({ id, month, totalPrice, perMonthPrice, activePlan }) => (
              <Subscription
                key={id}
                id={id}
                month={month}
                totalPrice={totalPrice}
                perMonthPrice={perMonthPrice}
                activePlan={activePlan}
                planSelectedId={planSelectedId}
                setPlanSelectedId={setPlanSelectedId}
              />
            )
          )}
          <div className="order-summary">
            <div className="subscription-fee-wrapper">
              <span className="subscription-fee-p">Subscription Fee</span>
              <span className="subscription-fee">
                ₹ {18401 + selectedPlanPrice}
              </span>
            </div>
            <div className="limited-time-wrapper">
              <div className="limited-time-header">
                <span className="limited-time-text">Limited time offer</span>
                <span className="limited-time-price">-₹18401</span>
              </div>
              <div className="offer-validy-wrapper">
                <img src="Icon-Clock.svg" alt="clock icon" />
                <span className="offer-validy-p">
                  Offer calid till 25th March 2023
                </span>
              </div>
            </div>
            <div className="order-total-wrapper">
              <span className="order-total-text">
                <b>Total</b> (Incl. of 18% GST)
              </span>
              <span className="order-total-price">₹ {selectedPlanPrice} </span>
            </div>
          </div>
          <div className="payment-action-buttons">
            <button className="cancel-button">CANCEL</button>
            <button className="proceed-button">PROCEED TO PAY</button>
          </div>
        </form>
        <img
          src="Razorpay Icon.svg"
          className="razorpay-img"
          alt="Razorpay icon"
        />
      </div>
    </div>
  );
};
export default Form;
