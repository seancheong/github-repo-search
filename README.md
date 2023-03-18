# Github Repository Search

It is a simple web application that allows you to search for Github repositories using the Github API's [search repositories](https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories). Once you enter a search string, it retrieves a list of matching repositories from the API and displays them on the screen.

The entire application is built using the latest version of React 18 and Typescript, utilizing React hooks to manage state and logic. Besides that, The application also includes unit tests written using Jest and React Testing Library. 

<img src="https://user-images.githubusercontent.com/13078313/226105350-c7e7de57-5ac5-43ad-867b-bd734fd566ea.png" width=50% height=50%>

## Highlights

- Implemented using [React 18](https://react.dev/) and [Typescript](https://www.typescriptlang.org/)
- Make use of [React Query](https://react-query-v3.tanstack.com/) for data fetching
- Added throttling for making API calls
- Added unit tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). p.s. React Hooks codes are not covered in unit tests yet, as the react-hooks from testing-library is no longer supported in React 18
- Responsive designs that can be used in both browser and mobile devices

## TODOs

- Add unit tests for React Hooks
- Add E2E tests using Cypress

## Warning

Please note that the Github API being used in this application is the free version, which has a rate limit of __10 requests per minute__. Therefore, error message will be shown if the rate limit is exceeded. If that happens, you will just need to try the application again later.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
