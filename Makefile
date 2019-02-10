NODE_MODULES_BIN=./node_modules/.bin

install: install-node-modules

delete-node-modules:
	@echo Deleting node_modules/ folder
	@rm -rf node_modules/
	@echo Done deleting node_modules/ folder

install-node-modules:
	@echo Installing node dependencies
	@npm ci
	@echo Done installing node dependencies

lint: lint-js lint-css

lint-js:
	@echo Linting JavaScript
	@${NODE_MODULES_BIN}/eslint --ext .js,.jsx src webpack.config.js
	@echo Done linting JavaScript

lint-css:
	@${NODE_MODULES_BIN}/stylelint './src/**/*.jsx' --syntax scss

dev:
	@NODE_ENV=development ${NODE_MODULES_BIN}/webpack-dev-server --config webpack.config.js