import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pokemoncard from '../components/PokemonCard';

const PokemonsList = () => {

    const [pokemons, setpokemons] = useState([])

    useEffect(() => {
        let request = []

        for (let i = 1; i <= 100; i++) {
            request.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(({ data }) => data))
        }

        Promise.all(request).then(data => {
            setpokemons(data)
        })
    }, [])

    return (
        <Wrapper>
            {
                pokemons.map(({ name, sprites, id }) => {
                    return <Pokemoncard key={id} name={name} img={sprites.front_default} id={id} />
                })
            }
        </Wrapper>
    );
}

export default PokemonsList;

const Wrapper = styled.div`
    background-color: #894affb0;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
`;
