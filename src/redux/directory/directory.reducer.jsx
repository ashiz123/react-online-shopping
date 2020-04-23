import React from 'react';

import {DIRECTORY_DATA} from './directory.data';

const INTIAL_STATE = {
    sections : DIRECTORY_DATA
}

const directoryReducer  = (state = INTIAL_STATE, action) => 
{
    switch(action.type)
    {
        default: 
        return state;
    }
}

export default directoryReducer;