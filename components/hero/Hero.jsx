import Image from "next/image";
import "./hero.css";
import { ellipse, hero, heroBG, search } from "@/public/assets";
import { featureContent } from "@/constants";
const Hero = () => {
  return (
    <section className="HeroContainer bg-pale" id="home">
      <Image src={heroBG} alt="heroIcons" className="heroIcons" />

      <div className="heroContentContainer">
        <div className="content">
          <h1 className="primary-heading">
            The <span className="text-orange">Smart</span> <br />
            Choice For <span className="text-orange">Future</span>
          </h1>
          <p className="pragraph text-gray ">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>

          <div className="searchBox">
            <div className="search-content">
              <Image src={search} alt="search" width={20} height={20} />
              <input
                placeholder="Search For a Location..."
                type="search"
                className="text-black"
              />
            </div>

            <button type="text" className="searchButton bg-purple">
              Continue
            </button>
          </div>
        </div>

        <div className="imageBox">
          <Image src={ellipse} alt="hero" className="elImg" />
          <Image src={hero} alt="hero" className="heroImg" />
        </div>
      </div>

      <div className="featureContainer bg-purple">

     { featureContent.map((i) => (
      <div key = {i.name} className="featureContent">
         <div className="f1">
          <div className="fimgbg">
            <Image src = {i.picture} alt = "i" className="fimg"/>
          </div>
         </div>
         <div className="f2">
         <h3 className="text-white">{i.name}</h3>
         <p className="text-gray">{i.desc}</p>
         </div>
      </div>
     ))}

      </div>
    </section>
  );
};

export default Hero;
