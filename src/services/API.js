import { questionsRef, answersRef } from '../services/firebase';

export const getAllQuestions = () => {
    return new Promise(function(resolve, reject) {
        questionsRef
            .get()
            .then(querySnapshot => {
                const questions = [];
                querySnapshot.forEach(doc => {
                    questions.push(doc.data());
                });
                resolve(questions);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
                reject(error);
            });
    });
};


export const getAnswers = (id) => {
    return new Promise(function(resolve, reject) {
        resolve(answersRef.where('questionId', '==', id))
            .catch((error) => {
                console.error('Error adding document: ', error);
                reject(error);
            });
    });

};









