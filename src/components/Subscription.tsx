export default function Subscription() {
  return (
    <div className="subscription-plans-wrapper">
      <div className="subscription-plans">
        <div className="recommended-plan">Recommended</div>
        <div className="subscription-duration">
          <input
            type="radio"
            for="12-months-plan"
            value="12-months"
            name="12-months-plan"
          />
          <label id="12-months-plan">12 Months Subscription</label>
        </div>
        <div className="payment-details">
          <div className="price-per-month">
            <span className="price">Total</span>
            <span className="per-month">179</span>
          </div>
          <div>
            <span>15</span>
            <span>
             /mo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
