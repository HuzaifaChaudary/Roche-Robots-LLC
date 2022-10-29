import React, {  } from 'react';
import { Link } from 'react-router-dom';
import data from '../allData/Data';
const SubNav = (props) => {

console.log(props.onMouse);
    const categoryHandler =(event,key)=>{
       props.oncategoryHandler(key);

    }
    return (
        <>
                            {
                    data.map( (ct,key) => <Link  to={'/products/'+ ct.category} className='vanish' onClick={event=>categoryHandler(event,key)} key={key} > {ct.category}</Link>  )
                }

        </>
    );
};

export default SubNav;