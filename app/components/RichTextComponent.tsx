import PortableText from "react-portable-text"
import Link from "next/link"
import Image from "next/image"
import urlFor from "../../utils/urlFor"

export const  RichTextComponent = {
  types:{
    image:({value}:any)=>{
       return (
        <div>
            <Image 
                className="object-contain"
                src={urlFor(value).url()}
                alt="Post image"
                fill
            />
        </div>
       );
    }
  },
  list:{
    bullet:({children}:any) =>(
        <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number:({children}:any) =>(
        <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    )   
  },
  block:{
    h1:({children}:any)=>(
        <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2:({children}:any)=>(
        <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h3:({children}:any)=>(
        <h1 className="text-3xl py-10 font-bold">{children}</h1>
    ),
    h4:({children}:any)=>(
        <h1 className="text-2xl py-10 font-bold">{children}</h1>
    ),
    blockquote:({children}:any)=>(
        <blockquote className="border-l-brandColor border-l-4 pl-5 py-5 my-5">{children}</blockquote>
    )
  },
  marks:{
    link:({children, value}:any) =>{
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
        return <Link href={value.href} rel={rel} className="underline decoration-brandColor hover:decoration-black">
            {children}
        </Link>
    }
  }
}