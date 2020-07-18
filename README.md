# cynorlabs-BE

This is the Backend built with node, express, and SQLite database
General endpoint 👉 https://form-monitor.herokuapp.com/

POST 👉 Login endpoint 👉 https://form-monitor.herokuapp.com/user/login

<!-- The username and password are required to login -->

POST 👉 Register endpoint 👉 https://form-monitor.herokuapp.com/user/register

<!-- username, password, and the user must specify doctor/manager -->

GET 👉 Endpoint for getting forms 👉 https://form-monitor.herokuapp.com/forms

<!-- Only an authenticated user and Manager can retrieve forms submitted by doctors -->

POST 👉 Endpoint for adding a new form forms 👉 https://form-monitor.herokuapp.com/forms

<!-- All users can add a new form as long as they are authenticated -->

DELETE 👉 Endpoint for deleting forms 👉 https://form-monitor.herokuapp.com/forms/:id

<!-- Only a Manager can delete forms -->
