import Marquee from "react-fast-marquee";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

const cardImage = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client1,
  client2,
  client3,
  client4,
  client5,
];

const Reviews = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className=" mx-auto container rounded-3xl py-20">
        <div className="flex justify-center items-center md:gap-5 gap-0">
          <Marquee speed={60} direction={"left"} pauseOnHover={true}>
            {cardImage.map((card, index) => (
              <div
                key={index}
                className="border-1 bg-white mx-4 bg-opacity-15 p-4 rounded-md"
              >
                <img
                  src={card}
                  alt={`Client ${index + 1}`}
                  className="max-w-full h-auto rounded-md" // Responsive image styling
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
