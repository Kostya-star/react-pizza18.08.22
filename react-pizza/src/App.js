import React from 'react';
import {useDispatch} from 'react-redux';

import {Header} from './components'
import {Home, Cart} from './pages';

import { Routes, Route } from 'react-router-dom';

import store from './redux/store';
// import {setSortBy as setSortByAC} from './redux/actions/filters'
// import {setCategoryBy as setCategoryByAС} from './redux/actions/filters'

// window.test = () => {
//   axios.get('http://localhost:3001/pizzas').then(({data}) => {
//     // dispatch(setPizzasAС(data));
//     console.log(data);
//   })
// }

  const App = () => {
    // const dispatch = useDispatch()

    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </div>
    );
  }
  

// const mapStateToProps = (state) => {
//   return ({
//     items: state.pizzas.items,
//     // sortBy: state.filters.sortBy,
//     // category: state.filters.category,
//   });
// }

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     setPizzas: (items) => dispatch(setPizzasAС(items)), dispatch,
//     // setSortBy: (name) => dispatch(setSortByAC(name)), dispatch,
//     // setCategoryBy: (categoryIndex) => dispatch(setCategoryByAС(categoryIndex)), dispatch,
//   });
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default (App);

