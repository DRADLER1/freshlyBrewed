import { coloredBulb, ellipse, orgArrow } from "@/public/assets";
import "./contact.css";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="ContactContainer flex-center" id="contact">
    
      <div className="ContactForm bg-purple flex-center">
      <Image src = {ellipse} alt = "sd" className = "el1" width = {200} height = {200}/>
      <Image src = {ellipse} alt = "sd" className = "el2" width = {200} height = {200}/>
      <Image src = {ellipse} alt = "sd" className = "el3" width = {200} height = {200}/>
      <Image src = {ellipse} alt = "sd" className = "el4" width = {200} height = {200}/>
      <Image src = {coloredBulb} alt = "sd" className = "bimg" width = {100} height = {100}/>
      <Image src = {orgArrow} alt = "sd" className = "orgA" width = {150} height = {150}/>
        <div className="cfcontent">
          <div>
            <h1 className="secondary-heading cHead">
              Subscribe to our newsletter
            </h1>
            <p className="cp">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>

          <div className="cSearchBox">
            <input type="text" placeholder="Email Address" className="cinput" />
            <button type="text" className="cbutton bg-orange">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
