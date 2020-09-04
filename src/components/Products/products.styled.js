import styled from 'styled-components';

export const SectionCard = styled.section`    
    background-color: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 rgba(0,0,0, 0.02);
`;
SectionCard.displayName = 'SectionCard';

export const Article = styled.article`
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    &:last-child {
        border-bottom: 1px solid #FFFFFF;
    }
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
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 150px;
    width: 60%;
`;
Description.displayName = 'Description';

export const Price = styled.h4`
    font-size: 24px;
    margin-bottom: 22px;
`;
Price.displayName = 'Price';

export const Name = styled.h2`
    color: #666666;
    font-size: 18px;
    font-weight: 400;
`;
Name.displayName = 'Name';

export const Status = styled.h5`
    color: #666666;
    font-size: 18px;
    font-weight: 400;
`;
Status.displayName = 'Status';

export const Location = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 122px;
    width: 20%;
`;
Location.displayName = 'Location';

export const Place = styled.h6`
    color: #999999;
    font-size: 12px;
`;
Place.displayName = 'Place';
