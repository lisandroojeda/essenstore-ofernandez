import { Link } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Cart } from "./Cart";
const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);
  console.log(cartQuantity);
  return (
    <Link
      to={"/Cart"}
      className="dropdown-item"
      style={{ color: "white", fontSize: "30px", position: "relative" }}
    >
      <BsFillBasket2Fill />
      <span
        className="ml-2 badge rounded-circle"
        style={{
          position: "absolute",
          top: "0",
          left: "55%",
          background: "red",
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: "2px",
          fontSize: "15px",
        }}
      >
        {cartQuantity()}
      </span>
    </Link>
  );
};
export default CartWidget;
