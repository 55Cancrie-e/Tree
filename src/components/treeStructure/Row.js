import React, { useState } from 'react'
import '../Styles/Styles.css'

let Row = ({ item, children }) => {
    let [showRow, setShowRow] = useState(false);

    return (
        <div >
            <div onClick={() => setShowRow(!showRow)} className='expendComponent'>{item.name}</div>
            {showRow ? <div style={{ marginLeft: '15px'}}>{children}</div> : null}
        </div>
    )
}


export default Row;