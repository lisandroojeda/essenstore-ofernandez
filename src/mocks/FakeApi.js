
const products = [
  { id: '01', name: 'olla1', description: 'con mango', img: 'https://picsum.photos/200 ', price: 100 },
  { id: '02', name: 'olla2', description: 'sin mango', img: 'https://picsum.photos/201 ',price: 200 },
  { id: '03', name: 'olla3', description: 'cacerola', img: 'https://picsum.photos/202', price: 300 },
  { id: '04', name: 'olla4', description: 'ollita', img: 'https://picsum.photos/203', price: 400 },
  { id: '05', name: 'olla5', description: 'sarten', img: 'https://picsum.photos/204', price: 500 },
];
//generacion de promesa
export const getProducts = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else { reject("Problemas tecnicos"); }
});