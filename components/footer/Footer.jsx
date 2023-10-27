import Image from "next/image";
import "./footer.css";
import { mainIcon } from "@/public/assets";

const Footer = () => {
  return (
    <section className="FooterContainer bg-pale">
      <div className="Fcontent">
        <div className="mainLogo">
          <Image src={mainIcon} alt="mainLogo" width={45} height={45} />
          <p className="navP">Book Store</p>
        </div>
        <div className="paragraph fp text-gray">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy a
          type specimen book.
        </div>
      </div>

      <div className="Fcontent">
        <p className="navP">Company</p>
        <div className="paragraph fp text-gray">
          <div>About Us</div>
          <div className="pm">How to work?</div>
          <div className="pm">Populer Course</div>
          <div className="pm">Service</div>
        </div>
      </div>

      <div className="Fcontent">
        <p className="navP">Courses</p>
        <div className="paragraph fp text-gray">
          <div>About Us</div>
          <div className="pm"> Categories</div>
          <div className="pm">Ofline Course</div>
          <div className="pm">Vidio Course</div>
        </div>
      </div>

      <div className="Fcontent">
        <p className="navP">Support</p>
        <div className="paragraph fp text-gray">
          <div>About Us</div>
          <div className="pm">FAQ </div>
          <div className="pm">Help Center</div>
          <div className="pm">Career</div>
          <div className="pm">Privacy</div>
        </div>
      </div>

      <div className="Fcontent">
        <p className="navP">Contac Info</p>
        <div className="paragraph fp text-gray">
          <div>About Us</div>
          <div className="pm">+0913-705-3875</div>
          <div className="pm">ElizabethJ@jourrapide.com</div>
          <div className="pm">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Footer;
