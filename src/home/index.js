import Header from '../header';
import SectionFour from '../section-four';
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
        </div>
    )
}

export default Home;