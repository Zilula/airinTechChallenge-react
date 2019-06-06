import React from 'react';
import PropTypes from 'prop-types';

function Answer({ answer }) {
    return (
        <>
            <h3>Answer Component</h3>
            <p>{answer.answer}</p>
        </>
    );
}

Answer.propTypes = {
    answer: PropTypes.object,
};

export default Answer;

