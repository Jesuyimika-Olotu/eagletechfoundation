// import Image from "next/image";

// export default function About() {
//   return (
//     <section>
//       {/* About Section */}
//       <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-28 mb-72">
//         <div className="flex items-center gap-6 pb-8">
//           <div className="h-px w-24 bg-blue-700"></div>
//           <p className="text-blue-700 font-bold uppercase tracking-wider text-sm sm:text-base">
//             Know About Us
//           </p>
//         </div>
//         <div className="flex gap-x-4">
//           <div className="max-w-7xl mx-auto space-y-12 flex-1">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
//               We are a Non-Governmental Organization
//             </h1>
//           </div>
//           <div className="flex-1">
//             <p className="font-bold pb-8">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Voluptate aspernatur alias quibusdam quaerat error beatae at. At
//               perferendis molestias nihil.
//             </p>
//             <p className="pb-8">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
//               ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
//               obcaecati delectus quo perferendis ea dolore neque, consectetur,
//               expedita ducimus vero!
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
//               ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
//               obcaecati delectus quo perferendis ea dolore neque, consectetur,
//               expedita ducimus vero! Lorem ipsum dolor sit amet consectetur,
//               adipisicing elit. Libero repellat laboriosam architecto molestiae?
//               Adipisci, dolor beatae explicabo non necessitatibus provident
//               harum mollitia quia suscipit deserunt optio ea ipsum eligendi
//               dolorem facilis, unde nihil nesciunt voluptas saepe ipsa aliquam!
//               Totam, consequatur.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="relative bg-blue-100 px-6 sm:px-12 lg:px-28 pb-24 pt-64">
//         <div className="absolute top-0 left-0 w-full -translate-y-1/2 px-28">
//           <Image
//             src="/images/banner-img.jpg"
//             alt="Mission"
//             width={1500}
//             height={500}
//             className="w-full h-[400px] rounded-2xl shadow-lg object-cover"
//             priority
//           />
//         </div>

//         <div className="relative z-10 flex flex-col lg:flex-row gap-x-12 gap-y-12 pt-10">
//           <div>
//             <p className="text-blue-700 font-bold uppercase tracking-wider text-sm sm:text-base pb-4">
//               Our Mission
//             </p>
//             <p className="pb-2 font-bold">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//               vitae ut nobis molestiae omnis suscipit, labore harum cupiditate
//               impedit facilis?
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Recusandae alias facere illum, repellendus consequuntur nihil
//               ullam cum sequi, exercitationem fuga libero.
//             </p>
//           </div>

//           <div>
//             <p className="text-blue-700 font-bold uppercase tracking-wider text-sm sm:text-base pb-4">
//               Our Mission
//             </p>
//             <p className="pb-2 font-bold">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
//               vitae ut nobis molestiae omnis suscipit, labore harum cupiditate
//               impedit facilis?
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Recusandae alias facere illum, repellendus consequuntur nihil
//               ullam cum sequi, exercitationem fuga libero.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Founder Section */}
//       <section className="pt-28 px-6 sm:px-12 lg:px-28">
//         <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold pb-4">
//           Meet the Founder
//         </h2>
//         <div className="flex flex-col lg:flex-row gap-x-12 gap-y-12 items-center">
//           <div className="flex-1">
//             <p className="pb-8">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Voluptate aspernatur alias quibusdam quaerat error beatae at. At
//               perferendis molestias nihil.
//             </p>
//             <p className="pb-8">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
//               ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
//               obcaecati delectus quo perferendis ea dolore neque, consectetur,
//               expedita ducimus vero!
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
//               ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
//               obcaecati delectus quo perferendis ea dolore neque, consectetur,
//               expedita ducimus vero! Lorem ipsum dolor sit amet consectetur,
//               adipisicing elit. Libero repellat laboriosam architecto molestiae?
//               Adipisci, dolor beatae explicabo non necessitatibus provident
//               harum mollitia quia suscipit deserunt optio ea ipsum eligendi
//               dolorem facilis, unde nihil nesciunt voluptas saepe ipsa aliquam!
//               Totam, consequatur.
//             </p>
//           </div>
//           <div className="lg:w-1/2 flex flex-col items-center">
//             <Image
//               src="/images/banner-img.jpg"
//               alt="Founder"
//               width={1500}
//               height={1500}
//               className="w-full h-auto rounded-2xl shadow-lg object-cover"
//             />
//             <p className="mt-4 font-bold text-lg">Olusegun Emmanuel Adetunji</p>
//             <p className="text-gray-600 text-center">
//               Founder, Eagletech Information Technology Limited and Eagletech
//               Foundation
//             </p>

