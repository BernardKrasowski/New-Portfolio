import "./cart.styles.scss";

const Cart = ({ data, img }) => {
  return (
    <div className="cart_contact">
      <div className="img-cartContact">{img}</div>
      <span className="img-cartData">{data}</span>
    </div>
  );
};
export default Cart;
