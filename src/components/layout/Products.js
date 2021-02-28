import React, {Component} from 'react';
import DjangoApi from "../RestApi/DjangoApi";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        DjangoApi.get('/products/')
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log(response.data)
            })
    }

    render() {
        return (
            <>
                {
                    this.state.data.map((item) => {
                        return (
                            <div className="ui card">
                                <div className="image">
                                    <img src={'http://127.0.0.1:8000' + item.image}/>
                                </div>
                                <div className="content">
                                    <a className="header">{item.name}</a>
                                    <div className="meta">
                                        <span className="date">Joined in 2013</span>
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a>
                                        <i className="user icon"/>
                                        22 Friends
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Products;
