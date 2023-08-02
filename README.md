  // Role based Architecture
  -src/
    index.js//server
    models/
    controller/
    middleware/
    services/
    utils/
    config/
    repository/


    -tests/[later]
    -static/
    -temp/

// Service based Architecture

- flights
    /models
    /controller
-search
    /models
    /controller


## Welcome To Flight Service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same as of your root directory of the download project

-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

````
{
   "development": 
   {
    "username": "root",
    "password": "Harekrishna@7",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


`````
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
```

//Below command is use for create model and migration 
`npx sequelize model:generate --name City --attributes name:String`
`npx sequelize db:create`

## DB Design

- Airplane Table 
- Flight 
- Airport 
- City


- A Flight belongs to an airplane but one airplane can be used in mulitple flights 
flights
- A city has many airports but one airport belongs to a city 
- One airport can have many flights, but a flights belongs to one airport


## Tables

### City-> id,name,created_at, updated_at
### Airport -> id,name,address,city_id,created_at, updated_at

Relationship-> City has many airports and Airport belongs to a city(one to many)