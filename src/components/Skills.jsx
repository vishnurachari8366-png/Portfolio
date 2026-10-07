export default function Skills() {

  const skills = [
    "Java",
    "C++",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Node.js"
  ]

  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 font-semibold">
          SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-10">
          Technologies I use
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white px-6 py-4 rounded-xl border border-gray-200 font-medium hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}