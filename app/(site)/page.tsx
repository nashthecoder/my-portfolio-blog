import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <div>
        
      </div>
      <h1 className="text-7xl font-extrabold">Naijeria 
        <span className="bg-gradient-to-r from-blue-400 via-white-500 to-purple-600 bg-clip-text text-transparent"> Toweett</span> 
      </h1>
      <p className="mt-3 text-xl text-blue-700 font-bold">Developer | Product Manager | QA Tester</p>

      <h2 className="mt-24 font-bold text-gray-500 text-3xl">My Dev Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-200 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image 
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg "
            />
          )}
            <div className="mt-2 font-extrabold text-gray-500 text-center">{project.name}</div>
        </Link>
      ))}
      </div>

    </div> 
  )
} 