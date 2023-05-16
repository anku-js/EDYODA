import Subscription from "./Subscription";

export default function Form() {
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
          <div className="select-plan-p">
            <p>Select your subscription plan</p>
          </div>
          <Subscription />
          <div className="fee-structure">
            <div>
              <span className="subscription-fee">Subscription Fee</span>
              <span className="subscription-fee"></span>
            </div>
            <div className="limited-time">
              <div>
                <span>Limited time offer</span>
                <span>-18401</span>
              </div>
              <div>
                <span>Offer calid till 25th March 2023</span>
              </div>
            </div>
            <div>
              <span>Total (Incl. of 18% GST)</span>
              <span>149</span>
            </div>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}
