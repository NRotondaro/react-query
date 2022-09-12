import React from 'react';

export default function Character({
  character: { image, name, status, species, location },
}) {
  return (
    <div className='card'>
      <img src={image} alt='' />
      <div className='text-container'>
        <h3>{name}</h3>
        <p className='status'>
          {status} - {species}
        </p>
        <p>{location.name}</p>
      </div>
    </div>
  );
}
