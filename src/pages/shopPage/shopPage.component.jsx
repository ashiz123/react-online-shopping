//it is very important. This component is getting value from app.js through route. and hit the next component. So this component working as mediator for collection overview and app.js through route.


import React  from 'react'
import './shopPage.style.scss';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CollectionComponent from '../collection/collection.component';

const ShopPage = ({match}) => {

    
    return (
            <div className ='shop-page'>
              <Route exact path={`${match.path}`} component={CollectionOverview} />
              <Route  path={`${match.path}/:collectionId`} component={CollectionComponent} />
            </div>
        )
    }


export default ShopPage;
