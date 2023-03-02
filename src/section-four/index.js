import "./index.css";

const SectionFour = () => {
  return (
    <div className="container-section-four">
      <div className="black-background-section-four">
        <div className="section-four-image-button-container">
          <img
            width={"350px"}
            className="best-of-the-best"
            src="https://www.semplice.com/wp-content/uploads/2023/01/Semplice-Best-of-the-Best-Badge.svg"
            alt="#"
          />
          <div className="see-the-winners">➜ SEE THE WINNERS</div>
        </div>
      </div>
      <div className="container-section-four-b">
        <div className="divider-text-container-section-four">
          <span className="trusted-by-the-best">TRUSTED BY THE BEST</span>
          <span className="divider-section-four"></span>
        </div>
        <div className="the-worlds-leading-designers">
          <span>The world's leading</span>
          <br />
          <span>designers use and</span>
          <br />
          <span>love Semplice.</span>
        </div>
        <div className="see-their-portfolios">→ See their portfolios</div>
        <div className="images-like-a24-disney">
          <img
            width={"100%"}
            src="https://www.semplice.com/wp-content/uploads/2022/04/logos.svg"
            alt="#"
          />
        </div>
      </div>

      <div className="container-section-four-c">
        <div className="fading-images">
          <div className="bottom-img">
            <img
              className="section-four-images"
              src={imageData[0].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[0].name}</div>
            <div className="image-desg">{imageData[0].desg}</div>
            </div>
          </div>
          <div className="top-img">
            <img
              className="section-four-images"
              src={imageData[1].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[1].name}</div>
            <div className="image-desg">{imageData[1].desg}</div>
            </div>         
          </div>
        </div>
        <div className="vertical-divider"></div>

        <div className="fading-images">
          <div className="bottom-img">
            <img
              className="section-four-images"
              src={imageData[2].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[2].name}</div>
            <div className="image-desg">{imageData[2].desg}</div>
            </div>
          </div>
          <div className="top-img">
            <img
              className="section-four-images"
              src={imageData[3].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[3].name}</div>
            <div className="image-desg">{imageData[3].desg}</div>
            </div>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div className="fading-images">
          <div className="bottom-img">
            <img
              className="section-four-images"
              src={imageData[4].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[4].name}</div>
            <div className="image-desg">{imageData[4].desg}</div>
            </div>
          </div>
          <div className="top-img">
            <img
              className="section-four-images"
              src={imageData[5].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[5].name}</div>
            <div className="image-desg">{imageData[5].desg}</div>
            </div>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div className="fading-images">
          <div className="bottom-img">
            <img
              className="section-four-images"
              src={imageData[6].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[6].name}</div>
            <div className="image-desg">{imageData[6].desg}</div>
            </div>
          </div>
          <div className="top-img">
            <img
              className="section-four-images"
              src={imageData[7].img}
              alt="#"
            />
            <div className="image-name-desg">
            <div className="image-name">{imageData[7].name}</div>
            <div className="image-desg">{imageData[7].desg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

const imageData = [
  {
    id: 1,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/Portrait_AshThorp.jpg",
    name: "Ash Thorp",
    desg: "Illustrator, graphic designer & creative director",
  },
  {
    id: 2,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/d1.jpg",
    name: "Erik Jonsson",
    desg: "Design & Art Direction",
  },
  {
    id: 3,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/Portrait_ElenaMiska.jpg",
    name: "Elena Miska",
    desg: "Designer, art director & artist",
  },
  {
    id: 4,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/Michela-Picchi_Potrait.jpg",
    name: "Michela Picchi",
    desg: "Multidisciplinary artist",
  },
  {
    id: 5,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/Portrait_VernaMichelitsch.jpg",
    name: "Verena Michelitsch",
    desg: "Independent designer & art director",
  },
  {
    id: 6,
    img: "https://www.semplice.com/wp-content/uploads/2022/05/leandro-punchy-red.jpg",
    name: "Lebassis",
    desg: "Lettering artist & art director",
  },
  {
    id: 7,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/Portrait_Ayaka.jpg",
    name: "Ayaka B. Ito",
    desg: "Independent brand, graphic & type designer",
  },
  {
    id: 8,
    img: "https://www.semplice.com/wp-content/uploads/2022/04/Ty-Johnson_Potrait.jpg",
    name: "Ty Johnson",
    desg: "Creative director & music documentarian",
  },
];
