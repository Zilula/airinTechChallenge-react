import React from 'react';
import PropTypes from 'prop-types';
import { getAnswers } from '../../services/API';
import Answer from '../answer/Answer';

export default class QuestionDetail extends React.PureComponent {

    state = {
        id: this.props.match.params.id,
        answers: []
    };

    componentDidMount() {
        getAnswers(this.state.id)
            .then(res => {
                res.get()
                    .then(function(querySnapshot) {
                        const newArray = [];
                        querySnapshot.forEach(function(doc) {
                            const answer = doc.data();
                            newArray.push(answer);
                        });
                        return newArray;
                    })
                    .then(array => {
                        this.setState({ answers: array });
                    });
            });
    }

    render() {
        console.log(this.state.answers);

        const listOfAnswers = this.state.answers.map(answer => {
            return <Answer key={answer.questionId} answer={answer} />;
        });
        return (
            <>
                <h1> QUESTION DETAIL</h1>
                <h2>{this.state.id}</h2>

                <ul>{listOfAnswers}</ul>
            </>
        );
    }

}



QuestionDetail.propTypes = {
    match: PropTypes.object
};


