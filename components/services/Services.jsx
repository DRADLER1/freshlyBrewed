import Image from "next/image";
import "./services.css";
import { insta, linkedin, planet, revSwirl, slider } from "@/public/assets";

const Services = () => {
  return (
    <section className="serviceContainer" id="services">
      <div className="testimonials">
        <Image
          src={planet}
          alt="slider"
          className="planet"
          width={150}
          height={150}
        />

        <Image
          src={revSwirl}
          alt="slider"
          className="revSwirl"
          width={150}
          height={150}
        />

        <div className="hh">
          <h1 className="cheading">What Student&apos;s Say</h1>
          <p className="text-gray">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <div className="testimonialCardContainer">
          <Image
            src={slider}
            alt="slider"
            className="slider"
            width={100}
            height={50}
          />
          <div className="testimonialCardBox">
            <p className="text-gray">
              {" "}
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="cardBottom">
              <Image
                src="/assets/profilepic.jpg"
                alt="profilePic"
                className="testProfPic"
                width={50}
                height={50}
              />
              <div className="ll">
                <h5>Finlay Kirk</h5>
                <p className="text-gray">Web developer</p>
              </div>
            </div>
          </div>

          <div className="testimonialCardBox">
            <p className="text-gray">
              {" "}
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="cardBottom">
              <Image
                src="/assets/profilepic.jpg"
                alt="profilePic"
                className="testProfPic"
                width={50}
                height={50}
              />
              <div className="ll">
                <h5>Finlay Kirk</h5>
                <p className="text-gray">Web developer</p>
              </div>
            </div>
          </div>

          <div className="testimonialCardBox">
            <p className="text-gray">
              {" "}
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="cardBottom">
              <Image
                src="/assets/profilepic.jpg"
                alt="profilePic"
                className="testProfPic"
                width={50}
                height={50}
              />
              <div className="ll">
                <h5>Finlay Kirk</h5>
                <p className="text-gray">Web developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="employee">
        <div className="hh">
          <h1 className="cheading">Our Tracks</h1>
          <p className="text-gray">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <div className="employeeContainer">
          <div className="emCardBox">
            <Image
              src="/assets/pic.jpg"
              alt="pic"
              className="cardImg"
              width={100}
              height={170}
            />
            <div className="emCardContent">
              <h4>Matthew E. McNatt</h4>
              <p className="subp text-gray">Professor @George Brown College</p>

              <p className="sp text-gray">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris
                nisi ut allquip ex commodo.
              </p>

              <div className="emCardFooter">
                <div className="text-orange">Engineering physics</div>
                <div className="emimgcon">
                    <Image src ={insta} alt = "insta" width={15} height={15}/>
                    <Image src ={linkedin} alt = "insta" width={15} height={15}/>
                </div>
              </div>
            </div>
          </div>
          <div className="emCardBox">
            <Image
              src="/assets/pic.jpg"
              alt="pic"
              className="cardImg"
              width={100}
              height={170}
            />
            <div className="emCardContent">
              <h4>Matthew E. McNatt</h4>
              <p className="subp text-gray">Professor @George Brown College</p>

              <p className="sp text-gray">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris
                nisi ut allquip ex commodo.
              </p>

              <div className="emCardFooter">
                <div className="text-orange">Engineering physics</div>
                <div className="emimgcon">
                    <Image src ={insta} alt = "insta" width={15} height={15}/>
                    <Image src ={linkedin} alt = "insta" width={15} height={15}/>
                </div>
              </div>
            </div>
          </div>
          <div className="emCardBox">
            <Image
              src="/assets/pic.jpg"
              alt="pic"
              className="cardImg"
              width={100}
              height={170}
            />
            <div className="emCardContent">
              <h4>Matthew E. McNatt</h4>
              <p className="subp text-gray">Professor @George Brown College</p>

              <p className="sp text-gray">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris
                nisi ut allquip ex commodo.
              </p>

              <div className="emCardFooter">
                <div className="text-orange">Engineering physics</div>
                <div className="emimgcon">
                    <Image src ={insta} alt = "insta" width={15} height={15}/>
                    <Image src ={linkedin} alt = "insta" width={15} height={15}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
