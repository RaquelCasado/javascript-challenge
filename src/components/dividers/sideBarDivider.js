import React from 'react';

export const SideBarDivider = (children) => {
    return(
        <div style={{backgroundColor:'#22252e', padding: 5, borderBottomStyle: 'solid', borderWidth:2 , borderColor: '#3e4352'}}>
            <a style={{color:'white', fontWeight:'bold'}}>{children.title}</a>
        </div>
    )
};