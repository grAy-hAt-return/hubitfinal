<<<<<<< HEAD
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

const ContentSection = () => {
  const benefits = [
    "first benefit",
    "seconde benefit",
    "third benefit",
    "fourth benefit",
    "fifth benefit",
    "sixth benefit",
  ];
  return (
    <section className="px-2 md:px-4 lg:px-20 xl:px-24 xxl:px-32 mt-8">
      <div className="flex justify-between min-h-[350px]  relative">
        <div className="max-w-2xl">
          <h2 className="text-main">What we do for your placement?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio
            praesentium impedit, neque consequatur aliquam veniam nemo non
            architecto. Voluptatibus deleniti vel laudantium pariatur delectus,
            rerum molestias maiores placeat veritatis, obcaecati quibusdam
            architecto assumenda vero eveniet, amet sint voluptas incidunt esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae,
            earum adipisci dolore iste et ab ut voluptas magni culpa eaque
            soluta corrupti in quam fuga odio, aliquam, rerum eveniet.
          </p>
        </div>
        <div>
          <div className="absolute right-0 top-[-50px] h-[450px] w-96 box-shadow">
            <Image
              src="/images/portal.jpg"
              alt="image of something"
              layout="fill"
              objectfit="cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-main">Sake and Benefits</h2>
        <div className="flex flex-wrap justify-between ml-12">
          {benefits.map((benefit) => {
            return (
              <>
                <div className="flex gap-2 justify-center align-center mb-6 text-black text-lg font-medium">
                  <BsCheckCircle key={benefit} className="text-2xl font-bold" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
=======
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

const ContentSection = () => {
  const benefits = [
    "first benefit",
    "seconde benefit",
    "third benefit",
    "fourth benefit",
    "fifth benefit",
    "sixth benefit",
  ];
  return (
    <section className=" mt-8">
      <div className="w-11/12 flex mx-auto">
          <div className="w-[90%] mx-auto md:w-2/4 lg:w-2/4 xl:w-2/4 py-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-main">
              What we do for your placement?
            </h1>
            <p className="text-sm md:text-base lg:text-base xl:text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, at amet aspernatur autem enim reiciendis ipsam fuga odit quidem, doloremque iure cumque, vitae iste? Perferendis, fugiat molestias! Sunt culpa delectus ad ipsa vitae quasi fugiat soluta saepe earum, magni tempore labore eius dicta praesentium autem libero iure molestias perspiciatis qui natus! Tempore aliquid illum consequuntur accusantium impedit doloremque? Quis saepe nostrum
            </p>
          </div>
          <div className="w-2/4 relative md:block lg:block xl:block hidden">
            <div className="w-3/5 h-96 mx-auto relative -top-20 z-20 shadow-xl" 
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1584697964190-7383cbee8277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition:"center"
            }}
            >
            </div>
          </div>
        </div>
      <div className="w-11/12 px-4 sm:px-6 md:px-0 lg:px-0 xl:px-0 mx-auto mt-4">
        <h2 className="text-main mx-0 pb-5 text-lg md:text-xl lg:text-2xl xl:text-2xl">Sake and Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-4 lg:gap-2 xl:gap-2">
          {benefits.map((benefit) => {
            return (
              <>
                <div className="flex justify-center align-center mb-6 text-black text-lg font-medium">
                  <BsCheckCircle key={benefit} className="text-2xl font-bold" />
                  <p className="text-sm md:text-base xl:text-base lg:text-base ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
