import { useNavigate } from "react-router-dom"

// import styles from './PageTest.module.scss'

function PageTest() {

    const navigate = useNavigate();

    function onBtnClick() {
    }

    return (
        <div>
            <h1>Test Page</h1>
            <button onClick={onBtnClick}>Click Me!!</button>

        </div>
    )
}


export default PageTest