"use client";
import { usePreview } from "../../utils/sanity.preview";
import BlogList from "./BlogList";
type Props = {
    query:string
}

export default function PreviewBlogList({query}: Props) {
  const posts = usePreview(null, query)
  console.log("posts...",posts)
  return <BlogList posts={posts}/>
}