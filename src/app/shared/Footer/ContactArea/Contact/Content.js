import React from 'react';
import './index.scss'

const Content=({isShow})=>{
    return(
        <>
            <p className={`${isShow?'show-contact-content content':'hide-contact-content content'}`}>
                <span>
                Zigatola dhanmondi 1209
                </span><br/>
                <span>
                Email: koreanshop@gmail.com
                </span>
                <br/>
                <span>Hotline: +880170000000</span>
            </p>
        </>
    )
}
export default Content;