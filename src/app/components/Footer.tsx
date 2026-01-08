import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* VOLUNTEER SECTION */}
      <section
        className="relative py-24 px-6 sm:px-12 lg:px-28 rounded-2xl overflow-hidden mt-28"
        style={{
          backgroundImage: "url('/images/banner-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#020A18]/50 w-full h-full absolute inset-0 rounded-2xl"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            You can contribute to provide a place for children with special
            needs
          </h2>
          <button className="bg-[#3322AA] text-white px-6 py-3 font-bold rounded-lg shadow hover:bg-[#3133EE] transition-all duration-300">
            Join as a Volunteer
          </button>
        </div>
      </section>

      <footer className="bg-[#10103C] text-white py-16 px-6 md:px-28 mt-28">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
          {/* Logo & Description */}
          <div className="flex-1 space-y-4">
            <div className="text-2xl font-bold text-white">
              Eagletech Foundation
            </div>
            <p className="text-white">
              Empowering communities through technology and innovation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold mb-2 md:hidden text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 text-white">
              <Link href="#home" className="">
                Home
              </Link>
              <Link href="#gallery" className="">
                Gallery
              </Link>
              <Link href="#about" className="">
                About Us
              </Link>
              <Link href="#volunteer" className="">
                Volunteer
              </Link>
              <Link href="#contact" className="">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-2 text-white">
              <div>
                <span className="font-medium">Phone: </span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <span className="font-medium">Email: </span>
                <a href="mailto:info@eagletech.org" className="text-white">
                  info@eagletech.org
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white hover:text-white transition"
                  >
                    {social}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#3322AA]/50 pt-6 text-center text-white text-sm">
          &copy; 2025 Eagletech Foundation. All rights reserved.
        </div>
      </footer>
    </>
  );
}
