



const API = {
    getQuestions(page, searchTerm) {
        return fetch(`https://secure-temple-27525.herokuapp.com/questions/querying/paging?page=${page}&search=${searchTerm}`)
            .then(res => res.json());
    },

    getAnswers(questionId) {
        return fetch(`https://secure-temple-27525.herokuapp.com/answers/${questionId}`)
            .then(res => res.json());
    }
};

export default API;














// import { questionsRef, answersRef } from '../services/firebase';

// export const getAllQuestions = () => {
//     return new Promise(function(resolve, reject) {
//         questionsRef
//             .get()
//             .then(querySnapshot => {
//                 const questions = [];
//                 querySnapshot.forEach(doc => {
//                     questions.push(doc.data());
//                 });
//                 resolve(questions);
//             })
//             .catch((error) => {
//                 console.error('Error getting documents: ', error);
//                 reject(error);
//             });
//     });
// };


// export const getQuestion = (id) => {
//     return new Promise(function(resolve, reject) {
//         questionsRef.where('id', '==', id)
//             .get()
//             .then(querySnapshot => {
//                 const questions = [];
//                 querySnapshot.forEach(doc => {
//                     questions.push(doc.data());
//                 });
//                 resolve(questions);
//             })
//             .catch((error) => {
//                 console.error('Error getting document: ', error);
//                 reject(error);
//             });
//     });
// };


// export const getAnswers = (id) => {
//     return new Promise(function(resolve, reject) {
//         answersRef.where('questionId', '==', id)
//             .get()
//             .then(function(querySnapshot) {
//                 const answers = [];
//                 querySnapshot.forEach(function(doc) {
//                     const answer = doc.data();
//                     answers.push(answer);
//                 });
//                 resolve(answers);
//             })
//             .catch((error) => {
//                 console.error('Error getting documents: ', error);
//                 reject(error);
//             });
//     });

// };





