import React from 'react';


import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'


import './collection-overview.styles.scss';
import {selectCollections} from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection.component';

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})


const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps}/>
        ))}
    </div>
)


export default connect(mapStateToProps)(CollectionOverview);
