import Layout from '../../components/layout'
import Image from 'next/image'
import Container from '../../components/container'

import { getAllPostSlugs, getSinglePostData } from '../../lib/api'

export async function getStaticPaths () {
    const allPostSlugs = await getAllPostSlugs()

    const paths = allPostSlugs.edges.map((edge) => {
        const { slug } = edge.node
        return{
            params:{
                id:slug
            }
        }
    })
    return {
        paths,
        fallback:false 
    }
}

export async function getStaticProps({ params }) {
    const singlePostData = await getSinglePostData(params.id)

    return{
        props: {
            singlePostData
        }
    }
}

export default function SingleNews({singlePostData}) {
   
    const{ title, content, author, featuredImage} = singlePostData;
   
    return(
        <Layout>
            <Container>
            {
                featuredImage &&
                <Image
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
             />
            }
             <h1>{title}</h1>
             <h2> {author.node.name}</h2>
            <div dangerouslySetInnerHTML= {{__html: content }}/>
            </Container>
        </Layout>
    )
}