import Image from "next/image";
import "./navbar.css";
import { mainIcon } from "@/public/assets";
import { navLinks } from "@/constants";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="NavContainer">
      <div className="mainLogo">
        <Image src={mainIcon} alt="mainLogo" width={45} height={45} />
        <p className="navP">Book Store</p>
      </div>
      <div className="link_buttonContainer">
        <div className="linkContainer">
          {navLinks.map((i) => (
            <Link href={i.link} key={i.name}>
              {i.name}
            </Link>
          ))}
        </div>
        <div>
          <button type="text" className="navbutton bg-purple text-white">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
