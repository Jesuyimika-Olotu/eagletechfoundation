import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="bg-[#F8F6FE] pt-16 sm:pt-24 px-6 sm:px-12 lg:px-28">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-16 bg-[#3322AA]"></div>
        <p className="text-[#3322AA] font-semibold uppercase tracking-wider text-sm sm:text-base">
          Get in Touch
        </p>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020A18] mb-12 max-w-4xl">
        Contact Us for Any Inquiry
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <p className="text-[#020A18]/80">
            Fill out the form below to get in touch with us.
          </p>

          <form className="space-y-4">
            <div>
              <label
                className="block text-[#020A18] font-semibold mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-[#3322AA]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3322AA] focus:outline-none transition"
              />
            </div>

            <div>
              <label
                className="block text-[#020A18] font-semibold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-[#3322AA]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3322AA] focus:outline-none transition"
              />
            </div>

            <div>
              <label
                className="block text-[#020A18] font-semibold mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                className="w-full border border-[#3322AA]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3322AA] focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#3322AA] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#3133EE] transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
          <div className="bg-[#F8F6FE] p-6 rounded-2xl shadow-lg border border-[#3322AA]/20">
            <h2 className="text-xl font-bold text-[#020A18] mb-2">Email Us</h2>
            <p className="text-[#020A18]/80">contact@eagletechfoundation.org</p>
          </div>

          <div className="bg-[#F8F6FE] p-6 rounded-2xl shadow-lg border border-[#3322AA]/20">
            <h2 className="text-xl font-bold text-[#020A18] mb-2">Call Us</h2>
            <p className="text-[#020A18]/80">+123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
