web_port := 8080
docker_port := 8080
image_name := "homepage"
container_name := "homepage"

pull:
	@echo "Pulling changes from GitHub"
	@git pull origin master

build:
	@echo "Building Docker image"
	@docker build -t $(image_name) .

run:
	@echo "Running Docker container on port $(web_port)"
	@docker run -d --name $(container_name) -p $(web_port):$(docker_port) $(image_name) 