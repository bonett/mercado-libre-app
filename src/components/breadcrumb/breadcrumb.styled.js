import styled from 'styled-components';

export const Breadcrumb = styled.div`
    padding: 16px 0;
`;
Breadcrumb.displayName = 'Breadcrumb';

export const ListItem = styled.ul`
    padding: 4px 0;
`;
ListItem.displayName = 'ListItem';

export const Item = styled.li`
    color: #999999;
    display: inline;
    margin-right: 10px;

    &:after {
        content: ">";
        margin-left: 10px;

    }

    &:last-child {
        color: #666666;
        font-weight: 800;
    }
`;
Item.displayName = 'Item';
