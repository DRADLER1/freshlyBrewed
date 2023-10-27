import {
  camera,
  clock,
  coloredBulb,
  down,
  star,
  swirlArrow,
} from "@/public/assets";
import "./course.css";
import Image from "next/image";

const Course = () => {
  return (
    <section className="courseContainer" id="courses">
      <Image
        src={swirlArrow}
        alt="arror"
        className="courseimg1"
        width={100}
        height={100}
      />
      <Image
        src={coloredBulb}
        alt="bult"
        className="courseimg2"
        width={100}
        height={100}
      />
      <div className="hh">
        <h1 className="cheading">Our Tracks</h1>
        <p className="text-gray">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      <div className="CardContainer">
        <div className="cardBox">
          <div className="box1">
            <Image
              src="/assets/pic.jpg"
              alt="pic"
              className="cardImg"
              width={100}
              height={150}
            />

            <div className="con1">
              <p className="text-gray"> UI/UX Design </p>
              <div className="star">
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
              </div>
            </div>
            <div className="con2">
              <div>UI/UX Design for Beginners</div>
              <div className="text-orange s">$98</div>
            </div>
          </div>
          <div className="box2">
            <div className="m">
              <Image src={clock} alt="clock" width={10} height={10} />
              <div className="text-gray">22hr 30min</div>
            </div>

            <div className="m">
              <Image src={camera} alt="camera" width={10} height={10} />
              <div className="text-gray">34 Courses</div>
            </div>

            <div className="m">
              <Image src={down} alt="down" width={10} height={10} />
              <div className="text-gray">250 sales</div>
            </div>
          </div>

          <button type="text" className="bg-orange courseButton">
            {" "}
            Join Course{" "}
          </button>
        </div>
        <div className="cardBox">
          <div className="box1">
            <Image
              src="/assets/pic.jpg"
              alt="pic"
              className="cardImg"
              width={100}
              height={150}
            />

            <div className="con1">
              <p className="text-gray"> UI/UX Design </p>
              <div className="star">
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
              </div>
            </div>
            <div className="con2">
              <div>UI/UX Design for Beginners</div>
              <div className="text-orange s">$98</div>
            </div>
          </div>
          <div className="box2">
            <div className="m">
              <Image src={clock} alt="clock" width={10} height={10} />
              <div className="text-gray">22hr 30min</div>
            </div>

            <div className="m">
              <Image src={camera} alt="camera" width={10} height={10} />
              <div className="text-gray">34 Courses</div>
            </div>

            <div className="m">
              <Image src={down} alt="down" width={10} height={10} />
              <div className="text-gray">250 sales</div>
            </div>
          </div>

          <button type="text" className="bg-orange courseButton">
            {" "}
            Join Course{" "}
          </button>
        </div>
        <div className="cardBox">
          <div className="box1">
            <Image
              src="/assets/pic.jpg"
              alt="pic"
              className="cardImg"
              width={100}
              height={150}
            />

            <div className="con1">
              <p className="text-gray"> UI/UX Design </p>
              <div className="star">
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
                <Image src={star} alt="star" width={10} height={10} />
              </div>
            </div>
            <div className="con2">
              <div>UI/UX Design for Beginners</div>
              <div className="text-orange s">$98</div>
            </div>
          </div>
          <div className="box2">
            <div className="m">
              <Image src={clock} alt="clock" width={10} height={10} />
              <div className="text-gray">22hr 30min</div>
            </div>

            <div className="m">
              <Image src={camera} alt="camera" width={10} height={10} />
              <div className="text-gray">34 Courses</div>
            </div>

            <div className="m">
              <Image src={down} alt="down" width={10} height={10} />
              <div className="text-gray">250 sales</div>
            </div>
          </div>

          <button type="text" className="bg-orange courseButton">
            {" "}
            Join Course{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
