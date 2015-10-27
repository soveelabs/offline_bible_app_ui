Steps to run the app
=====================
* After cloning the repo, make sure you have docker compose setup.
* Build and install dependencies.
```
docker-compose build
docker-compose run app npm install
```
* Start application
```
docker-compose up
```
* Find the port you app is running on.
```
docker-compose ps
```
