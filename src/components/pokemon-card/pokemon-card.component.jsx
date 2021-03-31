import { Col } from "react-bootstrap"

export const PokemonCard = ({ name, src }) => {
    return (
        <Col xs={12} md={6} lg={4}>
            <article className="pokemon-card">
                <div className="img-container">
                    <img alt={name} src={src} />
                </div>
                <h2 className="font-weight-normal">{name}</h2>
            </article>
        </Col>
    );
}
