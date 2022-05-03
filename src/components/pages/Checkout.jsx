import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import {
  writeBatch,
  query,
  where,
  documentId,
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Windows } from "react-bootstrap-icons";

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
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

  const handleNavigate = () => {
    navigate(-2); //vuelve una posicion para atras
  };
  const handleSubmit = async (e) => {
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

    const batch = writeBatch(db);
    const orderRef = collection(db, "orders");
    const productosRef = collection(db, "products");

    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const productos = await getDocs(q);

    const outOfStock = [];

    productos.docs.forEach((doc) => {
      const intemInCart = cart.find((item) => item.id === doc.id);
      if (doc.data().stock >= intemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - intemInCart.cantidad,
        });
      } else {
        outOfStock.push(intemInCart);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit();
      addDoc(orderRef, order).then((doc) => {
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      toast.error(`No hay suficiente Stock para ${outOfStock.map((item) => item.name)}`, {
        type: "error",
        autoClose: false,
        style: {
          borderRadius: "10px",
          background: "black",
          color: "#fff",
          fontSize: "1.2rem",
          padding: "10px",
        },
        position: "top-right",
      });
    }

    // cart.forEach((item) => {
    //   const docRef = doc(db, "products", item.id);
    //   console.log(docRef);
    // getDoc(docRef).then((doc) => {
    //   if (doc.data.stock >= item.cantidad) {
    //     updateDoc(docRef, {
    //       stock: doc.data().stock - item.cantidad,
    //     });
    //   } else {
    //     alert("No hay stock suficiente");
    //   }
    // });
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
      <Toaster
        toastOptions={{
          success: {
            // onClick: () => {
            //  handleNavigate();
            //  },
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
};
export default Checkout;
