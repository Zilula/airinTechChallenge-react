import React from 'react';
import PropTypes from 'prop-types';
import API from '../../services/API';
import Answer from '../answer/Answer';
import styles from './QuestionDetail.css';
import { Link } from 'react-router-dom';


export default class QuestionDetail extends React.PureComponent {

    state = {
        id: this.props.match.params.id,
        answers: [],
        question: ''

    };

    componentDidMount() {
        API.getAnswers(this.state.id)
            .then(res => {
                this.setState({ answers: res });
            });

        API.getQuestion(this.state.id)
            .then(res => {
                this.setState({ question: res[0].question });
            });
    }

    render() {
        const listOfAnswers = this.state.answers.map((answer, i) => {
            return <Answer key={i} answer={answer} />;
        });
        return (
            <>
                <div className={styles.Body}>
                    <h1> Do I have the answer you&apos;re looking for?</h1>
                    <div>
                        <h2> <span id="icon">Q.</span>{this.state.question}</h2>
                    </div>

                    <ul>{listOfAnswers}</ul>
                    <Link to={'/'}>
                        <button>HOME</button>
                    </Link>
                </div>
            </>
        );
    }

}



QuestionDetail.propTypes = {
    match: PropTypes.object
};


