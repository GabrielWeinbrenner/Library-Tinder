import React from 'react';

class Currentbook extends React.Component{

    render(){
        const currentBook = this.props.books[this.props.currentBookValue]
        return(
            <div className="container book">
                <img alt="" src={currentBook.volumeInfo.imageLinks.thumbnail} />
                <h5>{currentBook.volumeInfo.title}</h5>
                <h6>by {currentBook.volumeInfo.authors[0]}</h6>
                <p>{currentBook.volumeInfo.description}</p>

            </div>
        );
    }

}

export default Currentbook;