### MongoDB

exec into DB container, and run:</br>
mongo -u "username" -p "password" -> username and password are in the docker-compose.yml file</br>

## Some mongoDB commands:

db -> shows what db you are connected to </br>
use my-db -> creates a new DB callded my-db </br>
show dbs -> shows all dbs </br>
db.books.insert({"name": "harry"}) -> creates a books collection and inserts into it </br>

### Docker Compose commands

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d </br>
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v </br>

### Tips for EC2 Instance

Use the link to install docker on EC2 instance : <li>https://www.lewuathe.com/how-to-install-docker-in-amazon-linux.html </li> </br>

Add rule to security group to allow traffic to EC2 instance </br>

Command to ec2 into instance: </br>
ssh -i "learn-docker.pem" ec2-user@ec2-34-222-2-234.us-west-2.compute.amazonaws.com </br>

### Use Docker-compose to build image and push image to docker-hub </br>

# The name of the docker image needs to be the same as the docker-hub repo </br>

docker image tag post-app-docker_node-app zsaee060/node-app </br>

# On dev machine: Build and push node image </br>

docker-compose -f docker-compose.yml -f docker-compose.prod.yml build node-app </br>
docker-compose -f docker-compose.yml -f docker-compose.prod.yml push node-app </br>

# On prod machine: Pull New Image and Call docker-compose up again </br>

docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull node-app
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
