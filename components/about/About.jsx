import Image from "next/image";
import "./about.css";
import {
  aboutImg,
  atom,
  bulb,
  globe,
  heart,
  pc,
  pencil,
  puzzle,
  react,
} from "@/public/assets";
const About = () => {
  return (
    <section className="AboutContainer bg-pale " id="about">
      <div className="abbox1">
        <Image src={globe} alt="svg1" className="svg1" width={70} height={80} />
        <Image src={pc} alt="svg2" className="svg2" width={70} height={80}/>
        <Image src={bulb} alt="svg3" className="svg3" width={70} height={80}/>
        <Image src={react} alt="svg4" className="svg4" width={70} height={80}/>
        <Image src={pencil} alt="svg5" className="svg5" width={70} height={80}/>
        <Image src={atom} alt="svg6" className="svg6" width={70} height={80}/>

        <Image src={aboutImg} alt="aboutImg" className="aboutImg" />
      </div>
      <div className="abbox2">
        <h1 className="primary-heading">Premium <span className="text-orange">Learning</span> Experience</h1>
        <div className="aaBox">

        <div className="abimgBox bg-purple flex-center">
            <Image src = {heart} alt = "heart" className="abImg" />
        </div>
        <div className="abconBox">
            <div className="secondary-heading">Easily Accessible</div>
            <div className="text-gray">Learning Will fell Very Comfortable With Courslab.</div>
        </div>
        
        </div>

        <div className="aaBox">

        <div className="abimgBox bg-purple flex-center">
            <Image src = {puzzle} alt = "puzzle" className="abImg" />
        </div>
        <div className="abconBox">
            <div className="secondary-heading">Fun learning Experience</div>
            <div className="text-gray">Learning Will fell Very Comfortable With Courslab.</div>
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
