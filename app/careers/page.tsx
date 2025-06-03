"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import CurrentVacanciesList from "@/components/CurrentVacanciesList";

// const jobData = [
//   {
//     title: "Graduate Engineer - Civil / Building / Building Services",
//     responsibilities: [
//       "Assist supervisor to overview project operations, planning and site co-ordination work to ensure completion with accurate budget and target schedule",
//       "Prepare document submission, monitor site progress and update project program and report",
//       "Support site daily operation by co-ordination and co-operation with site staff, site foreman & sub-contractors",
//       "Provide operational support to different construction projects",
//     ],
//     requirements: [
//       "Master or Degree holder in Civil / Structural / Building / Building Services / Electrical / Mechanical Engineering / Construction Management or related disciplines from local or overseas College / University",
//       "Good command of spoken and written English",
//       "Good communication and presentation skills",
//       "Eager to learn and hardworking",
//       "IANG Holder is welcome",
//       'We offer HKIE Civil/Building/Building Services Engineering Graduate Training Scheme "A" in Civil / Building / Building Services / E&M / Foundation / A&A / Fitting-out works / projects to the right candidates',
//     ],
//     contact: {
//       email: "bkhr.ge@buildking.hk",
//       applyLink: "Apply Online",
//     },
//   },
//   {
//     title: "Project Manager - Marine Construction",
//     responsibilities: [
//       "Lead and manage marine construction projects from inception to completion",
//       "Oversee project planning, budgeting, and resource allocation",
//       "Coordinate with various stakeholders including clients, contractors, and regulatory bodies",
//       "Ensure compliance with safety standards and quality requirements",
//       "Monitor project progress and implement corrective actions when needed",
//     ],
//     requirements: [
//       "Minimum 10 years experience in marine construction projects",
//       "Bachelor's degree in Civil Engineering or related field",
//       "Professional certification in Project Management (PMP) preferred",
//       "Strong leadership and team management skills",
//       "Experience with marine regulations and compliance requirements",
//     ],
//     contact: {
//       email: "bkhr.pm@buildking.hk",
//       applyLink: "Apply Online",
//     },
//   },
//   {
//     title: "Senior Quantity Surveyor",
//     responsibilities: [
//       "Prepare tender documents and cost estimates for construction projects",
//       "Conduct cost analysis and financial reporting",
//       "Manage contract administration and variation orders",
//       "Negotiate with subcontractors and suppliers",
//       "Review and certify contractor payment applications",
//     ],
//     requirements: [
//       "Minimum 8 years experience in quantity surveying",
//       "Degree in Quantity Surveying or equivalent",
//       "HKIS membership preferred",
//       "Proficient in measurement and cost estimation software",
//       "Strong commercial and negotiation skills",
//     ],
//     contact: {
//       email: "bkhr.qs@buildking.hk",
//       applyLink: "Apply Online",
//     },
//   },
// ];

const trainingImages = [
  "/Career/traning-carouser1/n1_Graduate Engineering Programme_n4.webp",
  "/Career/traning-carouser1/n2_Graduate Engineering Programme_n5.webp",
  "/Career/traning-carouser1/n3_Graduate Engineering Programme.jpg",
  "/Career/traning-carouser1/n4_Graduate Engineering Programme.webp",
  "/Career/traning-carouser1/n5_Graduate Engineering Programme.webp"
];
const traningImages2 = [  
 "/Career/traning-carouser2/n1_Apprenticeship programme_n1.jpg",
 "/Career/traning-carouser2/n2_Apprenticeship programme_n2.webp",
]
const traningImages3 = [
  "/Career/traning-carouser3/Quantity Surveying Programme_n1.webp",
]

