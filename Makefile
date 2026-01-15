web_port := 4000
docker_port := 4000
image_name := "frontend"
container_name := "frontend-container"

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

cleanup:
	@echo "Cleaninig Docker cache"
	@docker system prune --all --force

update: pull build stop run cleanup

dev:
	@echo "Running on Windows"
	@npm run dev