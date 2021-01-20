import React from 'react';

const Item = (props) => {
    return (
        <div>
            <h2>{props.item.volumeInfo.product}</h2>
        </div>
    ) ;
}
export default Item;