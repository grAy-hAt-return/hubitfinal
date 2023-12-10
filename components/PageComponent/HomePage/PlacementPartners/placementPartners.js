import Image from "next/image";
import imgLink from "../../../Navigation/Navitem/placementpartners";
import Link from "next/link";
import { useEffect, useState } from "react";
const PlacementPartners = () => {
  // const Placement =[
  //   {
  //     image : ImageFirst
  //   },
  //   {
  //     image : Image1
  //   },
  //   {
  //     image : Image2
  //   },
  //   {
  //     image : Image3
  //   },
  //   {
  //     image : Image4
  //   },
  //   {
  //     image : Image5
  //   },
  // ]
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(5);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = imgLink.slice(firstPostIndex,lastPostIndex);
    const totalPost = imgLink.length;
    const totalpage = Math.ceil(totalPost/postPerPage);
    const lastpage = Math.ceil(totalPost/postPerPage);

    let pages=[] 
    // const pagedata=  pages.length;
    for (let i=1 ; i<Math.ceil(totalPost/postPerPage);i++){
        pages.push(i);
    }

    const handlePageClick = (pages) =>{
        setCurrentPage(pages);
    }
    
    useEffect(() => {
      const intervalId = setInterval(()=>{
        nextpage();
      },3000);
    
      return () => clearInterval(intervalId);
    }, [currentPage])
    

    const nextpage = () =>{
        if(currentPage < pages.length+1){
            setCurrentPage(currentPage + 1);
        }else{
            setCurrentPage(1);
        }
    }

    const prevPage = () =>{
        if (currentPage > 1){
            setCurrentPage (currentPage-1);
        }
        else{
            setCurrentPage(pages.length+1)
        }
    }
  // const [isVisible,setIsVisible] = useState(false)
  return (
    <div className=" px-2 md:px-4 lg:px-20 xxl:px-32 flex flex-col items-center mb-8">
      <div className="w-max my-8">
        <h1 className="text-[#a0047d] text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-[33px] capitalize Poppins font-bold">
        Placement Partners
        </h1>
      </div>
      
      <div className="w-11/12 h-fit">
      {/* <div className={`${isVisible ? "h-fit " : "sm:h-24 md:h-32 lg:h-36 xl:h-48 overflow-hidden " } w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6 xl:gap-6 sm:gap-3 gap-2 my-2 `}>
        {imgLink.map((item, i) => {
          return (
            <div
                className="mx-auto w-[60%] h-24 sm:w-2/4 sm:h-24 md:w-[65%] md:h-32 lg:w-[80%] lg:h-36 xl:w-full xl:h-48 "
                key={i}
              >
                <Image
                  src={item.image}
                  layout="responsive"
                  // objectfit="cover"
                  // objectPosition={"center"}
                  quality={100}
                  alt="Loading ..."
                  className="w-full h-full object-cover object-center"
                />{" "}
              </div>
          );
        })}

      </div> */}
        <div className="w-full h-fit flex gap-8 justify-center">
          {currentPosts.map((item,i)=>{
            return (
              <div key={i} className="w-40 h-32">
                <Image src={item.image} alt="loading" 
                layout="responsive" 
                objectPosition={"top"} className="w-full h-full "/>
              </div>
            )
          })}
        </div>
      </div>
      {/* <button 
      onClick={()=>setIsVisible(!isVisible)}
      className="hidden sm:block md:block lg:block xl:block text-base font-medium">
        <span>
        Show more
        </span>

      </button> */}
    </div>
  );
};
export default PlacementPartners;
