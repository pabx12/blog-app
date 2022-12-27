

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Dou conding Blog</h1>
            <h2 className="mt-5 md:mt-0">Welcome to {" "}
                <span className="underline  decoration-4 decoration-[#F7AB0A]">the best content</span>
                {" "}Upgrade your level
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant.
        </p>
    </div>
  )
}
