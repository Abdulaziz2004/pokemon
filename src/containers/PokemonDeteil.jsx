import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Pokemondeteil = () => {

    const { id } = useParams()
    const [detail, setdetail] = useState({})
    const navigate = useNavigate()

    const navigator = (direction) => {
        if (direction === "left" && Number(id) !== 1) {
            navigate(`/pokemons/${id - 1}`)
        }

        else if (direction === "right") {
            navigate(`/pokemons/${Number(id) + 1}`)
        }
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({ data }) => {
            setdetail(data)
        })
    }, [id])

    return (
        <Wrapper currentPage={id}>
            <Modal key={Math.random()}>
                <img src={detail.sprites?.front_default} alt="" />
                <p>{detail.name}</p>

                <div className="stats">
                    {detail.stats?.map(({ base_stat, stat }) => {
                        return (
                            <div className="stat" key={Math.random()}>
                                <div className='name'>{stat?.name}</div>
                                <Bar progress={base_stat}>
                                    <div className="progress"></div>
                                </Bar>
                            </div>
                        )
                    })}
                </div>

                <span className='navigator left' onClick={() => navigator("left")}>-</span>
                <span className='navigator right' onClick={() => navigator("right")}>+</span>
            </Modal>
        </Wrapper>
    );
}

export default Pokemondeteil;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #6f3ecae4;

    .navigator {
        font-size: 32px;
        font-weight: 900;
        color: whitesmoke;
        position: relative;
        top: 50%;
        transform: translate(-50%);
        cursor: pointer;
        user-select: none;

        :active {
            color: #f5f5f57a;
        }

        &.left {
            color: ${({ currentPage }) => currentPage === "1" ? "#ff00003e" : "#fff"};
            position: absolute;
            left: -50px;
        }

        &.right {
            position: absolute;
            right: -70px;
        }
    }

`;

const Modal = styled.div`
    width: 300px;
    height: 65%;
    border-radius: 10px;
    background-color: #6f48b9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 20px;
    animation: fadeIn 0.5s 1;
    border: 2px solid white;

    @keyframes fadeIn {
        0% {
            opacity: 0;
            top: 53%;
        }

        50% {
            opacity: 0;
        }

        90% {
            top: 53%;
        }

        100% {
            opacity: 1;
            top: 50%;
        }
    }

    img {
        display: block;
        margin: auto;
        width: 200px;
        animation: jump 2s infinite alternate;
    }

    @keyframes jump {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(-10px);
        }
    }

    p {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        text-transform: capitalize;
        color: whitesmoke;
    }

    .stat {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 5px 0;

        .name {
            width: 70px;
            color: whitesmoke;
            border-right: 2px solid white;
        }
    }
`;

const Bar = styled.div`
    width: calc(100% - 60px);
    background-color: #2bc5eb45;
    height: 8px;
    display: flex;
    align-items: center;
    border-radius: 2px;

    .progress {
        width: ${({ progress }) => progress + "%"};
        height: 6px;
        margin-left: 1px;
        background-color: #2bc5eb;
        border-radius: 2px;
        animation: grow 1s;

        @keyframes grow {
            0% {
                width: 0;
            }
        }
    }
`;
