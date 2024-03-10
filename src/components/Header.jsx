import '../assets/css/header.css';
import perfilImage from '../assets/images/perfil.jpg';
export default function Header(){
    return(
        <section class="cabecalho aside">
            <div class="perfil-container">
                <img class="of-fill" src={perfilImage} alt="" />
            </div>
            <div class="gap-15 flex-column align-items-center justify-center text-width-90 text-center">
                <h1>Dhiego Henrique Balthazar de Sousa</h1>
                <h2>Professor e Desenvolvedor Full Stack</h2>
                <h3>PHP | React | HTML | Javascript | CSS</h3>
                <p><span class="icon-med"><a href='https://www.linkedin.com/in/dhiego-balthazar/'><i class="devicon-linkedin-plain"></i></a></span></p>
            </div>
        </section>
    )
}