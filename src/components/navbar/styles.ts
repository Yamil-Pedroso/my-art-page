import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10rem;
`;

export const NavLinkWrapper = styled.div`
    display: flex;
      ul {
        
      }

     li {
          list-style: none;
        }

     a {
        text-decoration: none;
        color: #000;
     }

      @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MenuIconWrapper = styled.div`
    display: none;
     
    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`;

export const Logo = styled.div`

a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    }
`;