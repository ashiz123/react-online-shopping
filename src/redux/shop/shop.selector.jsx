import {createSelector} from 'reselect';


const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens : 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
     shop => shop.collections
)


//this selector need two parameter one is state and the next is :collectionId
export const selectCollection = CollectionUrlParam => 

createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[CollectionUrlParam.toLowerCase()])
)