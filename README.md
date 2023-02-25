## HiPT transport project - Backend API

## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Technical Stack

- Language: **NodeJS (16.x), Typescript (4.x)**
- Framework: **NestJS v9**
- DBMS: **MySQL**
- ORM: **TypeORM**
- Logger: **Winston**

## Deploy production

```bash
# 01. Install nvm https://github.com/nvm-sh/nvm
# 02. Install node 16
$ nvm install 16
$ nvm use 16
# 03. Copy enviroment
$ cp .env.example .env
# 04. Edit configs in the .env file
# 06. Install packages
$ npm install
# 07. Build code
$ npm run build
# 08. Running migrations
$ npm run typeorm:run-migrations
# 09. Running code
$ npm run start:prod
# or
$ node dist/src/main
```

## Development documentations

### **Swagger OpenAPI**

```bash
# Set NODE_ENV in .env file other than production
npm run start # => http://{host}:{port}/apidocs
```

### **Postman**

[Postman Documentation]()

Environments:

- [Local env]()
- [Dev env]()
- [Prod env]()

## Project's structure

```ts
+-- migrations                      // Database migration files
+-- src                             // Source files
|   +-- common                        // Common components
|   |   +-- constants                   // General constants
|   |   |   +-- app                       // NestJS application constants
|   |   |   +-- errors                    // Error constants information
|   |   +-- decorators                  // General decorator
|   |   +-- exception-filters           // General exeption filter
|   |   +-- interceptors                // General interceptor
|   |   +-- interfaces                  // General interface
|   |   +-- loggers                     // General logger
|   |   +-- middlewares                 // General middleware
|   |   +-- pipes                       // General pipe
|   |   +-- utils                       // Helper useful features
|   |   +-- validators                  // General validator
|   |   |   +-- image-file.validator.ts   // File upload validator
|   +-- configs                       // Application configs
|   |   +-- constant.config.ts          // Config environment constants
|   |   +-- server.config.ts            // NestJS config. Include Middleware, Pipe, Interceptor, Filter, CORS, ...
|   |   +-- typeorm.config.ts           // Config TypeORM Datasource
|   +-- database                      // Database components
|   |   +-- base                        // TypeORM base components
|   |   |   +-- entity.base.ts            // TypeORM base entity
|   |   |   +-- repository.base.ts        // TypeORM base repository
|   |   +-- interfaces                  // Database interface
|   |   |   +-- pagination.interface.ts   // Pagination interface
|   |   +-- seeders                     // Database seeders. Include seed files
|   |   |   +-- initial.seeders.ts        // Initial seed file
|   |   +-- database.module.ts          // Database module
|   |   +-- database.providers.ts       // Database provider. Define 'DATA_SOURCE' provider
|   +-- modules                       // Define modules in project
|   |   +-- entity                      // Sample module
|   |   |   +-- constants                 // Module's constants
|   |   |   +-- dto                       // Module's data transfer objects
|   |   |   +-- entities                  // Module's entities
|   |   |   +-- factories                 // Module's factories. Support seeding sample data
|   |   |   +-- test                      // Module's unit test files
|   |   |   +-- entity.controller.ts      // Sample controller
|   |   |   +-- entity.module.ts          // Define elements in module
|   |   |   +-- entity.provider.ts        // Sample providers. Include model database provider
|   |   |   +-- entity.repository.ts      // Model database repository
|   |   |   +-- entity.service.ts         // Sample service
|   |   +-- external-services           // 3-party services module
|   +-- app.module.ts                 // Root module in project
|   +-- main.ts                       // Entry point in project
+-- test                            // Integration and e2e test files
+-- .env.example                    // Example environment variables file
```

## Command list

```bash
# Create migration file with filename
$ npm run typeorm:create-migration --name=${file_name}
# Generate migration file with filename from entities (Linux or MacOS)
$ npm run typeorm:generate-migration --name=${file_name}
# Generate migration file with filename from entities (Windows)
$ npm run typeorm:generate-migration:windows --name=${file_name}
# Running migrations
$ npm run typeorm:run-migrations
# Seeding sample data for development environment
$ npm run typeorm:seed
```

## License

Nest is [MIT licensed](LICENSE).
