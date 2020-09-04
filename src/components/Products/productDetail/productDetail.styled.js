import styled from 'styled-components';

export const Detail = styled.article`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 32px;
    width: 100%;
`;
Detail.displayName = 'Detail';

export const Description = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;
Description.displayName = 'Description';

export const Reviews = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;
Reviews.displayName = 'Reviews';
