import './Card.scss'

interface CardProps {
    language?: string,
    color?: string,
    number?: string,
    description?: string,
    speed?: string,
    popularity?: string,
    source?: string,
}

const Card = ({language, color, number, description, speed, popularity, source}:CardProps) => {
    return (
        <>
            <section className="card__root">
                <div className={"card" /*+ " " + color + "__background--900"*/}>
                        <div className="card__inner">
                            <div className="card__absolute">
                                <span className="card__number">{number}</span>
                                <span>{color}</span>
                            </div>
                            <div className="card__logo">
                                <img src={source} alt={language + "'s Logo"} />
                            </div>
                            <section className="card__content">
                                <div className="card__content--header">
                                    <span className="card__language">{language}</span>
                                    <span className="card__description">{description}</span>
                                </div>
                                <div className="card__content--attributes">
                                    <div className="card__attribute">
                                        {speed}
                                    </div>
                                    <div className="card__attribute">
                                        {popularity}
                                    </div>
                                </div>
                                <div className="card__content--info"></div>
                            </section>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Card;