import React, { useState } from "react";

import "./App.css";
import NewOrderForm from "./components/NewOrderForm";
import OrderList from "./components/OrderList";
import Sort from "./components/Sort";

const data = [
  {
    id: 1,
    name: 'Black cat',
    age: 45,
    email: 'black@blackie.com',
    designation: 'Web Developer'
  },
  {
    id: 2,
    name: 'Raj',
    age: 17,
    email: 'raj@raju.com',
    designation: 'Front-end Developer'
  },
  {
    id: 3,
    name: 'Danny',
    age: 23,
    email: 'danny@daniella.com',
    designation: 'Cyber security'
  },
]

function App() {

  const [detail, setDetail] = useState(data)
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true)
  }

  const hideModalHandler = () => {
    setShowModal(false)
  }

  const getDataHandler = (enteredData) => {
    setDetail(prevData => [...prevData, enteredData]);
  }

  const deleteRowHandler = (rowId) => {
    setDetail(prevData => prevData.filter(order => order.id != rowId))
  }

  const editRowHandler = (editData) => {
    setDetail(x => x.map(data => {
      if (data.id === editData.id) {
        return editData;
      }
      return data;
    }))
  }

  return (
    <div className="App">
      <Sort />
      <OrderList data={detail} onDelete={deleteRowHandler} onEdit={editRowHandler} />
      <button onClick={showModalHandler}>Add</button>
      {showModal && <NewOrderForm onGetNewData={getDataHandler} onClose={hideModalHandler} />}
    </div>
  )
}

export default App;