//             {/* Social Media Icons */}
//             <div className="flex gap-6 mt-4">
//               {/* LinkedIn */}
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.762s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.784 1.762-1.75 1.762zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.155 1.46-2.155 2.969v5.698h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.562 2.84-1.562 3.036 0 3.599 2.002 3.599 4.604v5.591z" />
//                 </svg>
//               </a>

//               {/* Facebook */}
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.324v21.352c0 .73.593 1.324 1.324 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.592l-.468 3.622h-3.124v9.294h6.127c.73 0 1.324-.593 1.324-1.324v-21.352c0-.731-.593-1.324-1.324-1.324z" />
//                 </svg>
//               </a>

//               {/* Instagram */}
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.347 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.347-2.633 1.322-3.608.975-.975 2.242-1.26 3.608-1.322 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.013-4.947.072-1.598.073-3.012.346-4.118 1.451-1.106 1.106-1.378 2.52-1.451 4.118-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.073 1.598.346 3.012 1.451 4.118 1.106 1.106 2.52 1.378 4.118 1.451 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.598-.073 3.012-.346 4.118-1.451 1.106-1.106 1.378-2.52 1.451-4.118.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.073-1.598-.346-3.012-1.451-4.118-1.106-1.106-2.52-1.378-4.118-1.451-1.28-.059-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white">
      {/* About Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-16 bg-blue-700"></div>
          <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm sm:text-base">
            Know About Us
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              We Are a Non-Governmental Organization
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aspernatur alias quibusdam quaerat error beatae at. At
              perferendis molestias nihil.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-6 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
              obcaecati delectus quo perferendis ea dolore neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
              obcaecati delectus quo perferendis ea dolore neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              repellat laboriosam architecto molestiae? Adipisci, dolor beatae
              explicabo non necessitatibus provident harum mollitia quia
              suscipit deserunt optio ea ipsum eligendi dolorem facilis.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-6 sm:px-12 lg:px-28 py-32 sm:py-40">
        <div className="absolute inset-0 flex justify-center">
          <Image
            src="/images/banner-img.jpg"
            alt="Mission"
            width={1500}
            height={500}
            className="w-full h-96 sm:h-[400px] lg:h-[500px] rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-2xl shadow-lg">
          <div className="lg:w-1/2 space-y-4">
            <p className="text-blue-700 font-bold uppercase tracking-wider text-sm sm:text-base">
              Our Mission
            </p>
            <h3 className="text-xl font-semibold text-gray-900">
              Empowering Communities
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              vitae ut nobis molestiae omnis suscipit, labore harum cupiditate
              impedit facilis.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <p className="text-blue-700 font-bold uppercase tracking-wider text-sm sm:text-base">
              Our Vision
            </p>
            <h3 className="text-xl font-semibold text-gray-900">
              Creating Sustainable Change
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae alias facere illum, repellendus consequuntur nihil
              ullam cum sequi.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-28 px-6 sm:px-12 lg:px-28">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold pb-12 text-gray-900">
          Meet the Founder
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aspernatur alias quibusdam quaerat error beatae at. At perferendis
              molestias nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              ex. Iusto quod saepe ratione provident explicabo unde deleniti qui
              obcaecati delectus quo perferendis ea dolore neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              repellat laboriosam architecto molestiae? Adipisci, dolor beatae
              explicabo non necessitatibus provident harum mollitia quia
              suscipit deserunt optio ea ipsum eligendi dolorem facilis.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center">
            <Image
              src="/images/banner-img.jpg"
              alt="Founder"
              width={800}
              height={800}
              className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
            />
            <p className="mt-4 font-semibold text-lg text-gray-900">
              Olusegun Emmanuel Adetunji
            </p>
            <p className="text-center text-gray-600">
              Founder, Eagletech Information Technology Limited and Eagletech
              Foundation
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-4 text-gray-600">
              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.762s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.784 1.762-1.75 1.762zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.155 1.46-2.155 2.969v5.698h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.562 2.84-1.562 3.036 0 3.599 2.002 3.599 4.604v5.591z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.324v21.352c0 .73.593 1.324 1.324 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.592l-.468 3.622h-3.124v9.294h6.127c.73 0 1.324-.593 1.324-1.324v-21.352c0-.731-.593-1.324-1.324-1.324z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.347 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.073-1.598.346-3.012 1.451-4.118 1.106-1.106 2.52-1.378 4.118-1.451 1.28-.059 1.688-.072 4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
