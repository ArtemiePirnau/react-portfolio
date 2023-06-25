const PortfolioItem = ({ id, img, link }) => {
  return (
    <a
      key={id}
      className="portfolio__item"
      target="_blank"
      href={link}
      style={{ backgroundImage: `url(${img})` }}
    ></a>
  );
};
export default PortfolioItem;
