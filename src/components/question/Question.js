import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Question.css';

function Question({ details }) {
    const { question, id } = details;

    return (
        <>
            <Link className={styles.Link} to={`/question/${id}`}>
                <p>{question}</p>
            </Link>
        </>

    );
}

Question.propTypes = {
    details: PropTypes.object,
};

export default Question;

