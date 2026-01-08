import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projectList = [
    {
      title: "Outreach to Katampe Community",
      desc: "We organize community engagement programs and provide support for children with special needs.",
      href: "#project-1",
      img: "/images/banner-img.jpg",
    },
    {
      title: "Educational Support Program",
      desc: "Providing resources, tutoring, and mentorship to children who need extra help.",
      href: "#project-2",
      img: "/images/banner-img.jpg",
    },
    {
      title: "Volunteer Programs",
      desc: "Encouraging community involvement and volunteer activities to empower children.",
      href: "#project-3",
      img: "/images/banner-img.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F8F6FE] py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-[#3322AA] font-bold text-sm sm:text-base tracking-wider uppercase">
              Our Projects
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#020A18]">
              Our goal is to provide inclusive care for children with special
              needs
            </h3>
            <p className="text-[#020A18]/80 text-base sm:text-lg leading-relaxed">
              We focus on providing meaningful programs and support to empower
              children in our community through educational, social, and
              volunteer initiatives.
            </p>
            <button className="bg-[#3322AA] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3133EE] transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            {projectList.map((project, idx) => (
              <Link
                key={idx}
                href={project.href}
                className="flex flex-col sm:flex-row gap-4 bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full sm:w-48 h-32 sm:h-32 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-lg sm:text-xl text-[#020A18]">
                    {project.title}
                  </p>
                  <p className="text-[#020A18]/70 mt-1 text-sm sm:text-base">
                    {project.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Projects Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-28 max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-[#020A18] pb-12">
          Our Projects/Outreaches
        </h3>

        {projectList.map((project, idx) => (
          <div key={idx} id={`project-${idx + 1}`} className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 sm:w-24 bg-[#3322AA]"></div>
              <h4 className="text-[#3322AA] font-bold uppercase tracking-wider text-sm sm:text-base">
                {project.title}
              </h4>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-[#020A18]">
              Providing inclusive care and support
            </h3>
            <p className="text-[#020A18]/80 mb-6">
              {project.desc} Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum lacinia, nisl sit amet congue pulvinar, felis
              urna lacinia sapien, in bibendum arcu urna nec sapien. Integer sed
              consequat quam. Aliquam erat volutpat.
            </p>

            {/* Horizontal Scroll Gallery */}
            <div className="flex overflow-x-auto gap-6 py-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#3322AA]/50 scrollbar-track-gray-200">
              {[1, 2, 3, 4].map((img, i) => (
                <Image
                  key={i}
                  src="/images/banner-img.jpg"
                  alt={`${project.title} image ${i + 1}`}
                  width={400}
                  height={400}
                  className="w-80 sm:w-96 flex-shrink-0 h-64 sm:h-72 object-cover rounded-2xl snap-start shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
