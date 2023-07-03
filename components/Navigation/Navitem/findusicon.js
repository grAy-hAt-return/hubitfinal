import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import {SiTiktok} from "react-icons/si";

const Data = [
  { icon: <AiFillFacebook className="text-blue-700" />,path:"https://www.facebook.com/hubitts", followers:4200 },
  { icon: <AiFillTwitterSquare className="text-sky-500" />, path:"https://twitter.com/hubittraining", followers:1200},
  { icon: <AiFillInstagram className="text-red-400" />, path:"https://www.instagram.com/hubittraining", followers:2100},
  { icon: <AiFillLinkedin className="text-blue-800" />, path:"https://www.linkedin.com/company/hubitedu", followers:486},
  { icon: <AiFillYoutube className="text-red-500" />,path:"https://www.youtube.com/channel/UCYwJdo9Jn0Qq5vhV7PlNdhg", followers:876},
  { icon: <SiTiktok className="text-black" />,path:"https://www.tiktok.com/@hubitofficial", followers:1400},
];

export default Data;
