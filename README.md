# Concept:

A React application built for Airin's web technical challenge. The goal was to render any number of questions and the associated answers to each question.

View the [deployed site](https://musing-bhaskara-1c426e.netlify.com/)




## Getting Started

1. Clone and download [GitHub repo](https://github.com/Zilula/airinTechChallenge-react)
1. Install dependencies:\
   `npm i`

1. Run scripts:\
   `npm run lint`\
   `npm run pretest`\
   `npm run test`\
   `npm run test:watch`\
   `npm run start` (start live server with hot reload)\
   `npm run build` (build application into disc folder for deployment)\


Technologies 

 - React
 	- I used React to show competencies in a modern framework and general component architecture. Supplemented React with react-router-dom to allow linking/unique paging. 
 -	Firebase
	- Rather than having to spin up a Node backend, a Mongo database and deploy to Heroku, Firebase came with most of the functionality I need for the app. The data structure was fairly flat, with just two collections so using Firestore made sense. Additionally, the docs are good and the SDK is easy to use. There where some limitations when it came to querying which I will discuss later.
 -	Travis CI
	- For easy deployment to Netlify.
 -	Eslint
	 -	A basic linting tool to reinforce consistent formatting.
 -	Babel
	 -	Used to make the application backwards compatible with previous versions of JS. 
 -	Webpack
	 -	A standard bundling/build tool to build and deploy the application.
 -	Jest
	 -	Testing library to test that React components will render properly given a set of props.
 -	Chance
	 -	Used to generate seed data. 
 -	Normalize
	 -	Remove built in browser CSS. 
