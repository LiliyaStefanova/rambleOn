import React, {Component} from 'react';
import WalkDetails from './WalkDetails.js';
import '../App.css';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term:'',
            searchResults:null,
            selectedWalk:null,
            error: null,
            isLoading: false,
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    onClick(){
        console.log('Create Walk Modal');
    }


    onSearchChange(event){
        this.setState({term:event.target.value});
    }

    onSearchSubmit(event){
        const {term} = this.state;
        const cachedWalks =localStorage.getItem(term);
        this.setState({searchResults:cachedWalks});
        event.preventDefault();
    }

    render() {
        const {term,searchResults, selectedWalk, error, isLoading} = this.state;
        if (error) {
            return <p>Something went wrong</p>
        }
        return (
            <div className="main">
                <Search
                    value={term}
                    onChange = {this.onSearchChange}
                    onSubmit={this.onSearchSubmit}>
                    Find Walk</Search>
                <SearchResults searchResults={searchResults}/>
            </div>
        );
    }
}

class Search extends  Component{

    render() {
        const {value, onChange,onSubmit, children} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input type='text' value={value} onChange={onChange}
                       ref={(node) => {this.input = node}
                       }/>
                <button type='submit'>{children}</button>
            </form>
        )
    }

    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }
}

const SearchResults = ({searchResults}) =>
{

    return null;
};




export default Home;
