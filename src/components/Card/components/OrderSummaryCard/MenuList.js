import React from "react";

const CategoryCard = (props) => {
    return (
        <li><a href="#0">{props.count}x {props.name}</a><span>${props.price}</span></li>
    );
};

export default CategoryCard;