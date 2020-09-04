/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, ListItem, Item } from './breadcrumb.styled';

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb>
            <ListItem>
                <Item>Electrónica Audio y Video</Item>
                <Item>Ipod</Item>
                <Item>Reproductores</Item>
                <Item>Ipod touch</Item>
                <Item>32gb</Item>
            </ListItem>
        </Breadcrumb>
    );
};

BreadcrumbComponent.propTypes = {};

export default BreadcrumbComponent;
