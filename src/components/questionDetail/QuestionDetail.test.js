import React from 'react';
import renderer from 'react-test-renderer';
import QuestionDetail from './QuestionDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('QuestionDetail component tests', () => {
    it('renders the QuestionDetail component correctly', () => {

        const match = {
            params: {
                id: 'someID'
            }

        };

        const tree = renderer.create(
            <Router>
                <QuestionDetail match={match} />
            </Router>
        );
        expect(tree).toMatchSnapshot;
    });
});
