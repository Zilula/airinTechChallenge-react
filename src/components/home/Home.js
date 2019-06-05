import React from 'react';
import { getQuotes } from '../../services/futurama';

export default class Home extends React.PureComponent {
    state = {
      quote: []
    }
    componentDidMount() {
      getQuotes('Bender', 3)
        .then(quotes => {
          this.setState({ quote: quotes });
        });
    }
    render() {
      console.log(this.state.quote);
      const listOfQuotes = this.state.quote.map(quote => {
        return <li key={quote.quote}>{quote.quote}</li>;
      }); 
      return (
        <>
            <h1> Hello from the home component</h1>
            <ul>
              {listOfQuotes}
            </ul>
        </>
      );
    }
}
