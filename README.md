# live-code-phase2-nugraha

#CRUD backend & Frontend

##How To Run
* NPM install

## REST API

* API Users
Route | HTTP | Description
----- | ---- | -----------
/api/users/signup | POST | Create Users
/api/users/signin | POST | Login Users


* API Articles

Route | HTTP | Description
----- | ---- | -----------
/api/articles | GET | Get All Data
/api/articles/:id | GET | Get One Data
/api/articles | POST | Create Data
/api/articles/:id | PUT | Update Data
/api/articles/:user_id | GET | Get Data By Author
/api/articles/:category | GET | Get Data By Category
/api/articles/:id | DELETE | Delete Data By Id
