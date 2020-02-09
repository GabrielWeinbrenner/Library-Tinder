import React from 'react';
import _ from 'lodash';
import noImage from '../../images/noImage.png';

class Currentbook extends React.Component{

    render(){
        const currentBook = this.props.books[this.props.currentBookValue]
        return(
            <div className="container book">
                <img alt={noImage} src={currentBook.volumeInfo.imageLinks.thumbnail} />
                <h5>{currentBook.volumeInfo.title}</h5>
                <h6>by {currentBook.volumeInfo.authors[0]}</h6>
                <p>{_.truncate(currentBook.volumeInfo.description, {'length': 300,"separator": ". "})}</p>

            </div>
        );
    }

}

export default Currentbook;