import React, { PureComponent } from 'react';
import API from '../../services/API';
import Question from '../question/Question';
import styles from './Search.css';

// import seedDataBase from '../../services/seedDB';



export default class Search extends PureComponent {
    state = {
        keyword: '',
        results: [],
        page: 1
    };

    handleSearch = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };


    decrementPage = () => {
        this.setState({ page: this.state.page - 1 });
    };

    incrementPage = () => {
        this.setState({ page: this.state.page + 1 });
    };


    componentDidMount() {
        API.getQuestions(this.state.page, this.state.keyword)
            .then(res => {
                this.setState({ results: res });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.keyword !== this.state.keyword || prevState.page !== this.state.page) {


            API.getQuestions(this.state.page, this.state.keyword)
                .then(res => {
                    this.setState({ results: res });
                });
            // if(this.state.keyword === '') {
            //     this.setState({ filtered: this.state.results });
            // }
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }



    render() {
        const { keyword } = this.state;

        console.log(this.state.results);

        const listOfQuestions = this.state.results.map((question, i) => {
            return <li key={i}><Question details={question} /></li>;
        });
        return (
            <>
                <div className={styles.Body}>
                    <h1>Lets get jiggy with it</h1>
                    <input placeholder="Search for something..." name="keyword" value={keyword} onChange={this.handleSearch} />

                    {this.state.results.length >= 20 && <button onClick={this.incrementPage}>NEXT</button>}
                    {this.state.page > 1 && < button onClick={this.decrementPage}>PREVIOUS</button>}

                    <ul> {listOfQuestions}</ul>
                </div>
            </>
        );
    }
}
