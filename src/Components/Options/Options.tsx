import Button from '../Button/Button';
import './Options.scss';

const Options = () => {
    return (
        <>
            <div className="options">
                <div className="options__wrapper">
                    <Button buttonText="Salvar" icon="download"></Button>
                    <Button buttonText="Imprimir" icon="printerfill"></Button>
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