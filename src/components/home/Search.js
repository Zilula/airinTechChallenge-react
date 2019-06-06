import React, { PureComponent } from 'react';
import { getAllQuestions } from '../../services/API';
import Question from '../question/Question';
import { questionsRef, answersRef } from '../../services/firebase';



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


        const key = questionsRef.doc().id;
        questionsRef.add({
            id: key,
            question: 'Favorite rap artist?'
        })
            .then(function() {
                answersRef.add({
                    questionId: key,
                    answer: 'BIGGIE SMALLS'
                })
                    .catch(function(error) {
                        console.error('Error adding document: ', error);
                    });
            })
            .catch(function(error) {
                console.error('Error adding document: ', error);
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
                    this.setState({ filtered: filter });
                });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }



    render() {
        const { keyword } = this.state;
        const listOfQuestions = this.state.filtered.map(question => {
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
