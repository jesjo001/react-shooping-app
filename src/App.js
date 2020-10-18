// feat 1
import React from 'react';
import Filter from './componenets/Filter';
import Products from './componenets/Products';
import data from "./data.json"
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }

  sortProducts = (event) =>{
    //imp
    console.log(event.target.value);
    let sort = event.target.value;
    this.setState({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "lowest" ?
        a.price > b.price ? 1: -1 :
        sort === "highest" ?
        a._id < b._id ? 1: -1  :
         a._id < b._id ? 1: -1 
      ))
    })
  }

  filterProducts = (event) => {
    //imp
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({...this.state, products: data.products})
    }else{
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      })
    }
    
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length} 
              size={this.state.size} 
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts} />
              <Products products={this.state.products} />
            </div>

            <div className="sidebar">Cart Item </div>
          </div>
        </main>
        <footer>
          All right reserved 
        </footer>
      </div>
    );
  }

}

export default App;
