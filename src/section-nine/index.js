import "./index.css";

const SectionNine = () => {
  return (
    <div className="section-nine-container">
      <div className="join-semplice-and-build-with-pride">
        Join Semplice and
        <br />
        build with pride.
      </div>
      <div className="compare-all-editions">→ Compare all editions</div>
      <div className="edition-container">
        <div className="edition edition-top">
          <img src="https://www.semplice.com/wp-content/uploads/2022/04/box_single.png" alt="#" />
          <div className="edition-name">Single</div>
          <div className="edition-desc">Intro Features</div>
          <div className="arrow-compare">➜ Compare</div>
        </div>
        <div className="edition">
          <img src="https://www.semplice.com/wp-content/uploads/2022/04/box_studio.png" alt="#" />
          <div className="edition-name">Studio</div>
          <div className="edition-desc">All Features</div>
          <div className="arrow-compare">➜ Compare</div>
        </div>
        <div className="edition" style={{borderRight:0}}>
          <img src="https://www.semplice.com/wp-content/uploads/2022/04/box_business.png" alt="#" />
          <div className="edition-name">Business</div>
          <div className="edition-desc">For Multiple Sites</div>
          <div className="arrow-compare">➜ Compare</div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
