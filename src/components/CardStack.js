import { Link } from 'react-router-dom'
import Card from './Card';
import './CardStack.css'

const CardStack = ({ cards, setActiveCard }) => {

    const height = (cards.length * 40) + 200;

    return ( 
        <>
            <div className="card-stack" style={{height: `${height}px`}}>
                {cards.map((card, index) => (
                    <div className="card-in-stack" style={{top: `${40*index}px`}} key={index} >
                        <Card 
                            card={card}
                            cards={cards}
                            setActiveCard={setActiveCard}
                        />
                    </div>
                    ))}

            </div>
            <div className="button-container">
                <Link to="addCard">
                    <button className='add-card-button'>Add a new card</button>
                </Link>
            </div>
        </>
     );
}
 
export default CardStack;