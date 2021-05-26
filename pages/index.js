// next.js components 
import Head from 'next/head'

import { getAllCategoriesAndPosts } from '../lib/api'
import Container from '../components/container'
//custom components
import Layout, { siteTitle } from '../components/layout'
import Section from '../components/section'

//produces props.allPosts
export async function getStaticProps () {
    const allCategories = await getAllCategoriesAndPosts()

    return {
      props:{ allCategories }
    }
}

export default function Home({ allCategories }) {
  return (
      <Layout>
          <Head>
              <title>{siteTitle}</title>
          </Head>
          <Container>
        {
          allCategories.edges.map((edge, index) => {
              return (
                <Section name= {edge.node.name} posts={edge.node.posts} />
              )
          })
        }
        </Container>
      </Layout>
  )
}

