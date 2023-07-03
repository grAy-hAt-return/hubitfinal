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
          To improve student placements at our IT institute, we focus on the following key areas. First, we ensure that our curriculum is up-to-date and aligned with industry trends. Second,we offer practical training opportunities such as projects and internships. Third, we establish partnerships with local IT companies and organizations to provide exposure and potential job opportunities. Fourth, we provide career counseling and assistance with resumes, interviews, and job searches. Fifth, we build and maintain an active alumni network for mentorship and networking. Sixth, we create a dedicated placement cell to coordinate and facilitate placements. Seventh, we emphasize the development of soft skills alongside technical skills. Eighth, we maintain an online presence to showcase your institute and engage with stakeholders. Ninth, we encourage students to pursue industry certifications. Finally, gather feedback from employers to continually improve your programs. Implementing these strategies will enhance our students' employability and placement opportunities.

          </p>
        </div>
        <div>
          <div className="absolute right-0 top-[-100px] h-[450px] w-96 box-shadow">
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
