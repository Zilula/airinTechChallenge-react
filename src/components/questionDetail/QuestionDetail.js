import React from 'react';
import PropTypes from 'prop-types';
import { getAnswers } from '../../services/API';

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
                            console.log(doc.id, ' => ', doc.data());
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
        return (
            <>
                <h1> QUESTION DETAIL</h1>
                <h2>{this.state.id}</h2>
            </>
        );
    }

}



QuestionDetail.propTypes = {
    match: PropTypes.object
};


