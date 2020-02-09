import React from 'react';
import axios from 'axios';
import Currentbook from './booksView/Currentbook';
import cross from '../images/x.png';
import heart from '../images/heart.png';
import logo from '../images/LibraryTinder.png';
class App extends React.Component{
  state = {
    books: null,
    typeVal: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.getBook(this.state.typeVal);
    this.setState({type: this.state.typeVal});
    console.log("Submitted");
  }
  handleTypeChange = (event) =>{
      this.setState({
          typeVal: event.target.value
      })
  }
  onDislikeClick = () => {
    const a = this.state.currentBookValue+1;
    this.setState({currentBookValue: a})
  }
  onLikeClick = () => {
    const a = this.state.currentBookValue+1;
    this.setState({currentBookValue: a, 
      liked: this.state.liked.concat(this.state.books[this.state.currentBookValue-1])})


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
          <div class="row alignButtons">
            <img onClick={this.onDislikeClick} className="cross img-responsive" src={cross} alt='alternate'/>
            <img onClick={this.onLikeClick} className="heart img-responsive" src={heart} alt='alternate'/>         
          </div>
        </div>
      )           
    }else{
      return(
        <div className="form">
            <img className="img-responsive" src={logo} />

            <form onSubmit={this.handleSubmit}>
                <div className="row alignButtons">
                  <div className="form-group">
                    <label for="typeInput">
                    Type:          
                    </label>
                    <input id="typeInput" className="typeInput" type="text" value={this.state.typeInput} onChange={this.handleTypeChange}></input>
                  </div>
                  <button className ="typeButtonInput btn btn-primary" type="submit" value="Submit">Submit</button>
                </div>
            </form>
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
