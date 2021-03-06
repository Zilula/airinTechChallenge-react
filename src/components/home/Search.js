import React, { PureComponent } from 'react';
import API from '../../services/API';
import Question from '../question/Question';
import styles from './Search.css';

export default class Search extends PureComponent {
    state = {
        keyword: '',
        results: [],
        page: 1,
        showPrev: true
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
        if(prevState.keyword !== this.state.keyword) {
            this.setState({ page: 1 });
            API.getQuestions(this.state.page, this.state.keyword)
                .then(res => {
                    this.setState({ results: res, showPrev: false, page: 1 });
                });
        }
        if(prevState.page !== this.state.page) {
            API.getQuestions(this.state.page, this.state.keyword)
                .then(res => {
                    this.setState({ results: res, showPrev: true });
                });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { keyword, results, showPrev, page } = this.state;
        const listOfQuestions = results.map((question, i) => {
            return <li key={i}><Question details={question} /></li>;
        });
        return (
            <>
                <div className={styles.Body}>
                    <h1>&quot;Gettin jiggy wit it&quot; - Will Smith</h1>
                    <input placeholder="Search for something..." name="keyword" value={keyword} onChange={this.handleSearch} />
                    <section>
                        {page > 1 && showPrev && < button onClick={this.decrementPage}>PREVIOUS</button>}
                        {results.length >= 20 && <button id="button" onClick={this.incrementPage}>NEXT</button>}
                    </section>

                    <ul> {listOfQuestions}</ul>
                </div>
            </>
        );
    }
}
