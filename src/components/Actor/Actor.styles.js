import styled from 'styled-components'

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3 {
        margin: 10px 0 0 0;
    }

    p {
        margin: 5px 0;
    }
`;

export const Image = styled.img`
    display: block;
    height: 80%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 15px;
`;