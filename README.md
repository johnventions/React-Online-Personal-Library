# Online Personal Library
This is a single page application (built on React) that provides a way to track a book collection online. The back-end is built on a PHP server that places new entries into a MySQL database. 

This app was created as a way to track all of my daughters books. Live site can be seen at [books.johnventions.com](https://books.johnvnetions.com) but is likely not populated fully.

## Requirements
Running this application requires a PHP server and connection to a MySQL database.  A `creds.php` file and `db.php` file need to be created from the example files. When running locally you'll need to proxy the API calls to your PHP server via the proxy attributes in the `packages.json` file

The database should have a table called "books" with the following fields:

    _id, title, author, date_created


The PHP files are located in the public and public/api folder for the following routes:

#### `/api/get` - Gets the list of books from the database
#### `/api/post` - Adds a new item to the database
#### `/api/delete` - Deletes an entry from the data
#### `/api/signin` - Passes login credentials to the database, which then sets a session variable to keep you logged in

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!


  
