export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-xl font-bold text-white">
          Vishnu<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-400">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}