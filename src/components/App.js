import React from 'react';
import axios from 'axios';
import Currentbook from './booksView/Currentbook';
import cross from '../images/x.png';
import heart from '../images/heart.png';
import logo from '../images/LibraryTinder.png';
import BookForm from './booksView/BookForm';
class App extends React.Component{
  state = {
    books: null,
    type: "", 
    currentBookValue: 0,
    liked: [],
  }
  getBook(type){
    if(type.indexOf(" ") === -1){
      type.replace(/" "/g, "+");
    }
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + type).then(
      res => {
        const b = res.data.items 
        console.log(b);
        this.setState({books: b})
      }
    )
  }

  handleSubmit = (typeVal) => {
    this.getBook(typeVal);
    this.setState({type: typeVal});
    console.log("Submitted");
  }

  onDislikeClick = () => {
    const a = this.state.currentBookValue+1;
    this.setState({currentBookValue: a})
  }
  onLikeClick = () => {
    const a = this.state.currentBookValue+1;
    this.setState({currentBookValue: a, 
      liked: this.state.liked.concat(this.state.books[this.state.currentBookValue-1])
    });
  }
  handleOutput = () => {
    if(this.state.books !== null){
      if(this.state.books.length === this.state.currentBookValue+1){
        const bookList = this.state.liked.map(book=>{
          return (
            <Currentbook 
              currentBookValue={this.state.books.indexOf(book)} 
              books={this.state.books} 
            />
          )
        })
        return(
          <div>
            {bookList}
          </div>
        )
      }
      return (
        <div>
          <Currentbook currentBookValue={this.state.currentBookValue} books={this.state.books} />
          <div className="row alignButtons">
            <img onClick={this.onDislikeClick} className="cross img-responsive" src={cross} alt='alternate'/>
            <img onClick={this.onLikeClick} className="heart img-responsive" src={heart} alt='alternate'/>         
          </div>
        </div>
      )           
    }else{
      return(
        <div>
          <img className="img-responsive" src={logo} />
          <BookForm sub={this.handleSubmit}/>
        </div>
      );
    }
  }
  render(){
    return (
      <div className="container">
          {this.handleOutput()}
      </div>
    );
  }
}

export default App;
