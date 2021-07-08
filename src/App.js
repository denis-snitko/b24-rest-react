import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const bx24TasksMethod = 'tasks.task.list'
  const urlTasks = `https://b24-d0giie.bitrix24.by/rest/1/oahjl5287vpqugyg/${bx24TasksMethod}`
  
  const getData = () => {
    axios
    .get(urlTasks)
    .then((response) => {
      console.log(response.data.result)
    })
  }
  
  const bx24DealMethod = 'crm.deal.add'
  const url = `https://b24-d0giie.bitrix24.by/rest/1/oahjl5287vpqugyg/${bx24DealMethod}`
  const data = {
    fields: {
      TITLE: 'Сделка отправлddddddена bla ',
      OPPORTUNITY: '50333',
    },
  }

  const sendData = () => {
    axios.post(url, data)
    .then((response) => {
      console.log(response.status)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='App'>
      <button onClick={getData}>Получить</button>
      <button onClick={sendData}>Отправить</button>
      <hr />
    </div>
  )
}

export default App
