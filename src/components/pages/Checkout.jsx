import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { Navigate, Link } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [name, setNombre] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setNombre(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evita uqe se recargue la pagina

    const order = {
      items: cart,
      total: cartTotal(),
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      date: Timestamp.fromDate(new Date()),
    };

    const orderRef = collection(db, "orders");

    cart.forEach((item) => {
      const docRef = doc(db, "products", item.id);
      console.log(docRef);
      getDoc(docRef).then((doc) => {
        if (doc.data.stock >= item.cantidad) {
          updateDoc(docRef, {
            stock: doc.data().stock - item.cantidad,
          });
        } else {
          alert("No hay stock suficiente");
        }
      });

      addDoc(orderRef, order).then((doc) => {
        console.log("Documento creado con ID: ", doc.id);
        setOrderId(doc.id);
        emptyCart();
      });
    });
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h1>Tu Orden se completo con exito</h1>
        <hr />
        <h4>Guarda tu numero de orden: {orderId}</h4>
        <Link to="/App" className="btn btn-success">
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/App" />;
  }
  return (
    <div className="container my-5">
      <h1>Datos Personales</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mt-2"
          type={"text"}
          placeholder="nombre"
          value={name}
          onChange={handleName}
        />
        <input
          className="form-control mt-2"
          type={"email"}
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
        <input
          className="form-control mt-2"
          type={"tel"}
          placeholder="telefono"
          value={phone}
          onChange={handlePhone}
        />

        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Checkout;
