import React from "react";
import Slider from "../components/Slider";
import Text from "../components/Text";
import Tickets from "../images/tickets.png";
import Donate from "../images/donation.png";
import Events from "../images/event.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Slider />

      <div className="mt-6 [&>*]:w-[90px] [&>*]:h-[90px] sm:[&>*]:w-[110px] sm:[&>*]:h-[110px] [&>*]:duration-300 [&>*]:p-2  [&>*]:rounded-full [&>*]:bg-[#579506] [&>*]:flex [&>*]:relative [&>*]:items-center [&>*]:justify-center flex justify-around">
        <Link to={"/events"} className="hover:scale-110 ">
          <img src={Events} alt="Events" className="max-w-[80%]" />
          <p className="absolute bottom-0 translate-y-[100%] text-lg">Events</p>
        </Link>
        <Link to={"/donate"} className="hover:scale-110 ">
          <img src={Donate} alt="Donate" className="max-w-[80%]" />
          <p className="absolute bottom-0 translate-y-[100%] text-lg">Donate</p>
        </Link>
        <Link to={"/tickets"} className="hover:scale-110 ">
          <img src={Tickets} alt="Tickets" className="max-w-[80%]" />
          <p className="absolute bottom-0 translate-y-[100%] text-lg">
            Tickets
          </p>
        </Link>
      </div>

      <Text />
    </div>
  );
};

export default HomePage;
