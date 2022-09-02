# Docker skills challenge

This is a simple self-challenge to test and show docker skills.

## The challenge

This challenge consists of several sections. Each section is a separate branch in this repository. With each achievement, a pull-request is made to the master branch. The master branch contains the incremental final solution.

## Section 1: Create a simple Node.js application

The first section is to create a simple Node.js application under the folder `node-server` of this repository. The application should be able to run on port `3000` and should respond to the following routes:

- GET `/status` - should respond with a simple string: `"NodeJs server is online"`

## Section 2: Containerize the application

The second section is to containerize the previous application. The application should be able to run on port on `3030`. This means that:

- A GET request to `localhost:3030/status` should have the same response of the previous [section](#section-1-create-a-simple-nodejs-application).


## Section 3: Create a second server

The third section is to create a second server under the folder `node-server-2` of this repository. The application should be able to run on port `4000` and should respond to the following routes: 

- GET '/status' - should respond with a simple string: `"Hello from server 2. NodeJs server 2 is online"`

## Section 4: Containerize the second server

The fourth section is to containerize the previous application. The application should be able to run on port on `4040`. This means that:

- A GET request to `localhost:4040/status` should have the same response of the previous [section](#section-3-create-a-second-server).

## Section 5: Run both servers

The fifth section is to run both servers. This means that both conditions of the previous [section 2](#section-2-containerize-the-application) and [section 4](#section-4-containerize-the-second-server) should be met:

- A GET request to `localhost:3030/status` should have the same response of the previous [section 2](#section-2-containerize-the-application).
- A GET request to `localhost:4040/status` should have the same response of the previous [section 4](#section-4-containerize-the-second-server).

## Section 6: Run both servers with docker-compose

The sixth section is to run both servers with docker-compose. This means that both conditions of the previous [section 5](#section-5-run-both-servers) should be met.

## Section 7: Build a reverse proxy server with Nginx

The seventh section is to build a reverse proxy server with Nginx. This means that:

- A GET request to `localhost/server-1/status` should have the same response of the previous [section 2](#section-2-containerize-the-application).

- A GET request to `localhost/server-2/status` should have the same response of the previous [section 4](#section-4-containerize-the-second-server).