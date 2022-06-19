import { useState } from 'react';
import Modal from '../UI/Modal';
import styles from './NewOrderForm.module.css'

const NewOrderForm = (props) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');

    const idHandler = (e) => {
        setId(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const ageHandler = (e) => {
        setAge(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const designationHandler = (e) => {
        setDesignation(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const newData={
            id: +id,
            name: name,
            email: email,
            age: +age,
            designation: designation
        }

        props.onGetNewData(newData);
        setName('')
        setEmail('')
        setAge('')
        setDesignation('')
    }

    return <Modal onClose={props.onClose}>
        <form className={styles['form-control']} onSubmit={formSubmitHandler}>
            <div className={styles['form-control-elements']}>
                <label htmlFor='id'>
                    Id:
                    <input type='number' id='id' value={id} onChange={idHandler} />
                </label>
            </div>
            <div className={styles['form-control-elements']}>
                <label htmlFor='name'>
                    Name:
                    <input type='text' id='name' value={name} onChange={nameHandler} />
                </label>
            </div>
            <div className={styles['form-control-elements']}>
                <label htmlFor='age'>
                    Age:
                    <input type='number' id='age' value={age} onChange={ageHandler} />
                </label>
            </div>
            <div className={styles['form-control-elements']}>
                <label htmlFor='email'>
                    Email:
                    <input type='email' id='email' value={email} onChange={emailHandler} />
                </label>
            </div>
            <div className={styles['form-control-elements']}>
                <label htmlFor='designation'>
                    Designation:
                    <input type='text' id='designation' value={designation} onChange={designationHandler} />
                </label>
            </div>
            <div className={styles['form-actions']}>
                <button>Add</button>
            </div>
            <div className={styles['form-actions']}>
                <button onClick={props.onClose}>Close</button>
            </div>
        </form>
    </Modal>
}

export default NewOrderForm