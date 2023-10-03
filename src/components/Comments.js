import React from 'react'
import { printObject } from "../services/utils";

import styles from './Comments.module.scss'

import Comment from './Comment'

Comments.defaultProps = {

}

function Comments(props) {

    return (
        <section className={`${styles.post__comments} ${props.className}`}>
            {/* Comments ... {printObject(props.comments)} */}

            <Comment className="mb-md" />
            {/* <Comment className="mb-md" /> */}
            {/* <Comment className="mb-md" /> */}

        </section>
    )
}

export default Comments