export default function Careers() {
  // const [jobIsOpen, setJobIsOpen] = useState<Record<number, boolean>>({});
  const [selectedSection, setSelectedSection] = useState("career");
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const carouselApi1 = useRef<CarouselApi>(null);
  const carouselApi2 = useRef<CarouselApi>(null);
  const carouselApi3 = useRef<CarouselApi>(null);

  // Auto-advance slides for first carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide1((prev) => (prev + 1) % trainingImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance slides for second carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % traningImages2.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance slides for third carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide3((prev) => (prev + 1) % traningImages3.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Update carousel positions when slides change
  useEffect(() => {
    if (carouselApi1.current) {
      carouselApi1.current.scrollTo(currentSlide1);
    }
  }, [currentSlide1]);

  useEffect(() => {
    if (carouselApi2.current) {
      carouselApi2.current.scrollTo(currentSlide2);
    }
  }, [currentSlide2]);

  useEffect(() => {
    if (carouselApi3.current) {
      carouselApi3.current.scrollTo(currentSlide3);
    }
  }, [currentSlide3]);

  const renderContent = () => {
    switch (selectedSection) {
      case "career":
        return (
          <div className="max-w-[1115px] mx-auto py-6">
            <h2 className="text-3xl font-semibold mb-8 text-[#838182]">
              Careers Opportunity
            </h2>
            <p className="text-[#838182] mb-10">
              Build King Holdings Limited, one of the leading construction
              groups in Hong Kong. With over 45 years of experiences in civil
              engineering and building construction, we have a long and proud
              track record of applying innovative solution to the development
              and management of high-quality, construction projects. The Group
              has over 3,000 employees and is always recruiting new talents to
              contribute to our business growth.
            </p>
            <div className="flex justify-start mb-12">
              <Image
                src="/Career/MD.png"
                alt="Career MD"
                width={230}
                height={130}
                className="object-cover"
              />
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-[#838182]">
                Build King Alumni
              </h3>
              <p className="text-[#838182] mb-8">
                Please click below to join our Alumni to stay connected with us
                about job opportunities, career events and news!
              </p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/Career/BKAlumni.png"
                alt="BK Alumni"
                width={888}
                height={369}
                className="object-cover"
              />
            </div>
          </div>
        );
      case "job-opportunities":
        return (
          <div>
            <div className="relative max-w-[1831px] w-full h-[740px] mx-auto">
              <Image
                src="/Career/career_banner.jpg"
                alt="Job opportunities"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

              {/* Overlay boxes - First Row */}
              <div className="absolute top-0 left-0 right-0 w-full">
                <div className="flex justify-center space-x-0">
                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#838182]/70 text-white">
                    <h3 className="text-3xl font-normal">
                      We are looking for suitable and qualified candidates
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>

              {/* Overlay boxes - Second Row */}
              <div className="absolute top-[370px] left-0 right-0 w-full">
                <div className="flex justify-center space-x-0">
                  <div className="relative w-[370px] h-[370px]"></div>

                  <div className="relative w-[370px] h-[370px] pl-8 pb-10 flex items-end justify-start bg-[#E63946D6] text-white">
                    <h3 className="text-3xl font-normal">
                      We continue to <br />{" "}
                      <strong>invest in our people</strong>
                    </h3>
                  </div>

                  <div className="relative w-[370px] h-[370px]"></div>
                </div>
              </div>
            </div>

            {/* Job Overview Section */}
            <div className="max-w-[1115px] mx-auto py-12">
              <h2 className="text-3xl font-semibold mb-8 text-[#838182]">
                Job Overview
              </h2>
              <p className="text-[#838182] mb-6 text-lg">
                Thank you for your interest in joining Build King Group. You may
                submit job applications via one of the following channels:
              </p>

              <div className="text-[#838182] mb-6">
                <h3 className="mb-2 text-xl">1)Online Application</h3>
                <p className="text-lg">
                  Please click &quot;Apply Online&quot; (under the position
                  applied for) to complete and submit the online application
                  form.
                </p>
              </div>

              <div className="text-[#838182] mb-6">
                <h3 className="mb-2 text-xl">2) By Email</h3>
                <p className="text-lg">
                  Please send your application with full resume and expected
                  salary via email{" "}
                  <a
                    href="mailto:hr@buildking.hk"
                    className="text-[#0099a7] hover:underline"
                  >
                    hr@buildking.hk
                  </a>
                </p>
              </div>

              <div className="text-[#838182] mb-6">
                <h3 className="mb-2 text-xl">3) By Mail</h3>
                <p className="text-lg">
                  Please send your application with full resume and expected
                  salary to Human Resources Department, Units 601-605A, 6/F,
                  Tower B, Manulife Financial Centre, 223 Wai Yip Street, Kwun
                  Tong, Kowloon, Hong Kong.
                </p>
              </div>

              <p className="text-[#838182] text-lg">
                All information provided will be treated in strict confidence
                and be used only for consideration of your application for
                relevant / similar positions. All personal data of unsuccessful
                applicants will be destroyed within 12 months from the date of
                application.
              </p>
            </div>

            {/* <div className="max-w-[1115px] mx-auto py-12">
              {jobData.map((job, index) => (
                <div key={index}>
                  <button
                    onClick={() =>
                      setJobIsOpen((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className="flex justify-between items-center w-full text-left text-xl font-semibold text-[#0099A7]"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center relative">
                        <span className="mr-2 inline-block w-2 h-2 rounded-full bg-[#0099A7]"></span>
                        {job.title}
                      </div>
                      <span
                        className={`transition-transform duration-200 ${
                          jobIsOpen[index] ? "rotate-90" : ""
                        }`}
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "10px solid transparent",
                          borderBottom: "10px solid transparent",
                          borderLeft: "10px solid #0099A7",
                          marginLeft: "6px",
                        }}
                      />
                    </div>
                  </button>

                  {jobIsOpen[index] && (
                    <div className="mt-4 space-y-6">
                      <div>
                        <h2 className="text-lg font-bold text-[#0099A7]">
                          Responsibilities
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-[#838182]">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-lg font-bold text-[#0099A7]">
                          Requirements
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-[#838182]">
                          {job.requirements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-[#0099A7]">
                        We provide attractive remuneration package, fringe
                        benefits and excellent career prospects to the right
                        candidate. Interested parties please send your
                        application with full resume with availability and
                        expected salary to Human Resources Department by email:
                        <a
                          href={`mailto:${job.contact.email}`}
                          className="text-[#0099a7] hover:underline ml-1"
                        >
                          {job.contact.email}
                        </a>{" "}
                        or click{" "}
                        <span className="text-[#0099a7] hover:underline cursor-pointer">
                          {job.contact.applyLink}
                        </span>
                        .
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div> */}
            <CurrentVacanciesList />
          </div>
        );
      case "training":
        return (
          <div className="max-w-[1115px] mx-auto py-6">
            <h2 className="text-3xl font-semibold mb-8 text-[#838182]">
              Training and Development
            </h2>
            <div className="text-[#838182] space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Training Programmes
              </h3>
              <p>
                Staff are our most valuable asset. As a fast growing company, we
                emphasize continuing investment in people through vigorous
                training and development programmes. For professional
                development, we offer three systematic training schemes namely,
                Graduate Engineer Programme, Apprenticeship Programme and
                Quantity Surveying Programme. We are actively considering other
                discipline such as Environmental Training Programme into our
                Group.
              </p>
            </div>

            {/* Training Programme Details */}
            <div className="space-y-8">
              {/* First Training Section */}
              <section className="w-[1110px] h-[370px] mx-auto">
                <div className="flex h-full">
                  {/* Carousel Section */}
                  <div className="relative w-[370px] h-[370px]">
                    <Carousel
                      className="w-full h-full"
                      setApi={(api: CarouselApi) => {
                        if (api) {
                          carouselApi1.current = api;
                          api.on("select", () => {
                            setCurrentSlide1(api.selectedScrollSnap());
                          });
                        }
                      }}
                    >
                      <CarouselContent>
                        {trainingImages.map((image, index) => (
                          <CarouselItem key={index} className="h-[370px]">
                            <div className="relative w-full h-full">
                              <Image
                                src={image}
                                alt={`Training slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* Navigation dots */}
                      <div className="absolute bottom-4 right-8 flex gap-2 z-40">
                        {trainingImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide1(index)}
                            className={`w-4 h-4 transition-colors ${
                              currentSlide1 === index ? 'bg-red-600' : 'bg-white'
                            } hover:bg-red-700`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </Carousel>
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 bg-[#33b9af] text-white p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Graduate Engineer Programme</h2>
                    <p className="text-base leading-relaxed">
                      The programme has been registered with Hong Kong Institute of Engineers since 1996.
                      Our approved disciplines include Civil, Building and Building Services. We have trained over hundreds
                      of qualified engineers, many of them are holding key positions in the Group. There are carefully
                      planned orientation, job training, site visits, CPD and mentoring.
                    </p>
                  </div>
                </div>
              </section>

              {/* Second Training Section */}
              <section className="w-[1110px] h-[370px] mx-auto">
                <div className="flex h-full">
                  {/* Carousel Section */}
                  <div className="relative w-[370px] h-[370px]">
                    <Carousel
                      className="w-full h-full"
                      setApi={(api: CarouselApi) => {
                        if (api) {
                          carouselApi2.current = api;
                          api.on("select", () => {
                            setCurrentSlide2(api.selectedScrollSnap());
                          });
                        }
                      }}
                    >
                      <CarouselContent>
                        {traningImages2.map((image, index) => (
                          <CarouselItem key={index} className="h-[370px]">
                            <div className="relative w-full h-full">
                              <Image
                                src={image}
                                alt={`Training slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* Navigation dots */}
                      <div className="absolute bottom-4 right-8 flex gap-2 z-40">
                        {traningImages2.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide2(index)}
                            className={`w-4 h-4 transition-colors ${
                              currentSlide2 === index ? 'bg-red-600' : 'bg-white'
                            } hover:bg-red-700`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </Carousel>
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 bg-[#33b9af] text-white p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Apprenticeship Programme</h2>
                    <p className="text-base leading-relaxed">
                      Our Apprenticeship Programme provides comprehensive training for aspiring professionals.
                      Through hands-on experience and mentorship, apprentices develop practical skills and industry knowledge.
                      The programme includes structured learning modules, site experience, and professional development opportunities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third Training Section */}
              <section className="w-[1110px] h-[370px] mx-auto">
                <div className="flex h-full">
                  {/* Carousel Section */}
                  <div className="relative w-[370px] h-[370px]">
                    <Carousel
                      className="w-full h-full"
                      setApi={(api: CarouselApi) => {
                        if (api) {
                          carouselApi3.current = api;
                          api.on("select", () => {
                            setCurrentSlide3(api.selectedScrollSnap());
                          });
                        }
                      }}
                    >
                      <CarouselContent>
                        {traningImages3.map((image, index) => (
                          <CarouselItem key={index} className="h-[370px]">
                            <div className="relative w-full h-full">
                              <Image
                                src={image}
                                alt={`Training slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* Navigation dots */}
                      <div className="absolute bottom-4 right-8 flex gap-2 z-40">
                        {traningImages3.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide3(index)}
                            className={`w-4 h-4 transition-colors ${
                              currentSlide3 === index ? 'bg-red-600' : 'bg-white'
                            } hover:bg-red-700`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </Carousel>
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 bg-[#33b9af] text-white p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Quantity Surveying Programme</h2>
                    <p className="text-base leading-relaxed">
                      Our Quantity Surveying Programme develops professionals in construction cost management.
                      Participants gain expertise in cost planning, contract administration, and project financial control.
                      The programme combines theoretical knowledge with practical experience in real projects.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <section className="container mx-auto py-12 bg-[#F1F1F1]">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("career")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "career"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Careers
            </h3>
            <Image
              src="/Career/Careers.jpg"
              alt="Career at BK"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("job-opportunities")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "job-opportunities"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Job Opportunities
            </h3>
            <Image
              src="/Career/job_vacancy.png"
              alt="Job Opportunities"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedSection("training")}
          >
            <h3
              className={`text-xl mb-3 ${
                selectedSection === "training"
                  ? "text-[#0099a7]"
                  : "text-gray-600"
              }`}
            >
              Training and Development
            </h3>
            <Image
              src="/Career/traning.png"
              alt="Training and Development"
              width={350}
              height={218}
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto mb-20">{renderContent()}</div>
      </section>
      <Footer />
    </main>
  );
}