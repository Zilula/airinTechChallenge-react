import React, { PureComponent } from 'react';
import { getAllQuestions } from '../services/API';

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
        getAllQuestions()
            .then(res => {
                this.setState({ results: res });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.keyword !== this.state.keyword) {

            //filter
            console.log(this.state.questions, 'HELLO WORLD');
            getAllQuestions()
                .then(res => {
                    return res.filter(question => {
                        return question.question.includes(this.state.keyword);
                    });
                })
                .then(filter => {
                    this.setState({ filtered: filter });
                });
        }
    }



    render() {
        const { keyword } = this.state;
        const listOfQuestions = this.state.filtered.map(question => {
            return <li key={question.question}>{question.question}</li>;
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
