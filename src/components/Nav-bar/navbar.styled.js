import styled from 'styled-components';

export const Header = styled.header`
    background-color: #FFE600;
    box-shadow: 0 1px 0 0 rgba(0,0,0, 0.02);
    padding: 8px 0;
`;
Header.displayName = 'Header';

export const Navbar = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: center;

    & .logo {
        width: 10%;
    }

    & .form {
        width: 90%;
    }
`;
Navbar.displayName = 'Navbar';
