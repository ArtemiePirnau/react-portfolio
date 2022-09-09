import mixitup from "mixitup";
import { useEffect } from "react";
import { dataApps, dataWebsites, dataReact } from "../../data/data.js";
import PortfolioItem from "../PortfolioItem/PortfolioItem.jsx";
//import "./Portfolio.scss";
const Portfolio = () => {
  useEffect(() => {
    mixitup(".portfolio__items-wrapper", {
      selectors: {
        target: ".websites, .apps, .react",
      },
      animation: {
        duration: 800,
      },
    });
  }, []);
  return (
    <section className="portfolio text">
      <div className="container">
        <h3 className="portfolio__title section-title">Portfolio</h3>
        <div className="portfolio__inner">
          <p className="portfolio__text section-text">Some of my works</p>
          <div className="portfolio__tabs">
            <button
              className="portfolio__tab text portfolio__tab-websites"
              data-filter=".websites"
            >
              HTML/CSS
              <span></span>
            </button>
            <button className="portfolio__tab text" data-filter=".apps">
              JavaScript
              <span></span>
            </button>
            <button className="portfolio__tab text" data-filter=".react">
              React
              <span></span>
            </button>
          </div>
          <div className="portfolio__items-wrapper">
            <div className="portfolio__items mix websites">
              {dataWebsites.map((item) => {
                return <PortfolioItem key={item.id} item={item} />;
              })}
            </div>
            <div className="portfolio__items mix apps">
              {dataApps.map((item) => {
                return <PortfolioItem key={item.id} item={item} />;
              })}
            </div>
            <div className="portfolio__items mix react">
              {dataReact.map((item) => {
                return <PortfolioItem key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
