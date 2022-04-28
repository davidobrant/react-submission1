import './AddCardForm.css';
import { useNavigate } from 'react-router-dom';


const AddCardForm = ({ setNewCard, addNewCard, cards }) => {

    const navigate = useNavigate();

    const checkValidInfo = () => {
        if(document.querySelector('[data-card-number]').value.length < 16) return false
        if(document.querySelector('[data-card-holder]').value === '') return false
        if(document.querySelector('[data-card-valid-thru]').value.length < 4) return false
        if(document.querySelector('[data-card-ccv]').value.length < 3) return false
        if(document.querySelector('[data-card-vendor]').value === '') return false
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!checkValidInfo()) return;
        addNewCard();
        navigate('/');
      }

    const updateNewCard = () => {
        const card = {
            cardId: cards.length ? cards[cards.length - 1].cardId + 1 : 1,
            cardNumber: document.querySelector('[data-card-number]').value,
            cardHolder: document.querySelector('[data-card-holder]').value.toUpperCase(),
            validThru: document.querySelector('[data-card-valid-thru]').value,
            CCV: document.querySelector('[data-card-ccv]').value,
            cardVendor: document.querySelector('[data-card-vendor]').value,
        }
        setNewCard(card)
    }

    return ( 
        <form className="add-card-form" onSubmit={handleSubmit}>
            <label htmlFor="cardNumber">card number</label>
            <input autoFocus type="text" placeholder='**** **** **** ****' name="cardNumber" maxLength="16" data-card-number onChange={(e) => updateNewCard("cardNumber", e.target.value)}/>
            <label htmlFor="cardholder">cardholder name</label>
            <input type="text" name="cardholder" placeholder='Enter name' data-card-holder onChange={(e) => updateNewCard("cardHolder", e.target.value)}/>
            <div className="card-info">
                <div className="valid">
                    <label htmlFor="valid-thru">valid thru</label>
                    <input maxLength="4" type="text" placeholder='MM/YY' name="valid-thru" data-card-valid-thru onChange={(e) => updateNewCard("cardValidThru", e.target.value)}/>
                </div>
                <div className="ccv">
                    <label htmlFor="ccv">ccv</label>
                    <input maxLength="3" type="text" placeholder='***' name="ccv" data-card-ccv onChange={(e) => updateNewCard("cardCCV", e.target.value)}/>
                </div>
            </div>
            <label htmlFor="vendor">vendor</label>
            <select name="vendor" id="vendor" data-card-vendor onChange={(e) => updateNewCard("cardVendor", e.target.value)}>
                <option value="">- Choose Bank -</option>
                <option value="bitcoin inc">Bitcoin</option>
                <option value="ninja bank">Ninja</option>
                <option value="block-chain inc">Block Chain</option>
                <option value="evil corp">Evil Corp</option>
            </select>
            <button>ADD CARD</button>            
        </form>
     );
}
 
export default AddCardForm;