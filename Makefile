install: delete-node-modules install-node-modules

delete-node-modules:
	@echo Deleting node_modules/ folder
	@rm -rf node_modules/
	@echo Done deleting node_modules/ folder

install-node-modules:
	@echo Installing node dependencies
	@npm ci
	@echo Done installing node dependencies
