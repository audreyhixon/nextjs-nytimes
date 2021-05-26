import Image from 'next/image'
import Link from 'next/link'

import Heading from './heading'


export default function Card( {node} ) {

    const {title, slug, featuredImage, excerpt} = node;

    const revisedSlug = `/news/${slug}`

    return(
        <div className="card">
            {
                featuredImage &&
                <Link href= {revisedSlug}>
                    <a>
                <Image
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
  
              />
              </a>
              </Link>

            }

            <Heading type="h3"> 
                <Link href= {revisedSlug}>
                    <a>
                    {title} 
                    </a>
                </Link>    
            </Heading>
        </div>
    )
}
