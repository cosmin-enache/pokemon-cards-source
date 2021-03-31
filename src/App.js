import React, { Component, Fragment } from 'react'
import { PokemonCard } from './components/pokemon-card/pokemon-card.component.jsx'
import { PokemonBoard } from './components/pokemon-board/pokemon-board.component.jsx'
import { PokemonForm } from "./components/pokemon-form/pokemon-form.component.jsx"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            pokemon: [],
            searchExisting: ""
        };
    }
    componentDidMount() {
        // just read in all the pokemon you want to start with here
        const validPokemon = ["pikachu", "bulbasaur", "squirtle"];

        this.retrievePokemonCardData(validPokemon);
    }
    render() {
        const { pokemon, searchExisting } = this.state;
        const filteredPokemon = pokemon.reduce((a, n) => {
            if (n.name.toLowerCase().includes(searchExisting.toLowerCase())) {
                a.push(n);
            }
            return a;
        }, []);

        return (
            <Fragment>
                <PokemonForm
                    handleChange={(searchText) => this.setState(searchText)}
                    addPokemonToBoard={(pNameToAdd) => this.addPokemonToBoard(pNameToAdd)}
                />
                <PokemonBoard pokemon={filteredPokemon} />
            </Fragment>
        );
    }
    addPokemonToBoard(name) {
        this.retrievePokemonCardData([name.toLowerCase()]);
    }
    retrievePokemonCardData(validPokemon) {
        const { pokemon } = this.state;

        if (!operationIsValid()) return false;

        for (const pokemonEntry of validPokemon) {
            const success = getPokemonImgUrl.call(this, pokemonEntry);
        }

        return true;

        function operationIsValid() {
            try {
                if (validPokemon[0] == false) {
                    throw "Invalid pokemon name!";
                }
                if (pokemonAlreadyAdded()) {
                    throw "Pokemon already in list!";
                }
                return true;
            } catch (e) {
                alert(e);
            }
        }

        async function getPokemonImgUrl(pokemonName) {
            try {
                const baseSearchUrl = "https://pokeapi.co/api/v2/pokemon/";

                let secondUrl;

                await fetch(baseSearchUrl + pokemonName)
                .then(response => response.json())
                .then(data => secondUrl = data.forms[0].url);

                let imgUrl;

                await fetch(secondUrl)
                .then(response => response.json())
                .then(data => imgUrl = data.sprites.front_default);

                this.setState((prevState, prevProps) => {
                    const currentPokemonList = prevState.pokemon.slice();

                    const newPokemonData = {
                        name: capitalize(pokemonName),
                        imageUrl: imgUrl
                    };

                    currentPokemonList.push(newPokemonData);

                    return {pokemon: currentPokemonList}
                });
            } catch (e) {
                alert("Pokemon name invalid!");
                console.log("Error => " + e.message);
            }
        }

        // utility
        function capitalize(name) {
            return name.slice(0, 1).toUpperCase() + name.slice(1);
        }

        function pokemonAlreadyAdded() {
            return pokemon.reduce((a, v) => {
                if (v.name.toLowerCase() === validPokemon[0].toLowerCase()) {
                    a = true;
                }

                return a;
            }, false)
        }
    }
}

export default App;
