# Car Dealer App

This is a Next.js application that allows users to filter vehicles by type and model year, and view the results on a separate page.

## Running the Application

To run the application locally, follow these steps:

1. Clone the repository using the following command:
```
git clone https://github.com/sssgen/developsToday-test/
```
2. Install the dependencies using the following command:
```
npm i
```
3. Start the application using the following command:
```
npm run start
```
4. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Features and Architecture

The application is built using Next.js and features the following:

* A filter page that allows users to select a vehicle name and model year
* A result page that displays the vehicle name and model year based on the selected filter criteria. Should be fetched an vehicle by make ID and model year but, personally for me, using selector with 200 uniqueIDs is not a quite good idea.
* A suspense component that handles loading states for data fetching and component loading
* A UI styled using Tailwind CSS for responsive design and accessibility

## Documentation

The application includes the following documentation:

* A README file that provides an overview of the application's features and architecture
* A `.env.local` file that stores environment variables
* A `.eslintrc.js` file that configures ESLint for code quality and consistency
* A `.prettierrc` file that configures Prettier for code formatting


