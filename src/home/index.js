import Header from '../header';
import SectionEight from '../section-eight';
import SectionFour from '../section-four';
import SectionNine from '../section-nine';
import SectionOne from '../section-one';
import SectionSeven from '../section-seven';
import SectionSix from '../section-six';
import SectionThree from '../section-three';
import SectionTwo from '../section-two';
import './index.css';
const Home = ()=>{
    return(
        <div className="sections">
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
            <SectionNine/>
        </div>
    )
}

export default Home;