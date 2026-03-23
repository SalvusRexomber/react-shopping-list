import './App.css'
import Header from './components/Header'
import ListInput from './components/ListInput'
import ListItem from './components/ListItem'
import { useState } from 'react'

function App() {

  const [items, setItems] = useState([]);

  function addItems(item){
    setItems([...items, item]);
  }

  return (
      <div className='app-container'>
        <Header/>
        <ListInput addItems={addItems}/>
        <ListItem items={items}/>
      </div>
    )
  }

export default App
