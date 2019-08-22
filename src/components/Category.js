import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }

  render() {
    return (
      <div className="option-container" onClick={this.sendCategory}>
          {this.props.name}
      </div>
    );
  }
  
  sendCategory = () => {
    this.setState({category: this.props.name})
    this.props.onSelectCategory(this.props.name)
  }
}
export default Category;