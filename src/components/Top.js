import { Link } from "react-router-dom";

const Top = ({ headerTitle, cardHeaderTitle }) => {
    return ( 
        <header className="top-header">
            <Link to="/">Home</Link>
            <Link to="/addcard">AddCard</Link>
            <h1>{headerTitle}</h1>
            <div className="card-header">
                <h5>{cardHeaderTitle}</h5>
        </div>
        </header>
     );
}
 
export default Top;