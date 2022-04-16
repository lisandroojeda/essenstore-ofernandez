import { useEffect, useState } from "react"
import Loading from "./Loading"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import ItemDetail from "./ItemDetail"
import {container} from "react-bootstrap"

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null) //inicializacion de un obejto vacio
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  console.log("itemId", id)
  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "products", id)
    getDoc(docRef)
      .then(doc => {
        const  prod = {id: doc.id, ...doc.data()}
        setItem(prod)
      })
      .finally(() => { setLoading(false) })
        
    
  }, [id])

  return <div className="container">{loading ? <Loading /> : <ItemDetail {...item} />}</div>
}

export default ItemDetailContainer;
