import CardStack from '../components/CardStack';
import Card from '../components/Card'
import Top from '../components/Top';
import { FaTrashAlt } from 'react-icons/fa'

const Home = ({ activeCard, cards, handleDelete, setActiveCard }) => {

    return ( 
        <>
            <Top headerTitle='E-WALLET' cardHeaderTitle="active card" />
            { cards.length > 0 ? <div className="active-card" >
                <FaTrashAlt className="delete-icon" onClick={handleDelete}/>
                <Card card={activeCard} cards={cards} setActiveCard={setActiveCard}  />
            </div> : 'No cards to display...'}
            <CardStack cards={cards} setActiveCard={setActiveCard} /> 
          
        </>
     );
}
 
export default Home;