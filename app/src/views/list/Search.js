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
    }

}

export default Search;