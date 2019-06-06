import React, { PureComponent } from 'react';
import { getAllQuestions, getFirstPage, getNextPage } from '../../services/API';
import Question from '../question/Question';
import { Input } from './SearchStyles';
import styles from './Search.css';
// import seedDataBase from '../../services/seedDB';



export default class Search extends PureComponent {
    state = {
        keyword: '',
        results: [],
        filtered: [],
        next: null, 
        page: 1
    };

    handleSearch = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    incrementPage = () => {
        this.setState({ page: this.state.page + 1 });

        getNextPage(this.state.next)
            .then(res => {
                console.log('RES', res)
                this.setState({ results: res.questions, filtered: res.questions, next: res.next });
                // console.log('result', res);
            });

    };

    componentDidMount() {

        // seedDataBase();

        // getAllQuestions()
        //     .then(res => {
        //         this.setState({ results: res, filtered: res });
        //     });


        getFirstPage()
            .then(res => {
                console.log(res);
                this.setState({ next: res.next, results: res.questions, filtered: res.questions  });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.keyword !== this.state.keyword) {

            if(this.state.keyword === '') {
                this.setState({ filtered: this.state.results });
            }

            const search = this.state.results.filter(question => {
                return question.question.includes(this.state.keyword);
            });

            this.setState({ filtered: search });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }



    render() {
        const { keyword } = this.state;
        const listOfQuestions = this.state.filtered.map((question, i) => {
            return <li key={i}> <Question details={question} /></li>;
        });
        return (
            <>
                <div className={styles.Body}>
                    <h1>Lets get jiggy with it</h1>
                    <Input placeholder="Search for something..." name="keyword" value={keyword} onChange={this.handleSearch} />

                    <button onClick={this.incrementPage}>NEXT</button>


                    <ul> {listOfQuestions}</ul>
                </div>
            </>
        );
    }
}
