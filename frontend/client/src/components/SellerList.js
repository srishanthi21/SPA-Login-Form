import React from 'react';

function SellerList({ sellers }) {
  if (sellers.length === 0) {
    return <p>No sellers found</p>;
  }

  return (
    <ul className="list-group mt-3">
      {sellers.map((seller) => (
        <li key={seller.id} className="list-group-item">
          <h5>{seller.name}</h5>
          <p>Rating: {seller.rating}</p>
          <p>Review: {seller.review}</p>
        </li>
      ))}
    </ul>
  );
}

export default SellerList;
