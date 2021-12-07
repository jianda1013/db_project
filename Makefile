DC=docker-compose
MC=api

all:start

init: ## Init the project after a git clone
	@echo "INIT PROJECT"
	@echo "Copying .env.dist in .env"
	@cp .env.dist .env
	@sed -i "s@SECRET_TO_CHANGE@`tr -dc A-Za-z0-9_ < /dev/urandom | head -c 8192 | xargs`@g" .env
	@sed -i "s@NODE_ENV=@NODE_ENV=development@g" .env
	@sed -i "s@TIMEZONE=@TIMEZONE=8@g" .env
	@echo ".env: \n"
	@cat .env
	@echo "\n"
	@echo "Copying .env.mysql.dist in .env.mysql"
	@cp .env.mysql.dist .env.mysql
	@echo "\n"

start: ## Build and launch the project in background
	@echo "Launch dettached projet and build\n"
	$(DC) up -d --build

clean: ## Stop and delete the project stack
	$(DC) down

logs: ## Attach to standard output of containers (to see logs)
	$(DC) -f docker-compose.yml logs -f $(MC)

re: clean start

exec: ## Execute command inside api container, need to use command=
	$(DC) exec $(MC) sh
