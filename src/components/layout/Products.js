import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../actions/ProductActions";

function Products() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [])


    return (

        products.map((item) => {
        return (
            <div className="ui card" key={item.id}>
                <div className="image">
                    <img alt='' src={'http://127.0.0.1:8000' + item.image}/>
                </div>
                <div className="content">
                    <p className="header">{item.name}</p>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        {item.description}
                    </div>
                </div>
                <div className="extra content">
                    <p>
                        <i className="user icon"/>
                        22 Friends
                    </p>
                </div>
            </div>
        )
    })
    )

}

export default Products
