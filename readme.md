# Invoice Web Application
A web application to generate and send/download invoices, receipts,
estimates, quotations and bills via email
----

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Client](#client)
      - [Server](#server)
      - [Database](#database)
  * [Troubleshooting](#troubleshooting)
  * [Configuration and Setup](#configuration-and-setup)
  * [Author](#author)

![Invoice Dashboard](https://res.cloudinary.com/dsw2tkyc8/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689109253/Invoice_it3kdd.jpg?_s=public-apps)

## Introduction
This is a side project I've been working on. A full stack invoicing application made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed for freelancers and small businesses, but can be used for almost any type of business need. With this application, you can send beautiful invoices, receipts, estimates, quotes, bills etc to your clients. Jump right off the [Live App](https://invoice.alokjha.live/) and start sending invoice or download the entire [Source code](https://github.com/codrAlxx/invoice-webapp) and run it on your server. This project is something I've been working on in my free time so I cannot be sure that everything will work out correctly. But I'll appreciate you if can report any issue.


## Key Features
- Send invoices, receipts, estimates, quotations and bills via email
- Generate and send/download pdf invoices, receipts, estimates, quotations and bills via email
- Token based authentication with reuse detection and refresh token rotation and Social Authentication with Google
- Email sending with Mailhog for development and Mailgun for production
- Multiple user registration alongside Modern Redux with ReduxToolkit and ReduxToolkit Query
- Payment history section for each invoice with record about payment date, payment method and extra note.
 - Clean admin dashboard for displaying all invoice statistics including total amount received, total pending, recent payments, total invoice paid, total unpaid and partially paid invoices. 
- Custom Logging in NodeJS with Morgan & Winston and utilized Cloudinary for Image upload
- Setup NGINX proxy manager and used Portainer to manage containers in a production environment within a Docker Container
- Served a MERN web app securely using HTTPS and SSL on DigitalOcean Servelet
  
## Technologies used
This project was created using the following technologies.

#### Client

- React JS
- Redux (for managing and centralizing application state)
- Modern Redux with ReduxToolkit and ReduxToolkit Query
- React-router-dom (To handle routing)
- Axios (for making api calls)
- Material UI & CSS Module (for User Interface)
- React-Toastify (To display success/error notifications)
- Cloudinary (to allows users to upload their business logo)
- React-google-login (To enable authentication using Google)

#### Server

- Express
- Mongoose
- JWT (For authentication)
- Bcryptjs (for data encryption)
- Nodemailer (for sending invoice via email)
- Html-pdf (for generating invoice PDFs)
- Morgan and Winston
- Mailhog
- Nginx Proxy Manager

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup

### Local Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- create a .env file in the root of your directory.
- Supply the following credentials
- 
```
PORT=1997 
NODE_ENV=development
DB_NAME= DATABASE NAME
SENDER_EMAIL= YOUR SUPPORT EMAIL
DOMAIN =http://localhost:8080

JWT_ACCESS_SECRET_KEY=YOUR SECRET ACCESS
JWT_REFRESH_SECRET_KEY=YOUR REFRESH TOKEN SECRET

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=auth/google/redirect

MONGO_ROOT_USERNAME=
MONGO_ROOT_PASSWORD=


CLOUDINARY_CLOUD_NAME=RESOURCE FOLDER NAME
CLOUDINARY_API_KEY= 
CLOUDINARY_API_SECRET=
```

To get your Google ClientID for authentication, go to the [credential Page ](https://console.cloud.google.com/apis/credentials) (if you are new, then [create a new project first](https://console.cloud.google.com/projectcreate) and follow the following steps;

- Click Create credentials > OAuth client ID.
- Select the Web application type.
- Name your OAuth client and click Create
- Remember to provide your domain and redirect URL so that Google identifies the origin domain to which it can display the consent screen. In development, that is going to be `http://localhost:8080` and `http://localhost:8080/api/v1/auth/google/redirect`
- Copy the Client ID and assign it to the variable `GOOGLE_CLIENT_ID` and client secret `GOOGLE_CLIENT_SECRET` in your .env file

We are going to be using Mongo Express in production. is an interactive lightweight Web-Based Administrative Tool to effectively manage MongoDB Databases. So we need to Provide credentials for `MONGO_ROOT_USERNAME` and `MONGO_ROOT_PASSWORD`. We are going to use these credentials to access our databse running on docker container on port 

To get your Google ClientID for authentication, go to the [credential Page ](https://console.cloud.google.com/apis/credentials) (if you are new, then [create a new project first](https://console.cloud.google.com/projectcreate) and follow the following steps;



### Production Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal
- cd client and create a .env file in the root of your client directory.
- Supply the following credentials

```
REACT_APP_GOOGLE_CLIENT_ID = 
REACT_APP_API = http://localhost:5000
REACT_APP_URL = http://localhost:3000
```

To get your Google ClientID for authentication, go to the [credential Page ](https://console.cloud.google.com/apis/credentials) (if you are new, then [create a new project first](https://console.cloud.google.com/projectcreate) and follow the following steps;

- Click Create credentials > OAuth client ID.
- Select the Web application type.
- Name your OAuth client and click Create
- Remember to provide your domain and redirect URL so that Google identifies the origin domain to which it can display the consent screen. In development, that is going to be `http://localhost:3000` and `http://localhost:3000/login`
- Copy the Client ID and assign it to the variable `REACT_APP_GOOGLE_CLIENT_ID` in your .env file

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```
In the second terminal
- cd server and create a .env file in the root of your server directory.
- Supply the following credentials

```
DB_URL = 
PORT = 5000
SECRET = 
SMTP_HOST = 
SMTP_PORT = 
SMTP_USER = 
SMTP_PASS = 

```

Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your DB_URL

```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```

## Troubleshooting
If you're getting error while trying to send or download PDF,
please run the following in your server terminal.

```
$ npm install html-pdf -g
$ npm link html-pdf
$ npm link phantomjs-prebuilt
```

## Docker

Using docker is simple. Just add the .env contextualized with the docker network.

e.g:

> goes to path "server/.env"
```
DB_URL = mongodb://mongo:27017/arch
PORT = 5000
SECRET = 
SMTP_HOST = 
SMTP_PORT = 
SMTP_USER = 
SMTP_PASS = 
```
> goes to path "client/.env"
```
REACT_APP_GOOGLE_CLIENT_ID = 
REACT_APP_API = http://localhost:5000
REACT_APP_URL = http://localhost
```

And run

```
docker-compose -f docker-compose.prod.yml build

And then

docker-compose -f docker-compose.prod.yml up
```

## Author

- Github: [@codrAlxx](https://github.com/codrAlxx)
- Linkedin: [@thealokjha](https://www.linkedin.com/in/thealokjha/)
- Email: [@email](mailto:alok04jhak@gmail.com)
