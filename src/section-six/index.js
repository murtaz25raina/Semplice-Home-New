import Vid from "../assets/Sequence-APG.mp4";
import "./index.css";

const SectionSix = () => {
  return (
    <div className="section-six-container">
      <div className="section-six-container-first">
        <div className="divider-text-container-section-four">
          <span className="design-for-the-future">DESIGN FOR THE FUTURE</span>
          <span className="divider-section-six"></span>
        </div>
        <div className="features-that-elevate-your-work-container">
          <span className="features-that-elevate-your-work">
            Features that
            <br />
            elevate your work.
          </span>
        </div>
      </div>
      <div className="section-six-container-second">
        <div className="section-six-container-second-left-block">
          <div className="section-six-container-second-left-block-text-container">
            <div className="custom-animations">Custom Animations</div>
            <div className="hover-effects-scroll-animations">
              Hover effects, scroll animations,
              <br />
              elements that move on load or click.
              <br />
              You used to need developers for
              <br />
              these animations. Now you can build
              <br />
              them visually in minutes.
            </div>
            <div className="learn-more-button">LEARN MORE</div>
            <div className="artwork-by-media-work">
              ARTWORK BY{" "}
              <span style={{ textDecoration: "underline" }}>MEDIA.WORK</span>
            </div>
          </div>
        </div>
        <div className="section-six-container-second-right-block">
          <img
            className="section-six-container-second-right-block-img"
            src="https://www.semplice.com/wp-content/uploads/2022/04/custom_animations_alternative_image.jpg"
            alt="#"
          />
        </div>
      </div>
      <div className="section-six-container-third">
        <div className="section-six-container-third-left-block">
          <img
            style={{ maxWidth: "100%" }}
            src="https://www.semplice.com/wp-content/uploads/2022/04/variable_webfonts.svg"
            alt="#"
          />
          <div className="custom-type">Custom Type</div>
          <div className="we-are-type-lovers-too">
            We’re type lovers too. Upload self-hosted or web fonts in seconds,
            including variable typefaces. Build efficiently with your own global
            type system.
          </div>
          <div className="section-six-container-third-learn-more">
            LEARN MORE
          </div>
        </div>
        <div className="section-six-container-third-right-block">
          <div className="custom-type">
            Mobile <br />
            Responsible
          </div>
          <div className="we-are-type-lovers-too">
            Right out of the box. But if you want to adjust your breakpoints or
            set mobile typography styles for consistency, you can.
          </div>
          <div className="section-six-container-third-learn-more">
            LEARN MORE
          </div>
          <div>
            <img
              style={{ maxWidth: "100%", height: "100%" }}
              src="https://www.semplice.com/wp-content/uploads/2022/04/mobile_responsive.jpg"
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="section-six-container-fourth">
        <div className="section-six-container-fourth-left-block">
          <img className="img-visible-only-below-wd-1000" src="https://www.semplice.com/wp-content/uploads/2022/04/tab_for_APG.png" alt="#"/>
          <video
            width="100%"
            className="section-six-container-fourth-left-block-video"
            preload="none"
            autoPlay
            muted={true}
            loop={true}
          >
            <source src={Vid} type="video/mp4"></source>
          </video>
        </div>
        <div className="section-six-container-fourth-right-block">
          <div
            style={{ fontSize: "3.5rem", lineHeight: "4rem" }}
            className="custom-animations"
          >
            The Advanced
            <br />
            Portfolio Grid
          </div>
          <div className="hover-effects-scroll-animations an-immediate-homepage">
            An immediate homepage redesign, enabled with a click. Choose from a
            range of grid designs, with beautiful page transitions and hover
            effects built right in.
          </div>
          <div className="learn-more-button">LEARN MORE</div>
          <div className="artwork-by-media-work">
            ARTWORK BY
            <span style={{ textDecoration: "underline" }}>FRENSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
