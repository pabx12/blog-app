import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image
                            className="rounded-full object-cover"
                            src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    </Link>
                    <h1>Planète Codeur</h1>
            </div>
            <div>
                    <Link href="signin" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
                            Rejoindre Le Groupe
                    </Link>
            </div>
    </header>
  )
}
