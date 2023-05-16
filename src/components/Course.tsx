import Form from "./Form";
import content from "../../content";

export default function Course() {
  const { slashedPrice, currentPrice } = content.heroText;
  return (
    <div className="marketing-content-container">
      <section>
        <div className="marketing-content">
          <div className="marketing-content-heading">
            <p>
              Access curated courses worth{" "}
              <span className="slashedPrice">₹ <s>{slashedPrice}</s></span> at just{" "}
              <span className="currentPrice">{currentPrice}</span> per year!
            </p>
          </div>
          <div className="plan-benefits-wrapper">
            <ul className="plan-benefits">
              <li>
                <img src="Icon1.svg" />
                <p className="plan-benefits-pointers"><span>100+</span> Job relevant courses</p>
              </li>
              <li>
                <img src="Icon2.svg" />
                <p className="plan-benefits-pointers"><span></span>2000+ Hours of content</p>
              </li>
              <li>
                <img src="Icon3.svg" />
                <p className="plan-benefits-pointers"><span>Exclusive</span> webinar access</p>
              </li>
              <li>
                <img src="Icon4.svg" />
                <p className="plan-benefits-pointers">Scholarshit worth <span>₹94,500</span></p>
              </li>
              <li>
                <img src="Icon5.svg" />
                <p className="plan-benefits-pointers"><span>Add Free </span> learning experience</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <Form />
      </section>
    </div>
  );
}
