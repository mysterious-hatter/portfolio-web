web_port := 8080
docker_port := 8080
image_name := "homepage"
container_name := "homepage"

pull:
	@echo "Pulling changes from GitHub"
	@git pull origin master

stop:
	@echo "Stopping contatiner $(container_name)"
	@docker stop $(container_name)
	@echo "Removing container $(container_name)"
	@docker rm $(container_name)

build:
	@echo "Building Docker image"
	@docker build -t $(image_name) .

run:
	@echo "Running Docker container on port $(web_port)"
	@docker run -d --name $(container_name) -p $(web_port):$(docker_port) $(image_name)

start: pull build stop run

dev:
	@echo "Running on Windows"
	@go run main.go