import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="relative">
        <Image
          src="/images/banner-img.jpg"
          alt="Children with special needs supported by Eagletech Foundation"
          width={1500}
          height={735}
          priority
          className="w-full h-[90vh] object-cover"
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

            {/* <Link
              href="/"
              className="inline-block bg-white text-blue-700 font-medium px-8 py-4 rounded-md hover:bg-blue-50 transition"
            >
              What We Do
            </Link> */}
          </div>
        </div>
      </section>
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
      <section className="bg-blue-100 py-21.5">
        <div className="w-[50%] mx-auto text-center">
          <h2 className="text-[16px] tracking-[2px] font-extrabold text-gray-700">
            Our Vision
          </h2>
          <p className="text-[16px] tracking-[1px] font-bold text-gray-700">
            To build an inclusive and empowered society where every individual
            can achieve their full potential and contribute meaningfully to
            sustainable national and global development.
          </p>
        </div>
      </section>
      <section className="flex px-28 py-21.5 items-stretch">
        <div className="w-full">
          <h2 className="text-[16px] tracking-[1px] font-bold text-gray-700">
            Our Core Values
          </h2>
          <p className="text-5xl font-bold pt-6">Here are our firm believes</p>
          <div className="flex flex-col gap-y-4 pt-6">
            <div className="flex gap-x-4">
              <p>🌟</p>
              <div>
                <p className="font-bold">Empowerment</p>
                <p className="">
                  We provide opportunities that inspire growth and
                  self-reliance.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p>🤝</p>
              <div>
                <p className="font-bold">Inclusivity</p>
                <p className="">
                  We ensure equal participation and respect for all individuals.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p>💡</p>
              <div>
                <p className="font-bold">Innovation</p>
                <p className="">
                  We embrace creative approaches to solving social challenges.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p>❤️</p>
              <div>
                <p className="font-bold">Compassion</p>
                <p className="">
                  We serve with empathy, kindness, and humanity.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p>🕊️</p>
              <div>
                <p className="font-bold">Collaboration</p>
                <p className="">
                  We work together with partners and communities to create
                  lasting impact.
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <p>⚖️</p>
              <div>
                <p className="font-bold">Integrity</p>
                <p className="">
                  We uphold transparency, accountability, and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/banner-img.jpg"
            alt="Mission"
            width={1500}
            height={1500}
            className="w-auto"
          />
        </div>
      </section>
    </>
  );
}
