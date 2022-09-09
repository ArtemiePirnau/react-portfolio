const PortfolioItem = ({ id, item }) => {
  //console.log(id);
  return (
    <a
      key={id}
      className="portfolio__item"
      target="_blank"
      href={item.link}
      style={{ backgroundImage: `url(${item.img})` }}
    ></a>
  );
};
export default PortfolioItem;
