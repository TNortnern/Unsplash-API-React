import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';


class App extends React.Component {

    state = {images: []};

    componentDidMount = () =>{
        this.onSearchSubmit('programming');
    }
    onSearchSubmit = async (term) => {
        console.log(term)
        // path, object
       const response = await unsplash.get('https://api.unsplash.com/search/photos?client_id',{
            params:{
                query:term
            },
            headers:{
                Authorization:'Client-ID 6543208103a127f020ea739187b15818bbe19446d9e70d8fdaba296e0a548d07'
            }
        })
        // .then((response) => {
        //     console.log(response.data.results)
        // });
        // console.log(response.data.results);
        this.setState({images:response.data.results})
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <h1 style={{textAlign:"center",backgroundColor:"white",padding:"20px",borderRadius:"10px"}}>Start your search for the highest quality pictures</h1>
                <SearchBar onSubmit= {this.onSearchSubmit} />
                Found: {this.state.images.length} images.
                <ImageList images={this.state.images}/>
            </div>
        );
    };
}

export default App;