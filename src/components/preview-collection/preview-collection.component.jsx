import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component';



 const PreviewCollection = ({title, items}) =>
(
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className = "preview">
            {
                //we can use filter and map at once.
                items
                 .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    // <div key={item.id}> {item.name} </div>
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)


export default PreviewCollection;