import React from 'react';

function Card(props)
{
    // console.log(props)
    return (
        <div className='card'>
            <img src={props.data.fotoUrl} alt='kucing'  className='card-img'></img>
            <div className='card-body'>
                <h6>{props.data.title}</h6>
                <p className='text-mute'>{props.data.waktuPost}</p>
            </div>
        </div>
    )
}

export default Card;