import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { cn } from 'src/utils/merge-css';
import postsService from 'src/services/posts';

import styles from './ControllerFeed.module.scss';

import Post from 'src/components/Post';

ControllerFeed.defaultProps = {};

function ControllerFeed() {
  const [posts, setPosts] = useState([]);
  const elInput = useRef();

  function classesContainer() {
    return cn(styles['controller-feed'], 'px-80 py-5');
  }

  const loadPosts = async () => {
    const data = await postsService.getPosts();
    setPosts(() => data);
    console.log(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const postsToRender = () => {
    return posts.map((post, idx) => {
      return (
        <Post
          avatar={post.avatar}
          content={post.content}
          author={post.fullName}
          creationTime={post.createdAt}
          className="mb-xl"
          key={post.id}
        />
      );
    });
  };

  // const onChangeNameClick = () => {
  //     setPosts(() => {
  //         return posts.map(post => {
  //             return post.id === 1 ? { ...post, name: elInput.current.value } : post
  //         })
  //     })
  // }

  return <section className={classesContainer()}>{postsToRender()}</section>;
}

export default ControllerFeed;
