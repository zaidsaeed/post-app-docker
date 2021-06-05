### Dockerignore file

Include all the files that you dont need in the app, this includes your node_modules foler

### Commands for building image and running container

when running docker run -p 'port that we would like to open for the outside world to access our host machine at' : 'port on the container that expects traffic'

### Running a container commands

docker build . -t image-name
docker run -d -p 5000:2000 --name node-app image-name
docker exec -it container-name bash

docker run -v pathtoFolderonLocalMachine:pathtoFolderOnContainer -d -p 5000:2000 --name node-app image-name

### Running a container with a bind mount volume

The problem with only using a bind mount, is that the local node_modules directory takes over the created node_modules directory on the comtainer. An anonymous volume is needed to keep the node_modules directory on the container secure.

## command shell

docker run -v %cd%:/app -d -p 5000:2000 --name node-app image-name

## powershell

-v ${pwd}

## mac/linux

-v $(pwd)

### Running a container with a bind mount volume and an anonymous volume

docker run -v %cd%:/app:ro -v /app/node_modules -d -p 5000:2000 --name node-app image-name

### Running a docker container and passing an environment variable

docker run -v %cd%:/app -v /app/node_modules --env PORT=4000 -d -p 5000:4000 --name node-app image-name

## Load env vars from file

docker run -v %cd%:/app -v /app/node_modules --env-file ./.env -d -p 5000:4000 --name node-app image-name

### stopping a container

docker rm container-name -fv
docker rmi image-name

## Removing unused volume

docker volume ls
docker volume prune

### Docker-compose

docker-compose only rebuilds a new image if one DOES NOT already exist, the --build command is needed to force a new image to be built

docker-compose up -d --build
