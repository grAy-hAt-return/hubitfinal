import Image from "next/image";
import imgLink from "../../../Navigation/Navitem/placementpartners";
import Link from "next/link";
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

  return (
    <div className=" px-2 md:px-4 lg:px-20 xxl:px-32 mt-10 flex flex-col items-center ">
      <div className="w-max my-10 ">
        <h1 className="text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
        Placement Partners
        </h1>
      </div>
      <div className=" w-11/12 bg-pink-200 h-52  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6 gap-6 my-2">
        {imgLink.map((item, i) => {
          return (
            <div key={i}>
              <div className="w-20 h-10 my-auto px-4 py-2">
                <Link href={item.path} target="_blank">
                  <Image
                    src={item.image}
                    alt="image"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlacementPartners;
