import React from "react";
import Form from "./Form";
import content from "../../content";

export default function Course() {
  const { slashedPrice, currentPrice } = content.heroText;
  const { pointers } = content;

  return (
    <section className="marketing-content-container">
        <div className="marketing-content">
          <div className="marketing-content-heading">
            <h1>
              Access curated courses worth{" "}
              <span className="slashedPrice">
                ₹ <s>{slashedPrice}</s>
              </span>{" "}
              at just <span className="currentPrice">₹ {currentPrice}</span> per
              year!
            </h1>
          </div>
          <div className="plan-benefits-wrapper">
            <ul className="plan-benefits">
              {pointers.map(({ icon, blueText, whiteText }) => (
                <li>
                  <img src={icon} />
                  <p className="plan-benefits-pointers">
                    <span>{blueText}</span> {whiteText}
                  </p>
                </li>
              ))}
              {/* <li>
                <img src={icon} />
                <p className="plan-benefits-pointers"><span>{blueText}</span> {whiteText}</p>
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
              </li> */}
            </ul>
          </div>
        </div>
      <div>
        <Form />
      </div>
    </section>
  );
}
