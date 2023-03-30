import React, { useState, useRef } from 'react'
import './MainContent.scss'
import Post from '../Post'

const createPosts = () => {
    return [
        {
            id: 1,
            name: 'post1'
        }
    ]
}

export default () => {
    const [posts, setPosts] = useState(createPosts())
    const elInput = useRef()

    // const postsToRender = () => {
    //     return posts.map(post => {
    //         return <li key={post.id}>{post.name}</li>
    //     })
    // }

    // const onChangeNameClick = () => {
    //     setPosts(() => {
    //         return posts.map(post => {
    //             return post.id === 1 ? { ...post, name: elInput.current.value } : post
    //         })
    //     })
    // }

    return (
        <section className="main-content">
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />
            <Post className="mb-xxl" />

        </section>
    )
}