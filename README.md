# Jutib eCommerce API

> This is an eCommerce API built with Node.js, Express, MongoDB and Jsonwebtoken for authentication

## Features

- User registration and login API
- Product reviews and ratings API
- Top products API
- Product pagination
- User and Admin profile
- Admin product management API
- Admin user management API
- Database seeder (products & users)

## Usage

### Env Variables

Rename the config.env.txt file in the /config folder.

### Install Dependencies

At Jutib folder, run
```
npm install
```

### Run

```
# Run development server
npm run dev

# Run production server
npm run start
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Seed database
npm run data:import

# Destroy database
npm run data:destroy
```

```
Sample User Logins after seeding

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```


