import React from 'react';
import {Categories, SortPopUP, PizzaBlock, PizzaLoadingBlock} from '../components';
import {useSelector, useDispatch} from 'react-redux';

import {setCategory as setCategoryAC} from '../redux/actions/filters'
import {setSort as setSortAC} from '../redux/actions/filters'

import {fetchPizzas as fetchPizzasThunk} from '../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
                    {name:'по популярности', type: 'popular'}, 
                    {name: 'по цене', type: 'price'}, 
                    {name: 'по алфавиту', type: 'alphabet'},
                  ]

const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzasThunk())
  }, [category])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryAC(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortAC(type))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames} />

        <SortPopUP  activeSortType={sortBy}
                    onClickSortType={onSelectSortType} 
                    items={sortItems}
          />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded 
          ? items.map(obj => <PizzaBlock  key={obj.id}
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