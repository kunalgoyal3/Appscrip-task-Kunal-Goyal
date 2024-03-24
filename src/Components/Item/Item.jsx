import React, { useState } from 'react';
import './Item.css';
import heart_simple from '../Assets/heart_simple.png';
import heart_liked from '../Assets/heart_liked.png';

const Item = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleHeartClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <div className={props.sidebar ? 'item-container-2' : 'item-container'}>
                <img src={props.image} alt={props.name} />
                <p className='item-name'>{props.name}</p>
                <div className='item_desc'>
                    <p>Sign in or Create an account to see pricing</p>
                    <img
                        height='20px'
                        width='20px'
                        src={isLiked ? heart_liked : heart_simple}
                        alt=""
                        className="heart-icon"
                        onClick={handleHeartClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Item;