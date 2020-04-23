import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from 'reselect';
//integrating selector for stopping data loading from server
import {selectDirectorySections} from '../../redux/directory/directory.selector';


import './directory.styles.scss';


const mapStateToProps =  createStructuredSelector({
    sections : selectDirectorySections
})

const  Directory = ({sections}) => {
  

  
    return (
      <div className='directory-menu'>
        {/* destructuring is used */}
        {sections.map(({id,...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps}/>
        ))}
      </div>
    );
  
}

export default connect(mapStateToProps)(Directory);
