import React from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {Header} from './components'
import {Home, Cart} from './pages';

import { Routes, Route } from 'react-router-dom';

import store from './redux/store';
// import {setPizzas as setPizzasAС} from './redux/actions/pizzas'
// import {setSortBy as setSortByAC} from './redux/actions/filters'
// import {setCategoryBy as setCategoryByAС} from './redux/actions/filters'


  const App = ({setPizzas, items}) => {
    React.useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
        // setPizzasAС(data.pizzas)
      })
    }, [])

    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home items={items}/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </div>
    );
  }
  

// const mapStateToProps = (state) => {
//   return ({
//     items: state.pizzasReducer.items,
//     // sortBy: state.filtersReducer.sortBy,
//     // category: state.filtersReducer.category,
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

