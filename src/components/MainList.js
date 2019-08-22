import React from 'react';
import Category from './Category';
import ModalBox from './Modal';

class MainList extends React.Component {
  constructor(props) {
    super(props);
    this.animalList = ['Cats', 'Dogs', 'Elephants', 'Lions', 'Monkeys']
    this.state = {addModalShow: false, category: ''}
  }
  render() {
    return (
      <div>
        {this.createList()}
        <ModalBox 
          show={this.state.addModalShow}
          category={this.state.category}
          onHide={this.hideModal}
          ></ModalBox>
      </div>
    );
  }

  createList = () => {
    let list = [];
    for (let i = 0; i < this.animalList.length; i++) {
      list.push(
        <Category key={i} name={this.animalList[i]} onSelectCategory={this.onSelectCategory}>
        </Category>
      );
    }
    return list;
  }
  
  hideModal = () => {
    this.setState({addModalShow: false})
  }

  onSelectCategory = (category) => {
    this.setState({addModalShow: true, category})
  }
}
export default MainList;