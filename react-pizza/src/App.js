import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Header} from './components'
import {Home, Cart} from './pages';

import { Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// import store from './redux/store';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'
import {setSortBy as setSortByAction} from './redux/actions/filters'
import {setCategoryBy as setCategoryByAction} from './redux/actions/filters'


// function App() {

//   useEffect(() => {

    // axios.get('http://localhost:3000/db.json').then(({data}) => {
    //   setPizzas(data.pizzas);
    // })

//   }, []);

  // return (
  //   <div className="wrapper">
  //     <Header/>
  //     <div className="content">
  //       <Routes>
  //         <Route exact path='/' element={<Home items={pizzas}/>} />
  //         <Route exact path='/cart' element={<Cart/>} />
  //       </Routes>
  //     </div>
  //   </div>
  // );
  // }
  
  class App extends React.Component {
    componentDidMount() {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
        this.props.setPizzas(data.pizzas);
      })
    }
    
    render() {
      return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home items={this.props.items}/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return ({
    items: state.pizzasReducer.items,
    sortBy: state.filtersReducer.sortBy,
    category: state.filtersReducer.category,
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setPizzas: (items) => dispatch(setPizzasAction(items)), dispatch,
    setSortBy: (name) => dispatch(setSortByAction(name)), dispatch,
    setCategoryBy: (categoryIndex) => dispatch(setCategoryByAction(categoryIndex)), dispatch,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

