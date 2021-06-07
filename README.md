### MongoDB

exec into DB container, and run:
mongo -u "username" -p "password" -> username and password are in the docker-compose.yml file

Some mongoDB commands:
db -> shows what db you are connected to
use my-db -> creates a new DB callded my-db
show dbs -> shows all dbs
db.books.insert({"name": "harry"}) -> creates a books collection and inserts into it

### Docker Compose commands

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
