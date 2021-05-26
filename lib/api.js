const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllPostSlugs(){
    const data = await fetchAPI(`
query MyQuery {
			posts {
				edges {
				node {
					id
					slug
				}
				}
			}
		}
	`)
	return data?.posts
}

    export async function getAllPosts() {
	const data = await fetchAPI(`
query MyQuery {
			posts {
				edges {
				node {
					id
					title
				}
				}
			}
		}
	`)
	return data?.posts
}
export async function getAllCategoriesAndPosts(){
    const data = await fetchAPI(`
    query MyQuery {
        categories {
          edges {
            node {
              id
              name
              posts {
                edges {
                    node{
                        id 
                    title
                    slug
                    excerpt
                featuredImage {
                node {
                  altText
                  sourceUrl
                  mediaDetails {
                    height
                    width
                            }
                         }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
      
    `)
    return data?.categories 
}

export async function getSinglePostData(id){
    const data = await fetchAPI(`
    query MyQuery($id: ID!){
        post(id: $id, idType: URI) {
            id
            title
            slug
            content
            featuredImage {
                node {
                    altText
                    mediaDetails {
                        width
                        height
                    }
                    sourceUrl
                }
            }
            author {
                node {
                    id
                    name
                }
            }
        }
    }`, {
        variables: {
            "id" : id
        } 
    })
    return data?.post
}


