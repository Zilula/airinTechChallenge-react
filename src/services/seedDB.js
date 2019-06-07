import { questionsRef, answersRef } from './firebase';
import Chance from 'chance';

const chance = new Chance();


const seedDataBase = () => {
    const TOTAL_QUESTIONS = 55;
    const TOTAL_ANSWERS_PER_QUESTION = 4;

    [...Array(TOTAL_QUESTIONS)].forEach(() => {
        const key = questionsRef.doc().id;
        questionsRef.add({
            id: key,
            question: chance.sentence()
        })
            .then(function() {
                [...Array(TOTAL_ANSWERS_PER_QUESTION)].forEach(() => {
                    answersRef.add({
                        questionId: key,
                        answer: chance.sentence()
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

