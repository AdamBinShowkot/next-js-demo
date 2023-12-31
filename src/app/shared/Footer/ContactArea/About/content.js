import React from 'react';
import './index.scss';

const Content=({isShow})=>{
    return(
        <>
            <span className={`${isShow?'show-about-content content':'hide-about-content content'}`}>
                Korean Shop BD is the online platform, one of the largest retail supermarket in Bangladesh. 
                A business entity that’s defining the standards in innovation and service quality in the nation.
            </span>
        </>
    )
}
export default Content;