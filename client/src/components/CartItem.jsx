function CartItem({ cart, index, removeFromCart }) {
  return (
    <div className="d-flex p-2 border rounded-2">
      <img
        src={cart.imageUrl}
        alt="gambar"
        style={{
          width: "90px",
          height: "90px",
          objectFit: "cover",
        }}
        className="rounded-4"
      />
      <div className="ms-2 flex-grow-1">
        <h5 className="card-title">{cart.nama_jus}</h5>
        <p className="card-text d-flex">
          <span className="badge text-bg-warning">
            Rp {cart.harga.toLocaleString()}
          </span>
        </p>
      </div>
      <button
        className="btn btn-danger btn-sm align-self-center"
        onClick={() => removeFromCart(index)} // Pastikan index diteruskan
      >
        Hapus
      </button>
    </div>
  );
}

export default CartItem