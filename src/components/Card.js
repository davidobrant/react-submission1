import './Card.css'
import chipLight from '../assets/chip-light.svg';
import chipDark from '../assets/chip-dark.svg';
import Bitcoin from '../assets/vendor-bitcoin.svg';
import Blockchain from '../assets/vendor-blockchain.svg';
import Evil from '../assets/vendor-evil.svg';
import Ninja from '../assets/vendor-ninja.svg';

const Card = ({ card, cards, setActiveCard }) => {

    const handleClick = () => {
        setActiveCard(cards.find(c => c.cardId === card.cardId))
    }

    let chipType = '';
    let cardVendor = '';
    let cardBackground = '';
    let cardTextColor = '';
    
    switch(card.cardVendor) {
        case 'bitcoin inc':
            cardVendor = Bitcoin;
            chipType = chipDark;
            cardBackground = 'linear-gradient(to right, #ffb13c, #ffb950)';
            cardTextColor = '#111';
            break;
        case 'block-chain inc':
            cardVendor = Blockchain;
            chipType = chipLight;
            cardBackground = 'linear-gradient(to right, #8655ef, #774bd5)';
            cardTextColor = '#fafafa';
            break;
        case 'evil corp':
            cardVendor = Evil;
            chipType = chipLight;
            cardBackground = 'linear-gradient(to right, #2b2b2b, #424242)';
            cardTextColor = '#fafafa';
            break;
        case 'ninja bank':
            cardVendor = Ninja;
            chipType = chipLight;
            cardBackground = 'linear-gradient(to right, #ef3254, #d22c49)';
            cardTextColor = '#fafafa';
            break;
        default: 
            chipType = chipDark;
            cardBackground = 'linear-gradient(to right, #d3d3d3, #dadada)';
    }

    return ( 
        <>
        <div className="card" onClick={handleClick} style={{ background: cardBackground, color: cardTextColor }}>
            <div className="card-top">
                <div className="card-chip">
                    {<img src={chipType} alt="chip" />}
                </div>
                <div className="vendor-logo">
                    {cardVendor && <img src={cardVendor} alt="vendor" />}
                </div>
            </div>
            <div className="cardNumber">
                <span className="cardNumberPiece">{card.cardNumber.slice(0,4)}</span>
                <span className='cardNumberPiece'>{card.cardNumber.slice(4,8)}</span>
                <span className='cardNumberPiece'>{card.cardNumber.slice(8,12)}</span>
                <span className='cardNumberPiece'>{card.cardNumber.slice(12, 16)}</span>
            </div>
            <div className="card-bottom">
                <div className="cardHolder">
                    <span style={{ color: cardTextColor }}>cardholder name</span>
                    <p>{card.cardHolder}</p>
                </div>
                <div className="valid-thru">
                    <span style={{ color: cardTextColor }}>valid thru</span>
                    <p>{card.validThru.slice(0,2) + '/' + card.validThru.slice(2,4)}</p>
                </div>
            </div>
        </div>
        </>
     );
}

Card.defaultProps = {
    card: {
            cardChip: chipDark,
            cardVendor: Bitcoin,
            cardNumber: 'XXXXXXXXXXXXXXXX',
            cardHolder: 'Firstname Lastname',
            validThru: 'MMYY',
            ccv: '***'
        }

}
 
export default Card;