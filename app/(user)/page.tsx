import { previewData } from "next/headers"
import {groq} from 'next-sanity'
import { client } from "../../utils/sanity.client"
import PreviewSuspense from "../components/PreviewSuspense"
import PreviewBlogList from "../components/PreviewBlogList"
import BlogList from "../components/BlogList"


const query = groq`
 *[_type=="post"]{
    ...,
    author->,
    categories[] -> {
          title,
          description
  },
  } | order(_createdAt desc)
`

export default async function Homepage() {
  if(previewData()){
    return (
      <PreviewSuspense fallback={(<div role="status">
          <p className="text-lg text-center animate-pulse text-[#F7AB0A] ">Loading preview Data</p>
      </div>)}>
      <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }
  const posts = await client.fetch(query)
  return <BlogList posts={posts}/>
}