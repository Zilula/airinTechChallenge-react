import React from 'react';
import renderer from 'react-test-renderer';
import Question from './Question';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Question component tests', () => {
    it('renders the Question component correctly', () => {

        const details = {
            question: 'some question?',
            id: 'some question ID'
        };

        const tree = renderer.create(
            <Router>
                <Question details={details} />
            </Router>
        );
        expect(tree).toMatchSnapshot;
    });
});
