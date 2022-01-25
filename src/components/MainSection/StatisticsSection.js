const StatisticsSection = () => {
  return (
    <div className="statistics section">
      <div className="statistics-groups-wrapper">
        <div className="statistics__group">
          <p id="total-backed" className="number">
            $89,914
          </p>
          <p className="paragraph">of $100,000 backed</p>
        </div>
        <div className="statistics__group statistics__group--central">
          <p id="num-backers" className="number">
            5,007
          </p>
          <p className="paragraph">total backers</p>
        </div>
        <div className="statistics__group">
          <p id="days-left" className="number">
            56
          </p>
          <p className="paragraph">days left</p>
        </div>
      </div>
      <div className="statistics__slider">
        <div className="statistics__slider-inner"></div>
      </div>
    </div>
  );
};

export default StatisticsSection;
