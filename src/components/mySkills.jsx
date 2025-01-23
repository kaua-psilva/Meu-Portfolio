import javaSCript from '../assets/icon-javscript.png';
import tailWind from '../assets/icon-tailwindcss.png';
import gitIcon from '../assets/git.png';
import sassIcon from '../assets/icon-sass.png';
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

function MinhasSkills() {
    return (
        <>
            <div id="contentSkills">
                <h1 id="skillsTitle">
                    <span style={{ fontWeight: 'lighter' }}>Minhas</span> <span style={{ fontWeight: 'bolder' }}>Habilidades</span>
                </h1>
                <div id="skills">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src={javaSCript} alt="" />
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>JavaScript</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img src={tailWind} alt="" />
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>TailWind</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <img src={gitIcon} alt="" />
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>Git</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2500">
                        <img src={sassIcon} alt="" />
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>Sass</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <FaReact size={50} />
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>React</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MinhasSkills;
