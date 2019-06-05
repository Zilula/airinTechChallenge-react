import React from 'react';
import { questionsRef, answersRef } from '../../services/firebase';
import { getAllQuestions } from '../../services/API';


export default class Home extends React.PureComponent {
  state = {
      questions: []
  }
  componentDidMount() {
      getAllQuestions()
          .then(res => {
              this.setState({ questions: res });
          });
      questionsRef.add({
          question: 'Favorite rap artist?'
      })
          .then(function(docRef) {
              answersRef.add({
                  questionId: docRef.id,
                  answer: 'BIGGIE SMALLS'
              })
                  .catch(function(error) {
                      console.error('Error adding document: ', error);
                  });
          })
          .catch(function(error) {
              console.error('Error adding document: ', error);
          });
  }


  render() {
      const listOfQuestions = this.state.questions.map(question => {
          return <li key={question.question}>{question.question}</li>;
      });
      return (
      <>
        <h1> Hello from the home component</h1>
        <ul>
            {listOfQuestions}
        </ul>
      </>
      );
  }
}
