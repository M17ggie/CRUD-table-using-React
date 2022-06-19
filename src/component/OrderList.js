import { useState } from "react"
import EditRow from "./EditRow";

const OrderList = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);

    const showEditFormHandler = (e) => {
        e.preventDefault();
        setShowEditForm(true)
    }

    const hideEditFormHandler = () => {
        setShowEditForm(false)
    }

    const editedDataHandler = (editedData, rowId) => {
        // console.log(editedData)
        props.onEdit(editedData)
    }

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(data => {
                    return <tr key={Math.random().toString()}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.email}</td>
                        <td>{data.designation}</td>
                        <td><button onClick={() => { props.onDelete(data.id) }}>Delete</button></td>
                        <td><button onClick={showEditFormHandler.bind(this, data.id)}>Edit</button></td>
                    </tr>
                })}
            </tbody>
            {showEditForm && <EditRow onClose={hideEditFormHandler} onGetEditData={editedDataHandler} />}
        </table>
    </div>
}

export default OrderList