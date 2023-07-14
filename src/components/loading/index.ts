import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh
`;

export const LoadingCont = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 30px;
  height: 30px;
  border: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;