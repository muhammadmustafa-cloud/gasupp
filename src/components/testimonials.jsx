import Slider from "react-slick";
import img from "../assets/2.jpg";
import img2 from "../assets/tes2.jpg";
import img3 from "../assets/tes3.jpg";
import img4 from "../assets/tes4.jpg";
import img5 from "../assets/tes5.jpg";
import img6 from "../assets/tes6.jpg";
import img7 from "../assets/tes7.jpg";
import img8 from "../assets/tes8.jpg";
import img9 from "../assets/tes9.jpg";
import img10 from "../assets/tes10.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    text: "I love the convenience GasUpp offers! With my hectic work schedule, I don’t have time to stop at gas stations or service centers. Now I can get gas delivered right to my office and even get my wiper blades replaced on the go. It’s an absolute lifesaver!",
    name: "Brittany K",
    role: "Busy Professional",
    image: img2,
  },
  {
    id: 2,
    text: "GasUpp’s electric vehicle charging service is a game changer. I can schedule a pick-up, and my car is fully charged when I need it. It’s so easy and saves me the hassle of finding a charging station.",
    name: "Mark R",
    role: "Electric Vehicle Owner",
    image: img3,
  },
  {
    id: 3,
    text: "I got a flat tire on my way to a meeting, and within 30 minutes, GasUpp was there to help. The roadside assistance was fast and professional. I even signed up for their subscription plan to get regular oil changes and battery boosts. Amazing service!",
    name: "Sarah K",
    role: "Roadside Assistance Customer",
    image: img4,
  },
  {
    id: 4,
    text: "As a dad of three, I’m always on the go. GasUpp’s mobile car wash service is perfect for keeping my car clean without having to leave home. The team is always professional, and their attention to detail is impressive!",
    name: "John L",
    role: "Family Man",
    image: img5,
  },
  {
    id: 5,
    text: "I’ve been using GasUpp for months now, and the quality of service is unmatched. Whether it’s gas delivery, a quick oil change, or topping up my fluids, GasUpp has saved me so much time. Highly recommend!",
    name: "Jess M",
    role: "Long-Time User",
    image: img6,
  },
  {
    id: 6,
    text: "Being a GasUpper has been an incredible side hustle for me. The app is easy to use, and I can pick up gas delivery orders when it fits my schedule. Plus, the extra income has been great. I’m proud to be part of this innovative service!",
    name: "Yan G",
    role: "GasUpper Driver",
    image: img7,
  },
  {
    id: 7,
    text: "Partnering with GasUpp has significantly increased our revenue. We can now serve more customers by delivering gas and providing additional services like tire rotations and battery replacements. The technology is seamless, and the GasUpp team is always available to support us.",
    name: "Mustafa U",
    role: "Gas Station Partner",
    image: img8,
  },
  {
    id: 8,
    text: "GasUpp has helped me expand my mobile car wash business by connecting me with more customers. The platform is easy to navigate, and their customer base is growing every day. It’s a win-win!",
    name: "Connor H",
    role: "Mobile Car Wash Provider",
    image: img9,
  },
  {
    id: 9,
    text: "Working with GasUpp to provide oil changes and wiper blade replacements has been a great way to reach new clients. The scheduling system is efficient, and the platform helps me manage my time better. I look forward to continuing our partnership!",
    name: "John D",
    role: "Automotive Technician",
    image: img10,
  },
];

const Testimonials = ({page}) => {


  const bgColor =
    page === "home"
      ? "bg-[#ededed]"
      : page === "about"
      ? "bg-[#050c1d]"
      : "bg-white";
  const textColor =
    page === "home"
      ? "text-[#050c1d]"
      : page === "about"
      ? "text-white"
      : "text-white";


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={` ${bgColor} ${textColor} `}>
      <div className="testimonials-container  mx-auto container">
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex relative mt-10">
            <span className="bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute"></span>
            <h5 className="text-2xl absolute text-[#41CB5B] font-normal tracking-wider">
              Testimonial
            </h5>
          </div>
          <h2
            className={`text-3xl md:text-5xl text-center font-semibold ${textColor} mt-12 w-full md:w-[50%] lg:w-[60%]`}
          >
            What Our Clients Say About Us
          </h2>{" "}
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card mx-auto">
              <img src={testimonial.image} alt={testimonial.name} />
              <p className="testimonial-text">{testimonial.text}</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <h5 className="testimonial-role">{testimonial.role}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;