import {createSelector} from 'reselect';



// getting the data by mapping item name to creating id
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens : 5
// }

const selectShop = state => state.shop;


//getting collections from shop.data file
export const selectCollections = createSelector(
    [selectShop],
     shop => shop.collections
); // this data are retrieved in object.



// We are converting object data to array data to preview.
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) //geting the keys of data in an array when data is stored in object format.
    // maping all the key and map into collections by which we get the value of collection at that key.

)

//To getting items  by clicking the item collection in homepage.
//this selector need two parameter one is state and the next is :collectionId
export const selectCollection = CollectionUrlParam => 

createSelector(
    [selectCollections],
    collections => collections[CollectionUrlParam]
)