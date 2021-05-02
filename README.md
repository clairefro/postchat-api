# Postchat API

API-driven chat for an API-driven world.

You won't find any message input boxes here... make a POST request!

Built with Node/Express/Typescript/MongoDB

### Pre-reqs

- [node](https://nodejs.org/en/download/)
- [yarn (1.x)](https://classic.yarnpkg.com/en/docs/install/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Use a node version manager such as [`n`](https://github.com/tj/n) to switch `node` versions to `16.x`. For example:

`n 16.0.0`

### Development

#### Install

`yarn install`

#### Copy env vars

Copy the env defaults

`cp .env.default .env`

Then fill in the `MONGO_URI` value with a valid URI. (see [Data](#data))

#### Start dev server

`yarn dev`

The dev server serves typescript files directly via `ts-node`, and automatically reloads when any file changes are made in `src`.

#### <a name="data"></a>Data

This API uses a free MongoDB cluster via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to persist data.

##### Use exisiting dev db

If you would like to use the exisitng development database, contact @clairefro for the credentials.

##### Create your own cluster

If you would like to create your own database for local testing or a fork of this API, [create an account](https://www.mongodb.com/cloud/atlas) and create a new cluster using the defaults.

Once your cluster is created, click the `CONNECT` button and follow the instructions for connecting a db instance to an application. Be sure to whitelist your IP address. You will be asked to create a user with a password - jot this down. You will need to supply these credentials in the url for MONGO_URI variable in this project's `.env` file.

### Deployment

To deploy to Heroku

1. Request access as a collaborator on the postchat-api github project (contact @clairefro)
1. Request access as a collaborator on the postchat-api heroku project (contact @clairefro)
1. Ensure your latest changes are merged into `main` and you've pulled the latest changes
1. `yarn deploy`
