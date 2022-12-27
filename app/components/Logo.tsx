import Image from "next/image"


export default function Logo(props:any) {
    const {renderDefault,title} = props
  return (
    <div className="flex items-center space-x-2">
        <Image
            className="rounded-full object-cover"
            src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={50}
            height={50}
            alt="logo"
        />
        <>{renderDefault && renderDefault(props)}</>
    </div>
  )
}