import Form from "./Form";
import content from "../../content";

const Course = () => {
  const { slashedPrice, currentPrice } = content.heroText;
  const { pointers } = content;

  return (
    <section className="marketing-content-container">
      <div className="marketing-content">
        <div className="marketing-content-heading">
          <h1>
            Access curated courses worth{" "}
            <span className="strikedText">
              <span className="slashedPrice">₹ {slashedPrice}</span>
            </span>{" "}
            at just <span className="currentPrice">₹ {currentPrice}</span> per
            year!
          </h1>
        </div>
        <div className="plan-benefits-wrapper">
          <ul className="plan-benefits">
            {pointers.map(({ icon, blueText, whiteText1, whiteText2 }) => (
              <li key={blueText}>
                <img src={icon} />
                <p className="plan-benefits-pointers">
                  {whiteText1} <span>{blueText}</span> {whiteText2}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
};

export default Course;
