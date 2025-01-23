import gitIcon from "../assets/git.png"
import instaIcon from "../assets/black-instagram-logo-3497.png"
import discordIcon from "../assets/discord.png"
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
function SocialMidias() {
    return (
        <>
            <section id='btnSocials'>
                <div data-aos="fade-down" data-aos-duration="1500" id='btn'><img src={discordIcon} alt="Git Icon" /></div>

                <div data-aos="fade-down" data-aos-duration="2000" id='btn'><img src={instaIcon} alt="Git Icon" /></div>
                <div data-aos="fade-down" data-aos-duration="2500" id='btn'><img src={gitIcon} alt="Git Icon" /></div>
            </section>
        </>
    );
}
export default SocialMidias