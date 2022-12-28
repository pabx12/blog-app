import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
    url:string
}

export default function PostContainer({children ,url}: Props) {
  return (
    <Link href={url}>
        {children}
    </Link>
  )
}