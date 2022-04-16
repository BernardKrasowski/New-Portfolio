import "./cart.styles.scss";

const Cart = ({ cart, show }) => {
  return (
    <div className="cart_telephone" onClick={() => show(cart.id)}>
      <div
        className="img_phone"
        style={{ backgroundImage: `url(${cart.img})` }}
      ></div>
    </div>
  );
};
export default Cart;
