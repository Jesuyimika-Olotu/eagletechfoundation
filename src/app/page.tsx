// import Image from "next/image";
// import Link from "next/link";

// export default function Page() {
//   return (
//     <>
//       <section className="relative">
//         <Image
//           src="/images/banner-img.jpg"
//           alt="Children with special needs supported by Eagletech Foundation"
//           width={1500}
//           height={735}
//           priority
//           className="w-full h-[90vh] object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />

//         <div className="absolute inset-0 flex items-center">
//           <div className="px-6 md:px-16 lg:px-28 max-w-6xl space-y-6">
//             <span className="inline-block bg-white text-blue-700 text-sm md:text-base font-semibold px-6 py-3 rounded-full">
//               Eagletech Foundation
//             </span>

//             <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
//               Inclusive Care for Children with Special Needs
//             </h1>

//             {/* <Link
//               href="/"
//               className="inline-block bg-white text-blue-700 font-medium px-8 py-4 rounded-md hover:bg-blue-50 transition"
//             >
//               What We Do
//             </Link> */}
//           </div>
//         </div>
//       </section>
// <section className="">
//   <div className="flex px-28 py-21.5">
//     <div className="flex gap-x-6 items-start">
//       <div className="h-px bg-[#1D2130] w-40 mt-2"></div>
//       <div>
//         <p className="text-[16px] tracking-[2px] font-bold text-gray-700">
//           Our Mission
//         </p>
//         <div className="flex flex-col gap-y-8 pt-8">
//           <h2 className="text-5xl font-bold">
//             We provide a place for children with special needs
//           </h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Suspendisse varius enim in eros elementum tristique. <br />{" "}
//             <br /> Duis cursus, mi quis viverra ornare, eros dolor
//             interdum nulla, ut commodo diam libero vitae erat. Aenean
//             faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
//             ut sem vitae risus tristique posuere.
//           </p>
//           <button className="bg-blue-700 text-white px-8 py-4 self-start text-left rounded-sm">
//             Learn More
//           </button>
//         </div>
//       </div>
//       <div>
//         <Image
//           src="/images/banner-img.jpg"
//           alt="Mission"
//           width={500}
//           height={500}
//           className="w-auto h-[400px] rounded-2xl shadow-blue-500 shadow-2xl"
//         />
//       </div>
//     </div>
//   </div>
// </section>
//       <section className="bg-blue-100 py-21.5">
//         <div className="w-[50%] mx-auto text-center">
//           <h2 className="text-[16px] tracking-[2px] font-extrabold text-gray-700">
//             Our Vision
//           </h2>
//           <p className="text-[16px] tracking-[1px] font-bold text-gray-700">
//             To build an inclusive and empowered society where every individual
//             can achieve their full potential and contribute meaningfully to
//             sustainable national and global development.
//           </p>
//         </div>
//       </section>
//       <section className="flex px-28 py-21.5 items-center">
//         <div className="w-full">
//           <h2 className="text-[16px] tracking-[1px] font-bold text-gray-700">
//             Our Core Values
//           </h2>
//           <p className="text-5xl font-bold pt-6">Here are our firm believes</p>

//           <div className="flex flex-col gap-y-4 pt-6">
//             {/* Empowerment */}
//             <div className="flex gap-x-4">
//               <svg
//                 className="w-6 h-6 text-blue-700 mt-1"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M4 16l6-6 4 4 6-6" />
//                 <path d="M14 8h6v6" />
//               </svg>
//               <div>
//                 <p className="font-bold">Empowerment</p>
//                 <p>
//                   We provide opportunities that inspire growth and
//                   self-reliance.
//                 </p>
//               </div>
//             </div>

//             {/* Inclusivity */}
//             <div className="flex gap-x-4">
//               <svg
//                 className="w-6 h-6 text-blue-700 mt-1"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="7" r="3" />
//                 <path d="M5.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" />
//                 <path d="M3 14c.8-1.4 2.4-2.5 4.2-3" />
//                 <path d="M21 14c-.8-1.4-2.4-2.5-4.2-3" />
//               </svg>
//               <div>
//                 <p className="font-bold">Inclusivity</p>
//                 <p>
//                   We ensure equal participation and respect for all individuals.
//                 </p>
//               </div>
//             </div>

//             {/* Innovation */}
//             <div className="flex gap-x-4">
//               <svg
//                 className="w-6 h-6 text-blue-700 mt-1"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M9 18h6" />
//                 <path d="M10 22h4" />
//                 <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5a7 7 0 0 0-4-12z" />
//               </svg>
//               <div>
//                 <p className="font-bold">Innovation</p>
//                 <p>
//                   We embrace creative approaches to solving social challenges.
//                 </p>
//               </div>
//             </div>

//             {/* Compassion */}
//             <div className="flex gap-x-4">
//               <svg
//                 className="w-6 h-6 text-blue-700 mt-1"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 21s-6-4.4-8.5-7.1a5 5 0 0 1 7.1-7.1L12 8.2l1.4-1.4a5 5 0 0 1 7.1 7.1C18 16.6 12 21 12 21z" />
//               </svg>
//               <div>
//                 <p className="font-bold">Compassion</p>
//                 <p>We serve with empathy, kindness, and humanity.</p>
//               </div>
//             </div>

