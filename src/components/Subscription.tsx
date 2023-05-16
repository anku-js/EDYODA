export default function Subscription() {
  return (
    <div className="subscription-plans-wrapper">
      <div className="subscription-plans">
        <div className="recommended-plan">Recommended</div>
        <div className="subscription-duration">
          <img src="filled-tick.svg" alt="Green circle with a tick mark inside it"/>
          <label id="12-months-plan">12 Months Subscription</label>
        </div>
        <div className="payment-details">
          <div>
            <span className="total">Total</span>
            <span className="total-price">179</span>
          </div>
          <div>
            <span className="price-per-month">15</span>
            <span className="per-month">/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
