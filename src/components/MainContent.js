import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import styles from './MainContent.module.scss'
import Post from './Post'
import postsService from '../services/posts'

MainContent.defaultProps = {

}

function MainContent() {
    const [posts, setPosts] = useState([])
    const elInput = useRef()

    const loadPosts = async () => {
        const data = await postsService.getPosts()
        setPosts(() => data)
        console.log(data);
    }

    useEffect(() => {
        loadPosts()
    }, [])


    const postsToRender = () => {
        return posts.map((post, idx) => {
            return <Post avatar={post.avatar} content={post.content} author={post.fullName} creationTime={post.createdAt} className="mb-xl" key={idx} />
        })
    }

    // const onChangeNameClick = () => {
    //     setPosts(() => {
    //         return posts.map(post => {
    //             return post.id === 1 ? { ...post, name: elInput.current.value } : post
    //         })
    //     })
    // }

    return (
        <section className={styles['main-content']}>
            {postsToRender()}
        </section>
    )
}

export default MainContent

