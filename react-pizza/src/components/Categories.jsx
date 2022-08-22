import React, {useState} from "react";


// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//     // this.state.activeItem = index;
//     // this.forceUpdate();
//   };

//   render() {
//     const {items} = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li >Все</li>

//           {items.map((name, index) => <li className={this.state.activeItem === index ? 'active' : ''} 
//                                           onClick={ () => this.onSelectItem(index)} 
//                                           key={`${name}_${index}`}>{name}</li>)}

//         </ul>
//   </div>
//     )
//   }
// }

const Categories = ({ items }) => {

  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  }
  
  return (
    <div className="categories">
    <ul>
      <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>

      {items && 
        items.map((name, index) => <li 
                                      className={activeItem === index ? 'active' : ''} 
                                      onClick={() => onSelectItem(index)} 
                                      key={`${name}_${index}`}>
                                        {name}
                                      </li>)}

    </ul>
  </div>
  )
}


export default Categories;