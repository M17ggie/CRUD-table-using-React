import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        {props.children}
        </div>
}

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('modal'))}
        {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, document.getElementById('modal'))}
    </Fragment>
}

export default Modal