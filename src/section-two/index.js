import "./index.css";

const SectionTwo = () => {
  return (
    <div className="container-section-two">
      <div className="section-two-inner-container">
        <div className="section-two-col-mobile">
          <span style={{ textDecoration: "underline" }}>Semplice 6</span> is a
          WordPress-based portfolio tool and community of the world’s leading
          designers. Design a custom site that meets your level of taste and
          standards – no templates, no coding needed.
        </div>
        <div className="section-two-col-4" style={{paddingLeft:'0px'}}>
          <span style={{ textDecoration: "underline" }}>Semplice 6</span> is a
          WordPress-based portfolio tool and community of the world’s leading
          designers.
        </div>
        <div className="section-two-col-4">
          Design a custom site that meets your level of taste and standards – no
          templates, no coding needed.
        </div>
        <div style={{textAlign:'right'}} className="section-two-col-4" >
          <div className="watch-the-trailer">Watch the trailer</div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
