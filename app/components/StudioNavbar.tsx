import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

export default function StudioNavbar(props:any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#F7AB0A] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
                    Aller sur le site
                </Link>
              <div className="p-5 border border-[#F7AB0A] ">
                  <h3 className="text-2xl text-gray-50">The ultimate <span className="text-[#F7AB0A]">faster</span> nextjs</h3>
              </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}