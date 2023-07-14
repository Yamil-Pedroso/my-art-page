import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    `;

export const FavoritePic = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 1;
    `;

export const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 25rem;
    background-color: #4c4c4c;
    margin: .1rem;
    overflow: hidden;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }


    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;