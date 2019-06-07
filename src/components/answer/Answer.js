import React from 'react';
import PropTypes from 'prop-types';
import styles from './Answer.css';

function Answer({ answer }) {
    return (
        <>
            <li className={styles.Body}>
                <span id="icon">A.</span><p>{answer.answer}</p>
            </li>
        </>
    );
}

Answer.propTypes = {
    answer: PropTypes.object,
};

export default Answer;

