//ADD ITEMS
//FILTER ITEMS
// REMOVE ITEM
//ADD QUANTITY

export function addProduct(id){
    return {
        type: 'ADD_PRODUCT',
        payload: id
    }
}
export function removeProduct(id){
    return {
        type: 'REMOVE_PRODUCT',
        payload: id
    }
}
export function addQuantity(id){
    return {
        type: 'ADD_QUANTITY',
        payload: id
    }
}
export function removeQuantity(id){
    return {
        type: 'REMOVE_QUANTITY',
        payload: id
    }
}

export function filterProduct(id){
    return {
        type: 'FILTER_PRODUCT',
        payload: id
    }
}
export function clearCheckout(){
    return{
        type: 'CLEAR_CHECKOUT'
    }
}