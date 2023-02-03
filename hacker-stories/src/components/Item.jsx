import React from "react";

const Item = ({ item, onRemoveItem }) => {
    function handleRemoveItem() {
        onRemoveItem(item);
    }

    return (
        <div>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
                <button type="button" onClick={() => onRemoveItem(item)}>
                    Dismis
                </button>
            </span>
        </div>
    )
}

export default Item;
