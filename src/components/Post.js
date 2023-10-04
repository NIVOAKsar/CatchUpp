import React, { useEffect, useState } from "react";
import moment from "moment";
import { Status } from "../services/utils";

import styles from "./Post.module.scss";

import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import PostActivity from "./PostActivity";
import Comments from "./Comments";
import ContentSkeleton from './ContentSkeleton'

Post.defaultProps = {
    status: Status.Success,
    author: "Niv Saar",
    creationTime: "2 days ago",
    content:
        "content content content content content content content content content content ...",
    likesAmount: 12,
    comments: [],
    avatar: 'https://via.placeholder.com/40'
};

function Post(props) {

    // useEffect(() => {
    // }, [])

    const dateToPresent = () => {
        return moment(props.creationTime).format("dddd, DD MMMM YYYY [at] hh:mm");
    };

    function classesContainer() {
        return `${styles.post} ${props.className}`
    }

    function classesBody() {
        // ${styles['min-150']}
        return `${styles.post__body} ${styles["post-section"]} mb-md`
    }

    function classesSkeleton() {
        return `${styles['fade-in']} ${styles['h-150']} ${props.status === Status.Success && styles.hidden}`
    }

    function classesFooter() {
        return `${styles.post__footer} ${styles["post-section"]}`
    }

    return (
        <section className={classesContainer()}>
            <PostHeader className="mb-md" avatar={props.avatar} author={props.author} date={dateToPresent()} />
            <section className={classesBody()}>
                {props.status !== Status.Success ? <ContentSkeleton className={classesSkeleton()} /> : <p>{props.content}</p>}
                {/* <p>{props.content}</p> */}
                {/* <ContentSkeleton className={classesSkeleton()} /> */}
            </section>
            <section className={classesFooter()}>
                <PostActions />
                <div className={styles.post__footer__split} />
                <PostActivity />
            </section>
            <Comments className={styles["post-section"]} />
        </section>
    );
}

export default Post;
