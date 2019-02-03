NODE_MODULES_BIN=./node_modules/.bin

install: delete-node-modules install-node-modules

delete-node-modules:
	@echo Deleting node_modules/ folder
	@rm -rf node_modules/
	@echo Done deleting node_modules/ folder

install-node-modules:
	@echo Installing node dependencies
	@npm ci
	@echo Done installing node dependencies

dev:
	@NODE_ENV=development ${NODE_MODULES_BIN}/webpack-dev-server --config webpack.config.js