import Image from 'next/image'
import React from 'react'
import {useRouter}  from 'next/router'

export default function BlogCard({ article }) {
const router = useRouter()
    return (
        <div className='bg-gray-300 border-4 border-logo-color-100 m-3 rounded p-3 text-lg text-center'>
            <h3 >
                {/* <Image src={`http://localhost:1337${article.attributes.Image.data.attributes.formats.small.url}`} alt="blog image" height={309} width={550} /> */}
                <a className='no-underline text-gray-700 hover:text-logo-color' href="/" onClick={() => {router.push('/index.js')}}>
                    {article.attributes.Title}
                </a>
            </h3>
        </div>
    )
}

