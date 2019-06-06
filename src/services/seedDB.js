import { questionsRef, answersRef } from './firebase';

const seedDataBase = () => {
    const TOTAL_QUESTIONS = 100;
    const TOTAL_ANSWERS_PER_QUESTION = 5;

    [...Array(TOTAL_QUESTIONS)].forEach(() => {
        const key = questionsRef.doc().id;
        questionsRef.add({
            id: key,
            question: 'Favorite rap artist?'
        })
            .then(function() {
                [...Array(TOTAL_ANSWERS_PER_QUESTION)].forEach(() => {
                    answersRef.add({
                        
                        questionId: key,
                        answer: 'BIGGIE SMALLS'
                    })
                        .catch(function(error) {
                            console.error('Error adding document: ', error);
                        });
                });
            })
            .catch(function(error) {
                console.error('Error adding document: ', error);
            });

    });

};

export default seedDataBase;

