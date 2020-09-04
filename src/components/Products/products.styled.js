import styled from 'styled-components';

export const SectionCard = styled.section`    
    background-color: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 rgba(0,0,0, 0.02);
`;
SectionCard.displayName = 'SectionCard';

export const Article = styled.article`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;
Article.displayName = 'Article';

export const Cover = styled.div`
    padding: 16px;
`;
Cover.displayName = 'Cover';

export const Image = styled.img`
    border-radius: 4px;
    height: 180px;
    width: 180px;
`;
Image.displayName = 'Image';

export const Description = styled.div`
    width: 60%;
`;
Description.displayName = 'Description';

export const Location = styled.div`
    width: 20%;
`;
Location.displayName = 'Location';
