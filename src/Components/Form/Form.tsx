import Button from "../Button/Button";
import './Form.scss'
import { useState } from "react";

interface FormProps {
    onChange: (data: any) => void
}

const Form = ({onChange}: FormProps) => {

    const [data, setData] = useState({
        name: "React",
        color: "cyan",
        number: "01",
        description: "React is a very popular JavaScript framework used to build modern web UI.",
        speed: "9.0",
        popularity: "9.0",
        source: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDataChange = (e:any) => {
        const { name, value} = e.target;

        if (name == "name" && value.length >= 16) { return; }

        setData (data => ({
            ...data,
            [name]: value,
        }))
    }

    // @ts-ignore
    onChange(data);

    return (
        <>
            <section className="form">

                <div className="form__input">
                    <span className="form__input--text">Nome da Linguagem</span>
                    <input className="input"
                           placeholder="Nome da Linguagem"
                           value={data.name}
                           name="name"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Cor Principal</span>
                    <input className="input" 
                           placeholder="Cor Principal"
                           value={data.color}
                           name="color"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Número</span>
                    <input className="input" 
                           placeholder="Número"
                           value={data.number}
                           name="number"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Descrição</span>
                    <input className="input" 
                           placeholder="Descrição"
                           value={data.description}
                           name="description"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Velocidade</span>
                    <input className="input" 
                           placeholder="Velocidade"
                           value={data.speed}
                           name="speed"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Popularidade</span>
                    <input className="input" 
                           placeholder="Popularidade"
                           value={data.popularity}
                           name="popularity"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>

                <div className="form__input">
                    <span className="form__input--text">Logo</span>
                    <input className="input" 
                           placeholder="Source da imagem"
                           value={data.source}
                           name="source"
                           onChange={e => handleDataChange(e)}
                    ></input>
                </div>
                <Button buttonText="Criar"></Button>
            </section>
        </>
    )
}

export default Form;