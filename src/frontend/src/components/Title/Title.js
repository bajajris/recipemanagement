import React from 'react'

import classes from './Title.module.css'

export const Title = (props) => {
    return (
        <h1 className={[classes.Title, classes.divider, classes.donotcross].join(' ')}>{props.name}</h1>
    );
}