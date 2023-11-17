import Button from "../Button/Button";
import './Form.scss'
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("React");
    const [color, setColor] = useState("");
    const [number, setNumber] = useState("");
    const [description, setDescription] = useState("");
    const [speed, setSpeed] = useState("");
    const [popularity, setPopularity] = useState("");
    const [source, setSource] = useState("");


    function printValueToConsole() {
        console.log(name, color, number, description, speed, popularity, source);
    }

    return (
        <>
            <section className="form">

                <div className="form__input">
                    <span className="form__input--text">Nome da Linguagem</span>
                    <input className="input"
                           placeholder="Nome da Linguagem"
                           value={name}
                           onChange={e => setName(e.target.value)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Cor Principal</span>
                    <input className="input" 
                           placeholder="Cor Principal"
                           value={color}
                           onChange={e => setColor(e.target.value)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Número</span>
                    <input className="input" 
                           placeholder="Número"
                           value={number}
                           onChange={e => setNumber(e.target.value)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Descrição</span>
                    <input className="input" 
                           placeholder="Descrição"
                           value={description}
                           onChange={e => setDescription(e.target.value)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Velocidade</span>
                    <input className="input" 
                           placeholder="Velocidade"
                           value={speed}
                           onChange={e => setSpeed(e.target.value)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Popularidade</span>
                    <input className="input" 
                           placeholder="Popularidade"
                           value={popularity}
                           onChange={e => setPopularity(e.target.value)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Logo</span>
                    <input className="input" 
                           placeholder="Source da imagem"
                           value={source}
                           onChange={e => setSource(e.target.value)}
                    ></input>
                </div>
                <Button buttonText="Criar" func={printValueToConsole}></Button>
            </section>
        </>
    )
}

export default Form;