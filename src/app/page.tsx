import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh]">
        <Image
          src="/images/banner-img.jpg"
          alt="Children with special needs supported by Eagletech Foundation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#020A18]/40" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-28">
          <div className="text-left max-w-3xl space-y-4">
            <div className="inline-flex bg-[#F8F6FE] px-6 py-4 gap-x-3 rounded-full shadow items-center">
              <Image
                src="/icons/logomark.svg"
                width={200}
                height={200}
                alt="Logo"
                className="w-5 h-auto"
              />
              <span className="text-[#3322AA] text-sm sm:text-base font-semibold">
                Eagletech Foundation
              </span>
            </div>

            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
              Inclusive Care For People With Disability
            </h1>
            <Link
              href="#mission"
              className="inline-block bg-[#3322AA] text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-[#3133EE] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        id="mission"
        className="bg-[#F8F6FE] py-16 sm:py-24 px-6 sm:px-12 lg:px-28"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-[#3322AA] font-bold text-sm sm:text-base tracking-wider uppercase">
              Our Mission
            </h2>
            <h3 className="text-[#020A18] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              We provide a place for children with special needs
            </h3>
            <p className="text-[#020A18] text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet.
            </p>
            <button className="bg-[#3322AA] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3133EE] transition-all duration-300">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/banner-img.jpg"
              alt="Mission"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="bg-[#F0F4FF] py-16 sm:py-24 px-6 sm:px-12 lg:px-28 text-center">
        <h2 className="text-[#3322AA] font-bold text-sm sm:text-base tracking-wider uppercase mb-4">
          Our Vision
        </h2>
        <p className="text-[#020A18] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          To build an inclusive and empowered society where every individual can
          achieve their full potential and contribute meaningfully to
          sustainable national and global development.
        </p>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
            <h2 className="text-[#3322AA] font-bold text-sm sm:text-base tracking-wider uppercase">
              Our Core Values
            </h2>
            <h3 className="text-[#020A18] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Here are our firm beliefs
            </h3>

            <div className="space-y-4">
              {/* Repeat icons */}
              {[
                "Empowerment",
                "Inclusivity",
                "Innovation",
                "Compassion",
                "Collaboration",
                "Integrity",
              ].map((value) => (
                <div key={value} className="flex gap-4 items-start">
                  <svg
                    className="w-6 h-6 text-[#3322AA] mt-1 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 16l6-6 4 4 6-6" />
                  </svg>
                  <div>
                    <p className="font-bold text-lg">{value}</p>
                    <p className="text-[#020A18] leading-relaxed">
                      Lorem ipsum placeholder description for {value}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <Image
              src="/images/banner-img.jpg"
              alt="Core Values"
              fill
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="bg-[#10103C] text-white py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              The dreadful statistics and realities that exist in today's world
            </h2>
            <p className="leading-relaxed text-white/90">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              eveniet tempore recusandae obcaecati laboriosam blanditiis cumque
              perferendis enim reprehenderit eius!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-white">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-sm" />
                <p>40% Childcare home</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-sm" />
                <p>60% Children with special needs</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-sm" />
                <p>30% Lack of resources</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-80 sm:h-96 lg:h-auto">
            <Image
              src="/images/banner-img.jpg"
              alt="Statistics"
              fill
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-6">
            <div className="h-px w-24 bg-[#3322AA]"></div>
            <h2 className="text-[#3322AA] font-bold uppercase tracking-wider text-sm sm:text-base">
              Our Past Projects
            </h2>
          </div>
          <h3 className="text-[#020A18] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            We are creating a place where children with special needs can
            thrive.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src="/images/banner-img.jpg"
                  alt={`Project ${project}`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#020A18]/40 p-6 flex flex-col justify-end">
                  <h4 className="text-white text-xl font-semibold mb-2">
                    Mission Smile {project}k: Outdoor Outreach
                  </h4>
                  <p className="text-white mb-4 text-sm sm:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae porro earum ab corrupti asperiores numquam.
                  </p>
                  <button className="bg-white text-[#3322AA] px-4 py-2 rounded-lg font-medium hover:bg-[#3322AA] hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
