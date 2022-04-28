import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home';
import AddCard from "./Views/AddCard";
import { useState, useEffect } from 'react';


function App() {

  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("credCards")) || []);
  const [newCard, setNewCard] = useState();
  const [activeCard, setActiveCard] = useState();
    
  const addNewCard = () => {
    setCards([...cards, newCard]);
    setNewCard();
  }

  const handleDelete = () => {
    const newCards = cards.filter(card => card.cardId !== activeCard.cardId )
    setCards(newCards)
    setActiveCard(cards[0])
  }
  
  useEffect(() => {
    setActiveCard(cards[0])
    localStorage.setItem("credCards", JSON.stringify(cards))
  }, [cards])
  

  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home activeCard={activeCard} cards={cards} setActiveCard={setActiveCard} handleDelete={handleDelete}/>}></Route>
          <Route path='/addcard' element={<AddCard newCard={newCard} setNewCard={setNewCard} addNewCard={addNewCard} cards={cards} />}></Route>
        </Routes>  
      </div>
  );
}

export default App;
