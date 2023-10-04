import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './PageTest.module.scss';
import BaseButton from 'src/components/brand/BaseButton';
import BaseImage from 'src/components/brand/BaseImage';
import MainAvatar from 'src/components/MainAvatar';

function PageTest() {
    return (
        <div className="p-5 grid grid-cols-4 ">
            <section className="p-3 border border-solid col">
                <h3 className="mb-3 underline">Buttons</h3>

                <BaseButton className="mb-3 ">Click me</BaseButton>
            </section>

            <section className="p-3 border border-solid">
                <h3 className="mb-3 underline">Images</h3>
                <BaseImage
                    width="200px"
                    src="http://via.placeholder.com/200x112"
                    aspectRatio={16 / 9}
                    useAspectRatio={true}
                    className="mb-3"
                />
                <MainAvatar size={45} src="http://via.placeholder.com/45" />
            </section>

            <section className="p-3 border border-solid">
                <h3 className="mb-3 underline">...</h3>
                <div className="bg-blue-200 px-3 py-2 flex justify-center items-center mb-3">
                    <div className="border border-solid">border</div>
                </div>
            </section>

            <section className="p-3 border border-solid">
                <h3 className="mb-3 underline">...</h3>
            </section>
        </div>
    );
}

export default PageTest;
