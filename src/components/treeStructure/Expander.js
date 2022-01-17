import React, { useState } from 'react'
import Row from './Row'
import '../Styles/Styles.css'

const TreeTwo = ({ options=[] }) => {
    return (
        <div className='container'>
            {options.map((item, index) => (
                <div>
                    { item.children ? null :<div className='component'>{item.name}</div>}
                    { item.children ? <Row key={index} item={item}>{TreeTwo({ options: item.children })}</Row> : null}
                </div>
            ))}
        </div>
    )
}

export default TreeTwo;
