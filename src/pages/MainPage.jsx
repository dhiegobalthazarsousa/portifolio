import Header from '../components/Header';
import '../assets/css/main-page.css';
import CardsList from '../components/CardsList';

export default function MainPage(){
    return (
        <div class="flex-row full-screen">
            <Header />
            <CardsList />
        </div>
    )
}