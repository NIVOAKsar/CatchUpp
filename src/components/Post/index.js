import React from "react";
import './Post.scss'
import ActionLike from '../../assets/action-like.svg'
import ActionComment from '../../assets/action-comment.svg'
import ActionShare from '../../assets/action-share.svg'


export default (props) => {
    console.log(props);
    return (
        <section className={`post ${props.className}`}>
            <section className="post__header post-section" >
                <img src="https://via.placeholder.com/35" className="post__header__avatar" />
                <div className="post__header__texts">
                    <p className="post__header__texts__name">Niv Saar</p>
                    <p className="post__header__texts__time">2 days ago</p>
                </div>

            </ section>
            <section className="post__body post-section">
                <p>description description description description description description description description description description description description description description description description description description description description description</p>
            </section>
            <section className="post__footer post-section">
                <div className="post__footer__actions">
                    <button className="post__footer__actions__item">
                        <img className="post__footer__icon" src={ActionLike} />
                        <span>Like</span>
                    </button>
                    <button className="post__footer__actions__item">
                        <img className="post__footer__icon" src={ActionComment} />
                        <span>Comment</span>
                    </button>
                    <button className="post__footer__actions__item">
                        <img className="post__footer__icon" src={ActionShare} />
                        <span>Share</span>
                    </button>
                </div>
                <div className="post__footer__split" />
                <div className="post__footer__activity">300 Likes</div>
            </section>
            <section className="post__comments post-section">
                Comments ...
            </section>

        </section >
    )
}