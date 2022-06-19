const OrderList = (props) => {

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
                {props.data.map(data=>{
                    return <tr key={Math.random().toString()}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.email}</td>
                        <td>{data.designation}</td>
                        <td><button onClick={()=>{props.onDelete(data.id)}}>Delete</button></td>
                        <td><button>Edit</button></td>
                    </tr>
                })}
            </tbody>
            { }
        </table>
    </div>
}

export default OrderList