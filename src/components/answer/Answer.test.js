import React from 'react';
import renderer from 'react-test-renderer';
import Answer from './Answer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Answer component tests', () => {
    it('renders the Answer component correctly', () => {

        const answer = {
            answer: 'some answer',
            questionId: 'somequestionId'
        };
        const tree = renderer.create(
            <Router>
                <Answer answer={answer} />
            </Router>
        );
        expect(tree).toMatchSnapshot;
    });
});

