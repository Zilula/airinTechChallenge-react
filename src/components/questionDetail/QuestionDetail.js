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
                res.get().then(function(querySnapshot) {
                    
                    querySnapshot.forEach(function(doc) {
                        const answer = doc.data();
                        this.state.answers.push(answer);
                        console.log(doc.id, ' => ', doc.data());
                    });

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


