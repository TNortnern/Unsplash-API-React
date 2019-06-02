import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    componentDidMount(){
        this.setState({term: "Programming"})
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label style={{textAlign:"center"}} htmlFor="">Search</label>
                        {/* <input type="text" onClick={(event) => console.log(event.targetvalue)}/> */}
                        <input type="text" placeholder='Type a keyword, example "cars"' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                    <i>{this.state.term}</i>
                </form>

            </div>
        )
    }
}

export default SearchBar;