import React, {Component} from 'react';
import DjangoApi from "../RestApi/DjangoApi";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            image: '',
            description: '',
            band: '',
            category: '',
            price: 0,
            countInStock: 0,
            rating: 0,
            numReviews: 0
        }
    }

    componentDidMount() {
        DjangoApi.get('/products/')
            .then(response => console.log(response))
    }

    render() {
        return (
            <></>
        );
    }
}

export default Products;
