# Invoice Web Application

A web application to generate and send/download invoices, receipts,
estimates, quotations and bills via email
[![YouTube Video](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=Irx9HKLQPkE)
----

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Client](#client)
      - [Server](#server)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  * [Troubleshooting](#troubleshooting)
  * [Author](#author)


## Introduction
This is a side project I've been working on. A full stack invoicing application made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed for freelancers and small businesses, but can be used for almost any type of business need. With this application, you can send beautiful invoices, receipts, estimates, quotes, bills etc to your clients. Jump right off the [Live App](https://invoice.alokjha.live/) and start sending invoice or download the entire [Source code](https://github.com/codrAlxx/invoice-webapp) and run it on your server. This project is something I've been working on in my free time so I cannot be sure that everything will work out correctly. But I'll appreciate you if can report any issue.


![Invoice Dashboard](https://res.cloudinary.com/dsw2tkyc8/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689109253/Invoice_it3kdd.jpg?_s=public-apps)
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
![Docker](https://res.cloudinary.com/dsw2tkyc8/image/upload/v1689116664/docker_rptcyn.png)
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- create a .env file in the root of your directory.
- Supply the following credentials

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


CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY= 
CLOUDINARY_API_SECRET=
```


#### Google Auth
To get your Google ClientID for authentication, go to the [credential Page ](https://console.cloud.google.com/apis/credentials) (if you are new, then [create a new project first](https://console.cloud.google.com/projectcreate) and follow the following steps;

- Click Create credentials > OAuth client ID.
- Select the Web application type.
- Name your OAuth client and click Create
- Remember to provide your domain and redirect URL so that Google identifies the origin domain to which it can display the consent screen.
- In development, that is going to be `http://localhost:8080` and `http://localhost:8080/api/v1/auth/google/redirect`
- Copy the Client ID and assign it to the variable `GOOGLE_CLIENT_ID` and client secret `GOOGLE_CLIENT_SECRET` in your .env file

#### MongoDB
I am are using Mongo Express in production. is an interactive lightweight Web-Based Administrative Tool to effectively manage MongoDB Databases.
- The databse is running on port `8081`.
- We need to Provide credentials for the root user `MONGO_ROOT_USERNAME` and `MONGO_ROOT_PASSWORD` in .env file which will be used as `ME_CONFIG_MONGODB_ADMINUSERNAME` and  `ME_CONFIG_MONGODB_ADMINPASSWORD` yml file.
- For logging in as user the default Username `ME_CONFIG_BASICAUTH_USERNAME` is `admin` and password `ME_CONFIG_BASICAUTH_PASSWORD` is `admin123456`.
- You can change the basic user credentials in `local.yml` file of the root directory.

#### Cloudinary
To get your Cloudinary and cloud name `CLOUDINARY_CLOUD_NAME` and credentials for it go to [Cloudinary](https://cloudinary.com/) and register for a free account. For further information on how to get your API keys go to the [credential Page ](https://cloudinary.com/documentation/cloudinary_credentials_tutorial). You can further use AWS S3 Bucket or any other service as per your choice.

#### Mailhog
To Test emails in a local development environment i have utilized mailhog. To see all the mails go to port 8025 on localhost.

### NGINX REVERSE PROXY
We have the express backend Running on port 1997 and frontend running on port 3000. For Development as well as production we want the backend and frontend to communicate on a single port. Our Nginx Reverse Proxy runs on port 80 and servers our website on port 8080. Now when a browser make a request it is not directly sent to the application rather sent to the Nginx server and it forwards the request to the application. 
This is also basically the same that will run on the servers.

Locally, all that we need is essentially the following `nginx.conf ` to serve the static assets from our front end project directory and proxy /api/v1/ requests over to the Node.js apps



### DOCKER
Using docker is simple. Just use the following MAKE commands.
After setting up all your envoirnment variables and credentials. To spin up all the containers you can use the make commands or manually type your command in the terminal. The following commands have been added.


- - - -
_To Build all the containers and remove containers which were created in a previous run :_
```javascript
   make build
```
_To start and run the entire app:_
```javascript
   make up
```
_To stop all the containers and remove them:_
```javascript
   make down
```
_To show logs of all the containers:_
```javascript
   make show-logs
```
_To show logs of all the client side:_
```javascript
   make show-logs-client
```
_To show logs of all the server side:_
```javascript
   make show-logs-api
```
_To show all the created volumes:_
```javascript
   make  volume
```
_To echo the current user:_
```javascript
   make  user
```
- - - -




## Production Setup
In the .env Supply and change the following credentials

```
NODE_ENV = production
DOMAIN=
MONGO_URI= 
MAILGUN_API_KEY=
MAILGUN_DOMAIN=
```

- Change the NODE_ENV to production
- Provide Your Domain Name
- Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your `MONGO_URI`
- Remember to change your domain and redirect URL so that Google identifies the origin domain to which it can display the consent screen
- I am using mailgun to send outgoing emails through SMTP on the server. You can read more about it on [Mailgun ](https://support.cloudways.com/en/articles/5131015-how-to-configure-mailgun-smtp)


In production I'm Using NGINX Proxy Manager to handle reverse proxies and also provide SSL certificate. You can use `proxy.yml` file to set up your nginx docker container and i used Portainer to manage these containers. Also i have provided the bash script file `digital_ocean_server_deploy.sh` which exports the latest version of mater branch to a `project.tar` file and uploads the project.tar file to server and cleans up /app directory. Further it rebuilds the docker image by running `production.yaml` file.


## Author

- Github: [@codrAlxx](https://github.com/codrAlxx)
- Linkedin: [@thealokjha](https://www.linkedin.com/in/thealokjha/)
- Email: [@email](mailto:alok04jhak@gmail.com)
