import Button from '../Button/Button';
import './Options.scss';
import html2canvas from "html2canvas";

const Options = () => {

    const printCard = () => {
        // @ts-ignore
        html2canvas(document.getElementById("card"), {
            imageTimeout: 1500,
            useCORS: true,
            scale:3,
            backgroundColor: "#00000000",
        }).then(function(canvas) {
            let image = document.createElement("a");
            image.download = `card-${Date.now()}.png`;
            image.href = canvas.toDataURL();
            image.click();
        });
    }

    return (
        <>
            <div className="options">
                <div className="options__wrapper">
                    <button className="button" onClick={printCard}>Salvar</button>
                    <Button buttonText="Imprimir" icon="printerFill"></Button>
                </div>
                <div className='copyright'>
                    <span className='copyright--text'>Copyright © 2023</span>
                    <span className='copyright--text'>Feito por Iago de Oliveira</span>
                </div>
            </div>
        </>
    )
}

export default Options;