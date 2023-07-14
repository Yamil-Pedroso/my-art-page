import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        margin-bottom: 1rem;

        input, textarea {
            width: 20rem;
            height: 2rem;
            border: none;
        }
    }

    button {
        width: 20rem;
        height: 2rem;
        border: none;
        background-color: #4c4c4c;
        color: #fff;
        cursor: pointer;
    }
`;