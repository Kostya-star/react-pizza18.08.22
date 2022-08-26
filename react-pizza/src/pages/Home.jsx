import React from 'react';
import {Categories, SortPopUP, PizzaBlock} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory as setCategoryAC} from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
                    {name:'по популярности', type: 'popular'}, 
                    {name: 'по цене', type: 'price'}, 
                    {name: 'по алфавиту', type: 'alphabet'},
                  ]

const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryAC(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory}
                    items={categoryNames} />
        <SortPopUP items={sortItems} 
          />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { items && items.map(obj => <PizzaBlock  key={obj.id}
                                        {...obj}
                                        />)
        }
      </div>
    </div>
  );
}

export default Home