import React from 'react';
import CategoryView from '../views/Category.view.js'

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }

  render() {
    return (
      <CategoryView onClick={this.sendCategory} category={this.props.name}/>
    );
  }
  
  sendCategory = () => {
    this.setState({category: this.props.name})
    console.log('hola')
    this.props.onSelectCategory(this.props.name)
  }
}
export default Category;