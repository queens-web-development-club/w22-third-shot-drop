# Running the code
## Locally
To run the website locally, follow the following steps:
- `npm install` to install site dependencies
- Configure the .env file (see below)
- In a terminal, do `node backend.js`
- `npm start` to start the website in local mode.

## For hosting 
To host your website, do the following:
- `npm run build` to get the production files for your website
- Reference the [documentation](https://create-react-app.dev/docs/deployment/#static-server) on how to serve the website on your server.
- The backend.js has to be started separately.

# Configuration
## Adding images to the carousel on the About Page
- Open the `src/Carousel.js` file
- Look for the `slides` JSON object
- Add data to the object in the same format

## .env configuration
- Make a copy of the `.env.example` and call it `.env`
- Fill in the details, as required
Keys | Values | Description
--- | --- | ---
REACT_APP_GMAIL_USER | eg. john.doe@gmail.com | Your gmail email address
REACT_APP_GMAIL_PASS | password | Your gmail password
REACT_APP_CLIENT_EMAIL | eg. john.doe2@gmail.com | The email where you want to be notified about new bookings

*NOTE:* You need to configure your `.env` file, or else the lesson sign up page on the website will not work.
