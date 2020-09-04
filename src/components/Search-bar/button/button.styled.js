import styled from 'styled-components';

export const ButtonSearch = styled.button`
    background-color: #EEEEEE;
    background-image: none;
    border-radius: 0 2px 2px 0;   
    border: 0 rgba(0,0,0,.2);
    cursor: pointer;
    height: 48px;
    padding-top: 2px;
    position: absolute;
    right: -2px;
    top: 0;
    width: 48px;
    -webkit-border-radius: 0 2px 2px 0;
`;
ButtonSearch.displayName = 'ButtonSearch';

export const IconButton = styled.img`    
    width: 20px;
`;
IconButton.displayName = 'IconButton';
