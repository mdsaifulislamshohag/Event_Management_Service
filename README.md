# Event_Management_Service


## Installation

* npm install
* npm start
* visit `http://localhost:5000/api/`
 


## Sweggar API Documentation

* url `http://localhost:5000/api-docs/`



## Event List with pagination

* Example URL: `http://localhost:5000/api/events?page=1&limit=10`
* Mthod: GET
* Query Parameters : page & limit


## Event Details By event Id

* Example URL: `http://localhost:5000/api/events/1`
* Mthod: GET
* Param : event_id



## Workshop List By event Id

* Example URL: `http://localhost:5000/api/workshops/1`
* Mthod: GET
* Param : event_id



## Workshop Details by workshop Id

* Example URL: `http://localhost:5000/api/workshops/detail/2`
* Mthod: GET
* Param : workshop_id


## workshop reservation by email

* Example URL: `http://localhost:5000/api/reservations`
* Mthod: GET
* Body Parameters : {
    "name": "user1",
    "email":"username4@gmail.com"
}

