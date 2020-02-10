import React from 'react';

class BookForm extends React.Component{
    state = {
        typeVal: ""
    };

    constructor(props){
        super(props);
    }

    handleTypeChange = (event) =>{
        this.setState({
            typeVal: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sub(this.state.typeVal);
    }
    render(){
        return(
            <div className="form">

                <form onSubmit={this.handleSubmit}>
                    <div className="row alignButtons">
                    <div className="form-group">
                        <label for="typeInput">
                        Type:          
                        </label>
                        <input autoComplete="off" id="typeInput" className="typeInput" type="text" value={this.state.typeVal} onChange={this.handleTypeChange}></input>
                    </div>
                    <button className ="typeButtonInput btn btn-primary" type="submit" value="Submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BookForm;