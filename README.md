# Postchat API

API-driven chat for an API-driven world.

You won't find any message input boxes here... make a POST request!

Built in Node/Express/Typescript

### Pre-reqs

- node
- yarn

### Development

#### Install

`yarn install`

#### Start dev server

`yarn dev`

#### Data

This API uses a free MongoDB via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to persist data.

If you would like to create your own database for local testing or a fork of this API, [create an account](https://www.mongodb.com/cloud/atlas) and create a new cluster using the defaults.

Once your cluster is created, click the `CONNECT` button and follow the instructions for connecting a db instance to an application. Be sure to whitelist your IP address. You will be asked to create a user with a password - jot this down. You will need to supply these credentials in the url for MONGO_URI variable in this project's `.env` file.
