import './App.css'
import Header from './components/Header'
import ListInput from './components/ListInput'
import ListItem from './components/ListItem'
import { useState } from 'react'
import { v1 as uuidv1 } from 'uuid'

function App() {

  const [items, setItems] = useState([]);

  function addItems(item){
    setItems([...items, {id: uuidv1(), text: item}]);
  }

  function deleteItem(id){
    let filteredItem = (items.filter(items => items.id !== id));
    setItems(filteredItem);
  }

  return (
      <div className='app-container'>
        <Header/>
        <ListInput addItems={addItems}/>
        <ListItem items={items} deleteItem={deleteItem}/>
      </div>
    )
  }

export default App
