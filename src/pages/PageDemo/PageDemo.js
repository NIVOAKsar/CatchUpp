import React from 'react';

import styles from './PageDemo.module.scss';

import DemoSection from 'src/components/DemoSection';

import BaseButton from 'src/components/brand/BaseButton';
import ActionButton from 'src/components/brand/ActionButton';

import BaseImage from 'src/components/brand/BaseImage';

import MainAvatar from 'src/components/MainAvatar/MainAvatar';

import PostHeader from 'src/components/PostHeader';
import PostActions from 'src/components/PostActions';
import PostActivity from 'src/components/PostActivity';

import Comment from 'src/components/Comment';

function PageDemo() {
    return (
        <div className="p-5">
            <h2 className="mb-3 text-blue-600">Demo Page</h2>
            <div className="grid grid-cols-4 space-x-3">
                <section className="p-3 border border-solid col rounded">
                    <DemoSection title="Base Button">
                        <BaseButton>Click me</BaseButton>
                    </DemoSection>

                    <DemoSection title="Action Button">
                        <ActionButton
                            label="Like"
                            src="/src/assets/action-like.svg"
                        >
                            Click me
                        </ActionButton>
                    </DemoSection>
                </section>

                <section className="p-3 border border-solid rounded">
                    <DemoSection title="Base Image">
                        <BaseImage
                            width="200px"
                            src="http://via.placeholder.com/200x112"
                            aspectRatio={16 / 9}
                            useAspectRatio={true}
                        />
                    </DemoSection>

                    <DemoSection title="Avatar Image">
                        <MainAvatar
                            size={45}
                            src="http://via.placeholder.com/45"
                        />
                    </DemoSection>
                </section>

                <section className="p-3 border border-solid rounded">
                    {/* <h3 className="mb-3 underline">Feed</h3> */}

                    <DemoSection title="Post Header">
                        <PostHeader
                            avatar="http://via.placeholder.com/32"
                            author="lorem ipsum"
                            creationTime={Date.now()}
                        />
                    </DemoSection>

                    <DemoSection title="Post Actions">
                        <PostActions />
                    </DemoSection>

                    <DemoSection title="Post Activity">
                        <PostActivity likes={3} />
                    </DemoSection>

                    <DemoSection title="Comment">
                        <Comment />
                    </DemoSection>
                </section>

                <section className="p-3 border border-solid rounded">
                    <h3 className="mb-3 underline">...</h3>
                </section>
            </div>
        </div>
    );
}

export default PageDemo;
