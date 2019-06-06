import React, { PureComponent } from 'react';
import { getAllQuestions } from '../../services/API';
import Question from '../question/Question';
// import seedDataBase from '../../services/seedDB';



export default class Search extends PureComponent {
    state = {
        keyword: '',
        results: [],
        filtered: []
    };

    handleSearch = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }
    componentDidMount() {

        // seedDataBase();

        getAllQuestions()
            .then(res => {
                this.setState({ results: res });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.keyword !== this.state.keyword) {
            //filter
            getAllQuestions()
                .then(res => {
                    return res.filter(question => {
                        return question.question.includes(this.state.keyword);
                    });
                })
                .then(filter => {
                    this.setState({ results: filter });
                });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }



    render() {
        const { keyword } = this.state;
        const listOfQuestions = this.state.results.map(question => {
            return <li key={question.question}><Question details={question}/></li>;
        });
        return (
            <>
                <h1> ARTIST SEARCH COMP</h1>

                <label>Search for Artist
                    <input type="text" name="keyword" value={keyword} onChange={this.handleSearch} />
                </label>


                <ul> {listOfQuestions}</ul>
            </>
        );
    }
}
