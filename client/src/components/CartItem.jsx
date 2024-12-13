import React from 'react';

function CartItem({ cart, calculateTotal, handleCheckout, removeFromCart }) {
  return (
    <div className="offcanvas-body d-flex flex-column gap-2">
      {cart.map((element, index) => {
        return (
          <div key={index} className="d-flex p-2 border rounded-2">
            <img
              src={element.imageUrl}
              alt="gambar"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
              }}
              className="rounded-4"
            />
            <div className="ms-2 flex-grow-1">
              <h5 className="card-title">{element.nama_jus}</h5>
              <p className="card-text d-flex">
                <span className="badge text-bg-warning">
                  Rp {element.harga.toLocaleString()}
                </span>
              </p>
            </div>
            <button
              className="btn btn-danger btn-sm align-self-center"
              onClick={() => removeFromCart(index)}
            >
              Hapus
            </button>
          </div>
        );
      })}
      <div className="mt-4">
        <h5>Total Harga:</h5>
        <p className="fw-bold">Rp {calculateTotal().toLocaleString()}</p>
      </div>
      <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-success" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;