
# Travel-Booking-Backend-ExpressJS-MongoDB-Vercel

A brief description of what this project does and who it's for


![Logo](https://atiqlab.bigosofts.com/wp-content/uploads/2024/08/rsz_logo.png)


## Deployment

To deploy this project run the following command:

```bash
  git clone https://github.com/bigosofts/Travel-Booking-Backend-ExpressJS-MongoDB-Vercel.git
```

```bash
  cd Travel-Booking-Backend-ExpressJS-MongoDB-Vercel
```

```bash
  yarn install
```

```bash
  yarn start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_USERNAME`
`DATABASE_PASSWORD`
`DATABASE_NAME`
`SECRETKEY_JWT_WEBTOKEN`
`PORT`



## Authors

- [@Abdullah Al Amin](https://github.com/bigosofts)


## Demo

Browse this link to see the backend API in action:

https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app
## API Reference

#### Get all items

```http
  POST https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-somthing
```

| Parameter(body) | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `object` | **Required** |
| `projection` | `object` | **Required**|


#### Create item
```http
  POST https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/create-something
```

| Parameter(header) | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token_travel`      | `string` | **Required**|

| Parameter(body) | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `post_body`      | `object` | **Required**|


#### Update item
```http
  PUT https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/update-something
```

| Parameter(header) | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token_travel`      | `string` | **Required**|

| Parameter(body) | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `post_body`      | `object` | **Required**|


#### Delete item
```http
  DELETE https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/delete-something/${id}
```

| Parameter(header) | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token_travel`      | `string` | **Required**|







## Features

- Backend is seperated. ExpressJS is running on specific port
- Deployed in vercel (Run as Serverless Functions)
- Well Organized Schema
- MongoDB database
- Efficient query
- CREATE, READ, UPDATE and DELETE Api,
- GET, POST, PUT and DELETE method
- Authentication using JWT
- Password encryption
- Check user permission
- Live Socket Implementation



## Support

For support, email bigosofts@gmail.com or contact me on Facebook or LinkedIn. You will find social media link in my github profile


## FAQ

#### How to use this backened api project in my pc?

Download the source code. Make some command that I put it in earlier sections and launch the project. You may need to edit in .env file.

#### Do you provide demo database for this project?

yes, if someone need it, Just knock at me. I will provide you the demo database for running the complete app

#### How Long this project was taken?

To come to this point, It takes 3 months already and still updating the source file is ongoing.

#### Where is the Frontend?

Frontend is also in my github repository. Search for Travel-Booking-Frontend-NextJS-Redux-Vercel for the Frontend of this project


## Tech Stack

**Backend:** NodeJS, ExpressJS, Mongoose, JWT, Bycrypt

**Deployment:** Vercel Serverless. On Production for 6 months
