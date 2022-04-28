import Top from "../components/Top";
import Card from '../components/Card'
import AddCardForm from "../components/AddCardForm";

const AddCard = ({ newCard, setNewCard, addNewCard, cards }) => {

    return ( 
        <>
            <Top headerTitle="ADD A NEW BANK CARD" cardHeaderTitle="new card"/>
            <Card card={newCard}/>
            <AddCardForm setNewCard={setNewCard} addNewCard={addNewCard} cards={cards} />
        </>
     );
}
 
export default AddCard;