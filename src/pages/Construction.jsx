import '../assets/css/index.css';
import image from '../assets/images/sobconstrucao.jpg';
export default function Construction(){
    return(
        <div className='flex-row-wrap align-items-center justify-center'>
            <img src={image} alt="" />
        </div>
    );
}