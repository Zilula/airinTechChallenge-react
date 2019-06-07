import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Question.css';

function Question({ details }) {
    const { question, id } = details;

    return (
        <>
            <div className={styles.Div}>
                <Link className={styles.Link} to={`/question/${id}`}>
                    <span id="icon">Q.</span>
                    <p>{question}</p>
                </Link>
            </div>
        </>

    );
}

Question.propTypes = {
    details: PropTypes.object,
};

export default Question;

