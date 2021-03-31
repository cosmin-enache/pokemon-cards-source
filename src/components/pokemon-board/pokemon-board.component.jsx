import React, { Component, Fragment } from 'react';
import { PokemonCard } from '../pokemon-card/pokemon-card.component.jsx';
import { Container, Row } from "react-bootstrap"

export class PokemonBoard extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <Container className="pokemon-board">
                <Row>
                    {this.generatePokemonCards()}
                </Row>
            </Container>
        );
    }
    generatePokemonCards() {
        return this.props.pokemon.reduce((a, pokemon, i) => {
            a.push(
                <PokemonCard key={i} name={pokemon.name}
                             src={pokemon.imageUrl} />
            );
            return a;
        }, []);
    }
}
