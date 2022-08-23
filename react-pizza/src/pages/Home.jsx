import {Categories, SortPopUP, PizzaBlock} from '../components'


function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopUP items={['по популярности', 'по цене', 'по алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map(obj => <PizzaBlock  key={obj.id}
                                        {...obj}
                                        />)
          // items.map(obj => console.log(obj))
        }
      </div>
    </div>
  );
}

export default Home