import mixitup from "mixitup";
import { useEffect } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem.jsx";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const websites = useSelector((state) => state.websitesList.websitesList);
  const jsApps = useSelector((state) => state.appsJsList.appsJsList);
  const reactApps = useSelector((state) => state.appsReactList.reactList);
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
              {websites.map(({ id, img, link }) => {
                return <PortfolioItem key={id} link={link} img={img} />;
              })}
            </div>
            <div className="portfolio__items mix apps">
              {jsApps.map(({ id, img, link }) => {
                return <PortfolioItem key={id} link={link} img={img} />;
              })}
            </div>
            <div className="portfolio__items mix react">
              {reactApps.map(({ id, img, link }) => {
                return <PortfolioItem key={id} link={link} img={img} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
