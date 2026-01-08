import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F8F6FE]">
      {/* About Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#3322AA]"></div>
          <p className="text-[#3322AA] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Know About Us
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#020A18]">
              We Are a Non-Governmental Organization
            </h1>
            <p className="text-[#020A18]/80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aspernatur alias quibusdam quaerat error beatae at. At
              perferendis molestias nihil.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-6 text-[#020A18]/80">
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

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 bg-[#F8F6FE] p-8 rounded-2xl shadow-lg">
          <div className="lg:w-1/2 space-y-4">
            <p className="text-[#3322AA] font-bold uppercase tracking-wider text-sm sm:text-base">
              Our Mission
            </p>
            <h3 className="text-xl font-semibold text-[#020A18]">
              Empowering Communities
            </h3>
            <p className="text-[#020A18]/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              vitae ut nobis molestiae omnis suscipit, labore harum cupiditate
              impedit facilis.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <p className="text-[#3322AA] font-bold uppercase tracking-wider text-sm sm:text-base">
              Our Vision
            </p>
            <h3 className="text-xl font-semibold text-[#020A18]">
              Creating Sustainable Change
            </h3>
            <p className="text-[#020A18]/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae alias facere illum, repellendus consequuntur nihil
              ullam cum sequi.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-28 px-6 sm:px-12 lg:px-28">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold pb-12 text-[#020A18]">
          Meet the Founder
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-[#020A18]/80">
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
            <p className="mt-4 font-semibold text-lg text-[#020A18]">
              Olusegun Emmanuel Adetunji
            </p>
            <p className="text-center text-[#020A18]/60">
              Founder, Eagletech Information Technology Limited and Eagletech
              Foundation
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-4 text-[#020A18]/60">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3322AA] transition-colors"
              >
                {/* LinkedIn SVG */}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3322AA] transition-colors"
              >
                {/* Facebook SVG */}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3322AA] transition-colors"
              >
                {/* Instagram SVG */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