//             {/* Collaboration */}
//             <div className="flex gap-x-4">
//               <svg
//                 className="w-6 h-6 text-blue-700 mt-1"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="5" r="2" />
//                 <circle cx="5" cy="19" r="2" />
//                 <circle cx="19" cy="19" r="2" />
//                 <path d="M12 7v6" />
//                 <path d="M10 13l-4 4" />
//                 <path d="M14 13l4 4" />
//               </svg>
//               <div>
//                 <p className="font-bold">Collaboration</p>
//                 <p>
//                   We work together with partners and communities to create
//                   lasting impact.
//                 </p>
//               </div>
//             </div>

//             {/* Integrity */}
//             <div className="flex gap-x-4">
//               <svg
//                 className="w-6 h-6 text-blue-700 mt-1"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
//                 <path d="M9 12l2 2 4-4" />
//               </svg>
//               <div>
//                 <p className="font-bold">Integrity</p>
//                 <p>
//                   We uphold transparency, accountability, and ethical practices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="">
//           <Image
//             src="/images/banner-img.jpg"
//             alt="Mission"
//             width={1500}
//             height={1500}
//             className="w-full h-[80vh]"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <Image
          src="/images/banner-img.jpg"
          alt="Children with special needs supported by Eagletech Foundation"
          width={1500}
          height={735}
          priority
          className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-16 lg:px-28 max-w-6xl space-y-6">
            <span className="inline-block bg-white text-blue-700 text-sm md:text-base font-semibold px-6 py-3 rounded-full">
              Eagletech Foundation
            </span>

            <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
              Inclusive Care for Children with Special Needs
            </h1>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="">
        <div className="flex px-28 py-21.5">
          <div className="flex gap-x-6 items-start">
            <div className="h-px bg-[#1D2130] w-40 mt-2"></div>
            <div>
              <p className="text-[16px] tracking-[2px] font-bold text-gray-700">
                Our Mission
              </p>
              <div className="flex flex-col gap-y-8 pt-8">
                <h2 className="text-5xl font-bold">
                  We provide a place for children with special needs
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. <br />{" "}
                  <br /> Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Aenean
                  faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
                  ut sem vitae risus tristique posuere.
                </p>
                <button className="bg-blue-700 text-white px-8 py-4 self-start text-left rounded-sm">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/images/banner-img.jpg"
                alt="Mission"
                width={500}
                height={500}
                className="w-auto h-[400px] rounded-2xl shadow-blue-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-blue-100 py-21.5">
        <div className="w-full md:w-[70%] lg:w-[50%] mx-auto text-center px-6">
          <h2 className="text-[16px] tracking-[2px] font-extrabold text-gray-700">
            Our Vision
          </h2>
          <p className="text-[16px] tracking-[1px] font-bold text-gray-700">
            To build an inclusive and empowered society where every individual
            can achieve their full potential.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-28 py-21.5 gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[16px] tracking-[1px] font-bold text-gray-700">
            Our Core Values
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold pt-6">
            Here are our firm believes
          </p>

          <div className="flex flex-col gap-y-4 pt-6">
            {/* Empowerment */}
            <div className="flex gap-x-4">
              <svg
                className="w-6 h-6 text-blue-700 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 16l6-6 4 4 6-6" />
                <path d="M14 8h6v6" />
              </svg>
              <div>
                <p className="font-bold">Empowerment</p>
                <p>
                  We provide opportunities that inspire growth and
                  self-reliance.
                </p>
              </div>
            </div>

            {/* Inclusivity */}
            <div className="flex gap-x-4">
              <svg
                className="w-6 h-6 text-blue-700 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="7" r="3" />
                <path d="M5.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" />
                <path d="M3 14c.8-1.4 2.4-2.5 4.2-3" />
                <path d="M21 14c-.8-1.4-2.4-2.5-4.2-3" />
              </svg>
              <div>
                <p className="font-bold">Inclusivity</p>
                <p>
                  We ensure equal participation and respect for all individuals.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="flex gap-x-4">
              <svg
                className="w-6 h-6 text-blue-700 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5a7 7 0 0 0-4-12z" />
              </svg>
              <div>
                <p className="font-bold">Innovation</p>
                <p>
                  We embrace creative approaches to solving social challenges.
                </p>
              </div>
            </div>

            {/* Compassion */}
            <div className="flex gap-x-4">
              <svg
                className="w-6 h-6 text-blue-700 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-6-4.4-8.5-7.1a5 5 0 0 1 7.1-7.1L12 8.2l1.4-1.4a5 5 0 0 1 7.1 7.1C18 16.6 12 21 12 21z" />
              </svg>
              <div>
                <p className="font-bold">Compassion</p>
                <p>We serve with empathy, kindness, and humanity.</p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="flex gap-x-4">
              <svg
                className="w-6 h-6 text-blue-700 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="5" cy="19" r="2" />
                <circle cx="19" cy="19" r="2" />
                <path d="M12 7v6" />
                <path d="M10 13l-4 4" />
                <path d="M14 13l4 4" />
              </svg>
              <div>
                <p className="font-bold">Collaboration</p>
                <p>
                  We work together with partners and communities to create
                  lasting impact.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="flex gap-x-4">
              <svg
                className="w-6 h-6 text-blue-700 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div>
                <p className="font-bold">Integrity</p>
                <p>
                  We uphold transparency, accountability, and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="/images/banner-img.jpg"
            alt="Mission"
            width={1500}
            height={1500}
            className="w-full h-[300px] md:h-[400px] lg:h-[80vh] object-cover"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#00067D] py-21.5 px-6 md:px-28 flex flex-col md:flex-row gap-x-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold pt-8 text-white">
            The dreadful statistics and realities that exists in today's world.
          </h2>
          <p className="mt-4 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eveniet
            tempore recusandae obcaecati laboriosam blanditiis cumque
            perferendis enim reprehenderit eius!
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex gap-x-2 items-center">
              <div className="bg-white w-4 h-4 rounded-sm"></div>
              <p className="text-white">40% Childcare home</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="bg-white w-4 h-4 rounded-sm"></div>
              <p className="text-white">40% Childcare home</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="bg-white w-4 h-4 rounded-sm"></div>
              <p className="text-white">40% Childcare home</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="bg-white w-4 h-4 rounded-sm"></div>
              <p className="text-white">40% Childcare home</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="bg-white w-4 h-4 rounded-sm"></div>
              <p className="text-white">40% Childcare home</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/images/banner-img.jpg"
            alt="Mission"
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>

      {/* Project Section */}
      <section>
        <div className="px-28 py-21.5">
          <div className="flex gap-x-6 items-start">
            <div className="h-px bg-[#1D2130] w-40 mt-2"></div>
            <div>
              <p className="text-[16px] tracking-[2px] font-bold text-gray-700">
                Our Past Projects
              </p>
              <h2 className="text-5xl font-bold pt-8 w-[60%]">
                We are creating a place where children with special needs can
                thrive.
              </h2>
            </div>
          </div>

          {/* Outreach cards */}
          <div className="flex gap-x-6 pt-16.25">
            <div className="relative">
              <Image
                src="/images/banner-img.jpg"
                alt="Mission"
                width={500}
                height={500}
                className="w-auto h-[350px] rounded-2xl"
              />
              <div className="absolute top-0 left-0 py-10 px-6">
                <p className="text-white text-xl font-semibold pb-4">
                  Mission smile 1k: Outdoor outreach
                </p>
                <p className="text-white pb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae porro earum ab corrupti asperiores numquam.
                </p>
                <button className="text-blue-700 bg-white px-8 py-4 self-start text-left rounded-sm hover:bg-blue-700 hover:text-white hover:cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/banner-img.jpg"
                alt="Mission"
                width={500}
                height={500}
                className="w-auto h-[350px] rounded-2xl"
              />
              <div className="absolute top-0 left-0 py-10 px-6">
                <p className="text-white text-xl font-semibold pb-4">
                  Mission smile 1k: Outdoor outreach
                </p>
                <p className="text-white pb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae porro earum ab corrupti asperiores numquam.
                </p>
                <button className="text-blue-700 bg-white px-8 py-4 self-start text-left rounded-sm hover:bg-blue-700 hover:text-white hover:cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/banner-img.jpg"
                alt="Mission"
                width={500}
                height={500}
                className="w-auto h-[350px] rounded-2xl"
              />
              <div className="absolute top-0 left-0 py-10 px-6">
                <p className="text-white text-xl font-semibold pb-4">
                  Mission smile 1k: Outdoor outreach
                </p>
                <p className="text-white pb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae porro earum ab corrupti asperiores numquam.
                </p>
                <button className="text-blue-700 bg-white px-8 py-4 self-start text-left rounded-sm hover:bg-blue-700 hover:text-white hover:cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue line */}
      <div className="px-28">
        <div className="w-full h-[4px] bg-[#00067D]"></div>
      </div>
      {/* Volunteer section */}
      <section className="px-28 py-21.5">
        <div className="relative">
          <Image
            src="/images/banner-img.jpg"
            alt="Mission"
            width={1500}
            height={1500}
            className="w-screen h-[500px] bg-cover rounded-2xl"
          />
          <div className="absolute top-0 left-0 py-30 px-60 flex flex-col justify-center items-center gap-y-8 text-center">
            <h2 className="text-5xl font-bold pt-8 text-white">
              You can contribute to provide a place for children with special
              needs
            </h2>
            <button className="bg-blue-700 text-white px-8 py-4 font-bold rounded-sm border-white border-4 shadow-2xl  hover:bg-blue-700 hover:text-white hover:cursor-pointer">
              Join as a volunteer
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
