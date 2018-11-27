import React, {Component} from 'react';

class Search extends  Component {

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
        const {value, onChange, onSubmit, children} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input type='text' value={value} onChange={onChange}
                       ref={(node) => {
                           this.input = node
                       }
                       }/>
                <button type='submit'>{children}</button>

                <Search
                    value={this.state.term}
                    onChange = {this.onSearchChange}
                    onSubmit={this.onSearchSubmit}>
                    Find Walk</Search>
                <SearchResults searchResults={this.state.searchResults}/>
                {/*<WalkDetails walk={selectedWalk}/>*/}
            </form>
        )
    }

    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }

}

const SearchResults = ({searchResults}) =>
{

    return null;
};

const WalkList = () =>
    <div>
        <span>List of all walks</span>
    </div>;


export default Search;