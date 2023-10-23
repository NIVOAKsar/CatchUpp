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
            <ActionButton label="Like" src="/src/assets/action-like.svg">
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
            <MainAvatar size={45} src="http://via.placeholder.com/45" />
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
          <h3 className="mb-3 underline">DaisyUI</h3>
          <DemoSection title="Card">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </DemoSection>
          <DemoSection title="Card">
            <button
              className="btn"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </DemoSection>

          <DemoSection title="Button">
            <button className="btn">Button</button>
          </DemoSection>
        </section>
      </div>
    </div>
  );
}

export default PageDemo;
