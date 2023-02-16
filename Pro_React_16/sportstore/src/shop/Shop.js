import React, { Component } from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";

import { CartSummary } from "./CartSummary";


export class Shop extends Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white"><div className="navbar-brand">SPORTS STORE</div>
                </div>
                <CartSummary {...this.props} />
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products"
                        categories={this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.props.products} />
                </div>
            </div>
        </div>
    }
}