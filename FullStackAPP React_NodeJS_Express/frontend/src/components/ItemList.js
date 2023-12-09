// src/components/ItemList.js

import React from 'react';

const ItemList = ({ items, deleteItem, editItem }) => {
  const handleEdit = (id) => {
    const updatedName = prompt('Podaj nową nazwę:');
    const updatedDescription = prompt('Podaj nowy opis:');

    if (updatedName && updatedDescription) {
      editItem(id, { name: updatedName, description: updatedDescription });
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => deleteItem(item._id)}>Usuń</button>
          <button onClick={() => handleEdit(item._id)}>Edytuj</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
