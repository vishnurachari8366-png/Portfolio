export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-8">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">

        <p>
          © 2026 Vishnu Acharya
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  )
}