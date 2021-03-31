import React, { Fragment } from "react";
import { Button, Form, FormControl, InputGroup} from "react-bootstrap"

export function PokemonForm({ handleChange, addPokemonToBoard }) {
    const handleClick = () => {
        const addNameValue = document.querySelector("#add-pokemon-input").value;

        addPokemonToBoard(addNameValue);
    }

    const handleInputChange = e => {
        handleChange({searchExisting: e.target.value});
    }

    return (
        <Fragment>
            <Form.Control
                type="search"
                className="text-input"
                placeholder="Search Pokemon"
                onChange={handleInputChange}
            />
            <InputGroup className="mb-3 text-input">
                <FormControl
                  id="add-pokemon-input"
                  placeholder="Add pokemon to list EG: Wartortle"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button
                      variant="primary"
                      onClick={handleClick}
                  >Add Pokemon</Button>
                </InputGroup.Append>
            </InputGroup>
        </Fragment>
    );
}
