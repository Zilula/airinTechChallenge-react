import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Question.css';

function Question({ details }) {
    const { question, _id } = details;

    return (
        <>
            <div className={styles.Div}>
                <Link className={styles.Link} to={`/question/${_id}`}>
                    <span id="icon">Q.</span>
                    <p id="question">{question}</p>
                </Link>
            </div>
        </>
    );
}

Question.propTypes = {
    details: PropTypes.object,
};

export default Question;

