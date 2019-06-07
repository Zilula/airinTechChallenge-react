import React from 'react';
import PropTypes from 'prop-types';
import { getAnswers } from '../../services/API';
import Answer from '../answer/Answer';
import styles from './QuestionDetail.css';

export default class QuestionDetail extends React.PureComponent {

    state = {
        id: this.props.match.params.id,
        answers: []
    };

    componentDidMount() {
        getAnswers(this.state.id)
            .then(res => {
                this.setState({ answers: res });

            });
    }

    render() {
        console.log(this.state.answers);

        const listOfAnswers = this.state.answers.map(answer => {
            return <Answer key={answer.questionId} answer={answer} />;
        });
        return (
            <>
                <div className={styles.Body}>
                    <h1> Do I have the answer you're looking for?</h1>
                    <ul>{listOfAnswers}</ul>
                </div>
            </>
        );
    }

}



QuestionDetail.propTypes = {
    match: PropTypes.object
};


