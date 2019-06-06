import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import QuestionDetail from '../questionDetail/QuestionDetail';

function Question({ details }) {



    const { question, id } = details;
    console.log(question, id);


    return (
        <>
            <Link to={`/question/${id}`}>
                {/* <Link to={`/${question}/${id}`}> */}
                <h2>{question}</h2>
            </Link>

            <QuestionDetail />
        </>

    );
}

Question.propTypes = {
    details: PropTypes.object,
};

export default Question;

