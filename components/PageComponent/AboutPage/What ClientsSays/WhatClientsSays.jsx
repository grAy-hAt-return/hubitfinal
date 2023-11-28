import React, { useState, useEffect } from "react";
// import /japan.jpg from "";
import Regular from "./TabComponents/Regular";
import axios from "axios";
import Video from "../../HomePage/Testimonials/Video";
function WhatClientsSays({status}) {
  const [Active, setActive] = useState("regular");
  const tabs = [
    { title: "regular" },
    { title: "facebook" },
    { title: "google" },
    { title: "video" },
  ];

  const Regulars = [
    {
      image: "/images/japan.jpg",
      name: "Gayatri Malla",
      title: "Python",
      description: `I have been studying Python Programming Language at Hub IT since 2 months. It has been a knowledgeable learning also build-up my confidence towards programming. Hub IT has a friendly environment and our Python Teacher is great in teaching.`,
    },
    {
      image: "/images/japan.jpg",
      name: "Saroj GC",
      title: "CCNA",
      description: `Hub IT, for me, is one of the best places for learners (specially IT). I am happy to choose the institute for enhancing my Computer Networking knowledge with CCNA course. Thumbs UP!`,
    },
    {
      image: "/images/japan.jpg",
      name: "Prayab Maharjan",
      title: "MERN",
      description: `My time in the Institute was very satisfying. Teachers were very friendly and cooperative. Learning environment was also very suitable for beginners as well as veterans.
      Thank you a lot HUB IT for providing a perfect learning experience to me.`,
    },
    {
      image: "/images/japan.jpg",
      name: "Jenish Shrestha",
      title: "Web Designing",
      description: `It's a nice place to study IT related subjects it has a wide range of courses available I've been studying here for last 2 and a half months it's been a very fruitfull journey`,
    },
  ];

  const Facebook = [
    {
      image: "/images/japan.jpg",
      name: "rajiv das",
      title: "student",
      description: `Lorem Ipsindustry. dummy text ever I've been studying here for last 2 and a half months it's been a very fruitfull journey I've been studying here for last 2 and a half months it's been a very fruitfull journeyI've been studying here for last 2 and a half months.`,
    },
    {
      image: "/images/japan.jpg",
      name: "raymant das",
      title: "student",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . God told me,DIVNE, you see that Water , walk on it.Learnt Everything on the road, I was so so in the board.`,
    },
    {
      image: "/images/japan.jpg",
      name: "kavi vai",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Now every kids rapping on the corner of the every street. When every dreams comes true , that's when it's fun to sleep. yaeah yeadh you know it. so let's check it out hommy.`,
    },
    {
      image: "/images/japan.jpg",
      name: "sahil sainju",
      title: "student",
      description: `Keep your fame, you and I ain't the same. This is a Captain's innings, it's that kholi's type shot. This that come right outside your house, rangoli type shot. Since 16 I've been a killer, since 16 I've been a hot. The most dangerous coats, like the tailers like my pop.`,
    },
    {
      image: "/images/japan.jpg",
      name: "kavi vai",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Now every kids rapping on the corner of the every street. When every dreams comes true , that's when it's fun to sleep. yaeah yeadh you know it. so let's check it out hommy.`,
    },
    {
      image: "/images/japan.jpg",
      name: "sahil sainju",
      title: "student",
      description: `Keep your fame, you and I ain't the same. This is a Captain's innings, it's that kholi's type shot. This that come right outside your house, rangoli type shot. Since 16 I've been a killer, since 16 I've been a hot. The most dangerous coats, like the tailers like my pop.`,
    },
    {
      image: "/images/japan.jpg",
      name: "kavi vai",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Now every kids rapping on the corner of the every street. When every dreams comes true , that's when it's fun to sleep. yaeah yeadh you know it. so let's check it out hommy.`,
    },
    {
      image: "/images/japan.jpg",
      name: "sahil sainju",
      title: "student",
      description: `Keep your fame, you and I ain't the same. This is a Captain's innings, it's that kholi's type shot. This that come right outside your house, rangoli type shot. Since 16 I've been a killer, since 16 I've been a hot. The most dangerous coats, like the tailers like my pop.`,
    },
  ];
  const Google = [
    {
      image: "/images/japan.jpg",
      name: "rohit karki",
      title: "student",
      description: `edited my image and made a meme out of it. Your Man put in the work, filled  his dreams out of it.You man put in the work, fullfilled his dream out of it.Movies and the  streets, I made them the scene. Took my own time, dropped the biggest  track ever seen. `,
    },
    {
      image: "/images/japan.jpg",
      name: "nischal karki",
      title: "student",
      description: `I saw teachers after thugs.I saw tiffin box after drugs. I am only 29 but it seems like I've seen it all. In relationship i've seen less love,more distrust.For these riches there was more hard work, little luck. Yeah we get high, that's why i dont. No no life a circus Even 69 gets veiws.'`,
    },
    {
      image: "/images/japan.jpg",
      name: "pratik karki",
      title: "teacher",
      description: `I saw teachers after thugs.I saw tiffin box after drugs. I am only 29 but it seems like I've seen it all. In relationship i've seen less love,more distrust.For these riches there was more hard work, little luck. Yeah we get high, that's why i dont. No no life a circus Even 69 gets veiws.`,
    },
    {
      image: "/images/japan.jpg",
      name: "goma  karki",
      title: "student",
      description: `Woven from hundreds of flowers, we are one garland
      National unity has become our pride
      Sing the song of the Motherland, saying, "May it be so, O sweet Motherland!"
      in the bloom of our age`,
    },
    {
      image: "/images/japan.jpg",
      name: "ramchandra  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "mickey  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
  ];
  const video = ()=>{
    return <Video/>
  }
  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 4,
  });
  // logic starts for slicing card for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;

  const prev = (val) => {
    // console.log(StartValue, EndValue, counter, clientDetails);
    // perPageChange
    let PageChange = Math.ceil(val.length / pagination.end);
    // setCounter ko increment and decrement login implementation
    let counterDecrement = counter > 1 ? counter - 1 : PageChange;
    // let counterIncrement = counter < PageChange ? counter + 1 : PageChange;
    setCounter(counterDecrement);
  };
  const next = (val) => {
    console.log(StartValue, EndValue, counter, val.length, val);
    // perPageChange

    let PageChange = Math.ceil(val.length / pagination.end);
    // setCounter ko increment and decrement login implementation
    // let counterDecrement = counter > 1 ? counter - 1 : counter;
    let counterIncrement = counter < PageChange ? counter + 1 : 1;
    setCounter(counterIncrement);
  };

  const tabClick = () => {
    switch (Active) {
      case "regular":
        return (
          <Regular
            clientDetails={Regulars}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "facebook":
        return (
          <Regular
            clientDetails={Facebook}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "google":
        return (
          <Regular
            clientDetails={Google}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "video":
        return <Video/>
        break;
      default:
        break;
    }
  };


  
  // const getGoogleTestonomil=()=>{
  //   axios.get('http://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJU6XiOYiGljkRv4xyNSswlBE&fields=reviews&key=AIzaSyDolCi-hDX-dc9363M0UqD4P30ylP4EtDQ').then(res=>{
  //     console.log(res,"here")
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }
  // useEffect(() => {
  //   getGoogleTestonomil()
  // }, [])
  return (
    <div className=" py-8 my-10">
      <div className={`${status === "hidden" ? "hidden":"block text-center"}`}>
        <div className=" md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl text-main capitalize Poppins font-bold">
          <h2 className="xxl:text-[33px] xl:text-3xl lg:text-2xl md:text-xl text-lg">What our students say about us</h2>
        </div>
        <div className="Poppins font-light my-3 text-sm  text-gray-700  ">
          <p className="xxl:text-base xl:text-sm">
            Here are some testimonials about the experience of our students in
            <span className="text-main font-medium">HUB IT TRAINING</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 px-[6rem] capitalize Popppins font-semibold mb-5">
        {tabs.map((val, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer ${
                Active === val.title ? "text-main" : ""
              } `}
              onClick={() => setActive(val.title)}
            >
              {val.title}
            </div>
          );
        })}
      </div>
      {tabClick()}
    </div>
  );
}

export default WhatClientsSays;
