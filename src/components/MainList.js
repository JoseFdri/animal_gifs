import React from 'react';
import Category from './Category';
import ModalBox from './Modal';
import MainListView from '../views/MainList.view.js';

class MainList extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ['Cats', 'Dogs', 'Elephants', 'Lions', 'Monkeys', 'Koala', 'Duck']
    this.state = {
      addModalShow: false, 
      category: '',
      showModalSpinner: true,
      gifs : []
    }
  }

  render() {
    return (
      <MainListView>
        {this.createList()}
        <ModalBox
          show={this.state.addModalShow}
          category={this.state.category}
          onHide={this.hideModal}
          showSpinner={this.state.showModalSpinner}
          gifs={this.state.gifs}
          ></ModalBox>
      </MainListView>
    );
  }

  createList = () => {
    let list = [];
    for (let i = 0; i < this.categories.length; i++) {
      list.push(
        <Category key={i} name={this.categories[i]} onSelectCategory={this.onSelectCategory}>
        </Category>
      );
    }
    return list;
  }
  
  hideModal = () => {
    this.setState({addModalShow: false})
  }

  onSelectCategory = (category) => {
    this.setState({addModalShow: true, category, showModalSpinner: true, gifs: []})
    this.getGifs(category);
  }

  getGifs = (category) => {
    let url = new URL("https://api.giphy.com/v1/gifs/search"),
    params = {
      api_key:'l0V0L7xF5G4T9ZR0rY6x4ZWR9R9dZLuq', 
      q: category, 
      limit: 10,
      rating: 'g',
      offset: this.getRandomNumber(0, 100), 
      lang: 'en'
    };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then( (data) => {
      data.json().then((rsp) => {
        this.setState( {showModalSpinner: false, gifs: rsp.data})
      })
    })
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
export default MainList;