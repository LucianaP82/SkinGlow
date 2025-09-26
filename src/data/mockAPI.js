import products from './products'

export default function getProducts(){
  return new Promise( (resolve) =>{
    setTimeout( () => resolve(products), 1500)
  })
}

export function getProductById(idParam){
  const promiseProduct = new Promise( (resolve, reject) => {
    const productRequested = products.find( item => item.id === Number(idParam) )       
    setTimeout( () => {
      if (productRequested){
        resolve(productRequested)
      }
      else{
        reject("Item no encontrado")
      }
    }
      , 1000)
  })
  return promiseProduct;
}

export function getProductsByCategory(categParam){
  const promiseProduct = new Promise( (resolve, reject) => {
    const productsRequested = products.filter( item => item.category === categParam )
    setTimeout( () => resolve(productsRequested), 1000)
  })
  return promiseProduct;
}