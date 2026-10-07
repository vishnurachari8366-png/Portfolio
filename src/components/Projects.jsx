export default function Projects() {
  const projects = [
    {
      title: "EV Charging Station",
      description:
        "A web application to find and book electric vehicle charging stations.",
      tech: "HTML • CSS • JavaScript • Express",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Student Money Tracker",
      description:
        "A student application for tracking expenses and saving habits.",
      tech: "React • JavaScript • Tailwind CSS",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Groundwater Dashboard",
      description:
        "An IoT dashboard for monitoring groundwater level and water quality.",
      tech: "IoT • ESP32 • Firebase",
      image:
        "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <section
      id="projects"
      className="bg-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-500 font-semibold">
          PROJECTS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-12">
          Things I've built.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-500 hover:-translate-y-2 transition"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <p className="text-blue-400 text-sm mt-6">
                  {project.tech}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}