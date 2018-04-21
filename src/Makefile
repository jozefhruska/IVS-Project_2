# Parameters
EFORGE = electron-forge
ESTART = $(EFORGE) start
EPACKAGE = $(EFORGE) package
MOCHA = mocha
DOCUMENTATION = documentation build inc/** -f md > ../dokumentace.md
MDPDF = markdown-pdf ../dokumentace.md

PROJECT = "Calculator by Tough Question"
NODE_PATH = ./node_modules/.bin/

.PHONY: install

install: FORCE
	@echo "Installing ${PROJECT}:"
	@npm install

run: FORCE
	@echo "Starting ${PROJECT}:"
	@$(ESTART)

test: FORCE
	@echo "Testing ${PROJECT}:"
	@$(NODE_PATH)$(MOCHA)
	@$(NODE_PATH)$(MOCHA)

doc: FORCE
	@echo "Testing ${PROJECT}:"
	@$(NODE_PATH)$(DOCUMENTATION)
	@$(NODE_PATH)$(MDPDF)
	@rm -f ../dokumentace.md

package-linux: FORCE
	@$(NODE_PATH)$(EPACKAGE) --platform linux --arch x64
package-win: FORCE
	@$(NODE_PATH)$(EPACKAGE) --platform win32 --arch x64
package-mac: FORCE
	@$(NODE_PATH)$(EPACKAGE) --platform mas

clean: FORCE
	rm -rf node_modules

FORCE: