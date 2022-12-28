

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Exercices quotidiens</h1>
            <h2 className="mt-5 md:mt-0">pour maintenir la  {" "}
                <span className="underline  decoration-4 decoration-[#F7AB0A]"> productivité</span>
                {" "} des développeurs
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          Planète Codeur est un petit blog qui publie des tutoriels utiles sur le développement web.
        </p>
    </div>
  )
}
