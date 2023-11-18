import './Card.scss'
import Palette from './Palette.ts'

interface CardProps {
  data: any
}

const Card = ({ data }: CardProps) => {
  let chosenColor;

  chosenColor = Palette.filter((element: any) => element.color == data.color);
  chosenColor[0] === undefined ? chosenColor = Palette.filter((element: any) => element.color == "blue") : "";

  return (
    <>
      <section className="card__root" id="card">
        <div className="card__root--sub" style={{ background: chosenColor[0].foreground }}>
          <div className="card" style={{ background: chosenColor[0].main }}>
            <div className="card__inner" style={{ background: chosenColor[0].foreground }}>
              
              {/*  1 - Card ID  */}
              <div className="card__absolute">
                <span className="card__number" style={{ color: chosenColor[0].main }}>{data.number}</span>
              </div>

              {/*  2 - Card Logo  */}
              <div className="card__logo" style={{ background: `radial-gradient(at right top, ${chosenColor[0].mainSub}, transparent)` }}>
                <img src={data.source} alt={data.language + "'s Logo"} />
              </div>

              {/*  3 - Card Content / Info  */}
              <section className="card__content" style={{ background: chosenColor[0].foregroundSub }}>
                <div className="card__content--header">
                  <span className="card__language" style={{ color: chosenColor[0].title }}>{data.name}</span>
                  <span className="card__description">{data.description}</span>
                </div>

                <div className="card__content--attributes">
                  <div className="card__attribute" style={{ background: `linear-gradient(${chosenColor[0].main}77, ${chosenColor[0].mainSub})` }}>
                    <span className="card__attribute--category">Speed</span>
                    <span className="card__attribute--value" style={{ color: chosenColor[0].title }}>{data.speed}</span>
                  </div>
                  <div className="card__attribute" style={{ background: `linear-gradient(${chosenColor[0].main}77, ${chosenColor[0].mainSub})` }}>
                    <span className="card__attribute--category">Popularity</span>
                    <span className="card__attribute--value" style={{ color: chosenColor[0].title }}>{data.popularity}</span>
                  </div>
                </div>
                <div className="card__content--metadatas">
                  <span className="card__metadata">ID 18df1g19f1</span>
                  <span className="card__metadata">{Date.now()}</span>
                </div>

              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card;