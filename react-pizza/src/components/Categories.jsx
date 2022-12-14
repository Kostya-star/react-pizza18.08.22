import React, {useState} from "react";
import PropTypes from 'prop-types';


const Categories = React.memo( ({activeCategory, items, onClickCategory}) => {

  return (
    <div className="categories">
    <ul>
      <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>

      {items && 
        items.map((name, index) => <li 
                                      className={activeCategory === index ? 'active' : ''} 
                                      onClick={() => onClickCategory(index)} 
                                      key={`${name}_${index}`}>
                                        {name}
                                    </li>)
                                  }
    </ul>
  </div>
  )
})


Categories.propTypes = {
  activeCategory: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

// Categories.defaultProps = {activeCategory: null, items: []}


export default Categories;