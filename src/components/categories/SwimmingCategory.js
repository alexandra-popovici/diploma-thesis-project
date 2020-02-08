import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {fetchSwimmingProductsAction} from "../../actions/fetchSwimmingProductsAction";
import {connect} from "react-redux";

export class SwimmingCategory extends React.Component {
    componentDidMount () {
        let firebaseRef = this.props.firebase.database.ref("products/swimming");
        firebaseRef.once('value').then(snapshot => {
            this.props.fetchSwimmingProductsAction(snapshot.val());
        });
    }

    renderList = () => {
        return (
            <div>
                {this.props.swimmingProducts.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        )
    };

    render () {
        return (
            <div>
                {console.log("the products from swimming file: ")}
                {console.log(this.props.products)}
                {this.renderList()}
                <Link to="/categorii"><Button>Inapoi</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    swimmingProducts: state.swimmingProducts
});

export default connect(
    mapStateToProps,
    {fetchSwimmingProductsAction})
(SwimmingCategory)
