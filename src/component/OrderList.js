import { useState } from "react"
import EditRow from "./EditRow";

const OrderList = (props) => {

    const [editingId, setEditingId] = useState();

    const [sort, setSort] = useState('ASC')

    const showEditFormHandler = (id) => {
        // setShowEditForm(true);
        setEditingId(id)
    }

    const hideEditFormHandler = () => {
        // setShowEditForm(false)
        setEditingId(null)
    }

    const editedDataHandler = (editedData) => {
        // console.log(editedData)
        const listIndex = props.data.findIndex(item => item.id === editingId);
        props.data[listIndex] = editedData
        props.onEdit(editedData)
        console.log(props.data)
        // console.log(editedData, 'Edited Data');
    }

    //sorting data
    const sortHandler = (column) => {
        if (sort === 'ASC') {
            const sortData = [...props.data].sort((a, b) => (
                a[column] > b[column] ? 1 : -1
            ))
            props.onSortData(sortData);
            setSort('DSC')
        }
        if (sort === 'DSC') {
            const sortData = [...props.data].sort((a, b) => (
                a[column] < b[column] ? 1 : -1
            ))
            props.data = sortData;
            setSort('ASC')
        }
    }

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Id&nbsp;&nbsp;<span onClick={sortHandler('id')}>&#8645;</span></th>
                    <th>Name&nbsp;&nbsp;<span onClick={sortHandler('name')}>&#8645;</span></th>
                    <th>Age&nbsp;&nbsp;<span onClick={sortHandler('age')}>&#8645;</span></th>
                    <th>Email&nbsp;&nbsp;<span onClick={sortHandler('email')}>&#8645;</span></th>
                    <th>Designation&nbsp;&nbsp;<span onClick={sortHandler('designation')}>&#8645;</span></th>
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
            {editingId && <EditRow onClose={hideEditFormHandler} onGetEditData={editedDataHandler} />}
        </table>
    </div>
}

export default OrderList