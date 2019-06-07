import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Search component tests', () => {
    it('renders the Search component correctly', () => {

        const tree = renderer.create(
            <Router>
                <Search />
            </Router>
        );
        expect(tree).toMatchSnapshot;
    });
});
