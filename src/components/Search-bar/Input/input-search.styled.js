import styled from 'styled-components';

export const InputSearch = styled.input`    
    border-radius: 4px;
    border: 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.02);
    color: #333333;
    font-size: 1.2em;
    height: 40px;
    padding: 4px 60px 4px 16px;
    width: 93%;

    &::-webkit-input-placeholder {
        color: #999999;
    }
    
    &::-moz-placeholder {
        color: #999999;
    }
    
    &:-ms-input-placeholder {
        color: #999999;
    }
    
    &:-moz-placeholder {
        color: #999999;
    }
`;
InputSearch.displayName = 'InputSearch';
