# Welcome to Flights and Search

## Project setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the dowonloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_PASSWORD>",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once You've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One Airport can have many flights, but a flight belongs to one airport

## Table

### City -> id, name, createdAt, updatedAt

### Airport -> id, name, address, city_Id, created_At, updated_At

      Relationship -> City has many airports and Airports belongs to a city (One to Many)

```
npx sequelize model:generate --name Airport --attributes name:string,address:string,cityId:integer
```
