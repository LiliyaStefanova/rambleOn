import React, {Component} from 'react';
import {Table} from 'reactstrap';
import Search from './Search'

export default class WalkList extends Component{


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


    render(){
        const { term, searchResults, selectedWalk, error, isLoading } = this.state;
        if(error){
            return <p>Something went wrong</p>
        }
        return(
            <div>
                <Search
                    value={term}
                    onChange={this.onSearchChange}
                    onSubmit={this.onSearchSubmit}>
                    Search
                </Search>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Distance</th>
                            <th>Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Wild Atlantic Way</td>
                            <td>Cork</td>
                            <td>Galway</td>
                            <td>500</td>
                            <td>12/05/2018</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

