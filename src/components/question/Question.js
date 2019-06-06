import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Question({ details }) {
    const { question, id } = details;

    return (
        <>
            <Link to={`/question/${id}`}>
                <h2>{question}</h2>
            </Link>
        </>

    );
}

Question.propTypes = {
    details: PropTypes.object,
};

export default Question;

