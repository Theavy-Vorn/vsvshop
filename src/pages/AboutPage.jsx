import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/actions/productAction';

const AboutPage = () => {
     const dispatch = useDispatch()
    const {products} = useSelector(state=>state.proReducers)
    useEffect(()=>{
        dispatch(fetchAllProducts())
    },[])
    return (
        <div>
            {
                console.log(products && products)
            }
            BOUT PAGE
        </div>
    );
}

export default AboutPage;
