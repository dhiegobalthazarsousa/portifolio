import Card from "./Card";

export default function CardsList(){
    return(
        <div className="content flex-row-wrap padding-15 gap-15 justify-center wrap-center">
            <Card name="contato" route="/contato"  icon="contact_emergency" />
            <Card name="sobre mim" route="/sobre-mim" icon="sentiment_satisfied"/>
            <Card name="formação" route="/formacao" icon="school" />
            <Card name="experiência profissional" route="/experiencia" icon="business_center" />
            <Card name="projetos" route="/projetos" icon="sdk" />
        </div>
    );
}