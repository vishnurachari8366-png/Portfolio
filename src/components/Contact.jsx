export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white text-black py-24"
    >

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-blue-600 font-semibold">
          CONTACT
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-4">
          Let's work together.
        </h2>

        <p className="text-gray-600 mt-6 text-lg">
          Have a project or idea?
          Let's build something amazing.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
        >
          Say Hello →
        </a>

      </div>

    </section>
  )
}