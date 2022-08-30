import React from 'react';
import {Categories, SortPopUP, PizzaBlock, PizzaLoadingBlock} from '../components';
import {useSelector, useDispatch} from 'react-redux';

import {setCategory as setCategoryAC} from '../redux/actions/filters';
import {setSort as setSortAC} from '../redux/actions/filters';

import {fetchPizzas as fetchPizzasThunk} from '../redux/actions/pizzas';

import {addPizzaToCart as addPizzaToCartAC} from '../redux/actions/cart';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
                    {name:'по популярности', type: 'popular', order: 'desc'}, 
                    {name: 'по цене', type: 'price', order: 'desc'}, 
                    {name: 'по алфавиту', type: 'name', order: 'asc'},
                  ]

const Home = () => {

  const dispatch = useDispatch();
  const pizzasItems = useSelector(({pizzas}) => pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzasThunk(sortBy, category))
  }, [sortBy, category])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryAC(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortAC(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames} />

        <SortPopUP  activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType} 
                    items={sortItems}
          />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded 
          ? pizzasItems.map(obj => <PizzaBlock  onClickAddPizza={handleAddPizzaToCart}
                                                key={obj.id}
                                                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                                                {...obj}
                                                />)
          : Array(12)
                    .fill(0).
                    map( (_, index) => <PizzaLoadingBlock key={index}/> )
        }
      </div>
    </div>
  );
}

export default Home