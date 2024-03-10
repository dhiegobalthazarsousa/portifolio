import { Link } from 'react-router-dom';
import '../assets/css/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Card(props){
    return(
        <div className='flipper'>
            <div className="front">
                <span class="material-symbols-outlined icon">{props.icon}</span>
            </div>
            <div className="back">
                <Link to={props.route}>{props.name}</Link>
            </div>
        </div>
    );
}