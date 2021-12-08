import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css"
import {Menu} from "antd";

Headers.propTypes = {

};

function Headers(props) {
    return (
        <div className="header">
            <div className="nav">
                <ul>Viec lam It</ul>
                <ul>Tin tuc</ul>
                <ul>Drop down</ul>
            </div>
            <div className="nav">
                <ul>Dang ky</ul>
                <ul>Dang nhap</ul>
                <ul>Nha tuyen dung</ul>
            </div>
        </div>
    );
}

export default Headers;