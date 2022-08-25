import {Categories, SortPopUP, PizzaBlock} from '../components'


function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopUP items={[
                            {name:'по популярности', type: 'popular'}, 
                            {name: 'по цене', type: 'price'}, 
                            {name: 'по алфавиту', type: 'alphabet'},
                          ]} 
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