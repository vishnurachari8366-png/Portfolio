export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center"
    >

      <div className="max-w-6xl mx-auto px-6 w-full">

        <p className="text-blue-500 text-lg mb-4">
          HELLO, I'M
        </p>

        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
          Vishnu
          <br />
          Acharya.
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl mt-6 max-w-2xl">
          Computer Science Engineering student building
          modern websites, applications and digital experiences.
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  )
}