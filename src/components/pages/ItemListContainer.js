import React from "react";

function itemListContainer() {

  const products = [
    { id: '01', name: 'olla1', description: 'con mango', img: '' },
    { id: '02', name: 'olla2', description: 'sin mango', img: '' },
    { id: '03', name: 'olla3', description: 'cacerola', img: '' },
    { id: '04', name: 'olla4', description: 'ollita', img: '' },
    { id: '05', name: 'olla5', description: 'sarten', img: '' }
  ];

  const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => { resolve(products); }, 2000);
    } else { reject("Problemas tecnicos"); }
  });

  console.log(getProducts);
  return (
    <div>
      <h1></h1>
    </div>
  );
}
export default itemListContainer;


