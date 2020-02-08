import React from 'react';

class Currentbook extends React.Component{

    render(){
        console.log(this.props.books)
        return(
            <div className="container book">
                <img alt="" src={this.props.books[this.props.currentBookValue].volumeInfo.imageLinks.thumbnail} />
            </div>
        );
    }

}

export default Currentbook;