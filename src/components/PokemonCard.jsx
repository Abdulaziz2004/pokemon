import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Pokemoncard = ({ img, name, id }) => {
    return (
        <StyledLink to={`/pokemons/${id}`}>
            <img src={img} alt=""></img>
            <div className="text">
                <p>{name}</p>
            </div>
        </StyledLink>
    );
}

export default Pokemoncard;

const StyledLink = styled(Link)`
    width: 100%;
    background-color: #894affda;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    border: 2px solid white;

    :hover {
        transform: translateY(-15px);
    }

    img {
        display: block;
        margin: auto;
    }

    .text {
        width: 100%;
        height: 40%;
        background-color: #6a19ff;
        padding-top: 20px;
        padding-bottom: 12px;
        border-radius: 0 0 10px 10px;

        p {
            text-align: center;
            font-weight: bold;
            font-size: 24px;
            color: white;
            text-transform: capitalize;
        }
    }
`;
