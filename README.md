# Restraunt API
## Create, Read, Update and Delete restraunt data

available routes and corresponding CRUD operation:

- /users will take you to the user router
---
- POST "/" will create a User with the information you send through the body
- GET "/" will display all the current Users available in the DB
- GET "/display" will display all current Users in a more user friendly manner
- PATCH "/:id" takes the Users id as a route paramater and updates it with the information you send through the body
- DELETE "/:id" takes the User id as a route paramter and deletes it.
---
- /owners will take you to the owners router
---
- POST "/" will create an Owner with the information you send through the body
- GET "/" will display all the current Owners available in the DB
- GET "/display" will display all current Owners in a more user friendly manner
- PATCH "/:id" takes the Owners id as a route paramater and updates it with the information you send through the body
- DELETE "/:id" takes the Oowner id as a route paramter and deletes it.
---
- /locations will take you to the locations router
---
- POST "/" will create a Location with the information you send through the body
- GET "/" will display all the current Locations available in the DB
- GET "/display" will display all current Locations in a more user friendly manner
- PATCH "/:id" takes the Locations id as a route paramater and updates it with the information you send through the body
- DELETE "/:id" takes the Location id as a route paramter and deletes it.
---



## Tech
This API using many different technologies including:

- [MongoDB] - NoSQL document-oriented database program.
- [Express] - Fast, unopinionated, minimalist web framework for Node.js.
- [NodeJS] - is a cross-platform, open-source JavaScript runtime environment.
- [EJS] - Embedded JavaScript templates.
- [JavaScript] - Scripting language that enables you to create dynamically updating content.
- [CSS] - Style sheet language used for specifying the presentation and styling.
