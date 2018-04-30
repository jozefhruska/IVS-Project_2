# Parameters
EFORGE = electron-forge
ESTART = $(EFORGE) start
EPACKAGE = $(EFORGE) package
EMAKE = $(EFORGE) make
QUNIT = qunit
DOCUMENTATION = documentation build inc/** -f md > ../dokumentace.md
MDPDF = markdown-pdf ../dokumentace.md

PROJECT = "Calculator by Tough Question"
NODE_PATH = ./node_modules/.bin/
PROJ_DIR := $(shell pwd)

PACK_NAME = xhrusk25_xploci00_xcikel00_xstrna11
PACK_ARCHIVE = $(PACK_NAME).zip
PACK_DIR = $(PROJ_DIR)/$(PACK_NAME)

.PHONY: install

pack: install package-linux package-win package-mac make-all
	rm -rf "$(PACK_DIR)"
	mkdir "$(PACK_DIR)"
	cd "$(PACK_DIR)" && mkdir "doc"
	cd "$(PACK_DIR)" && mkdir "install"
	cd "$(PACK_DIR)" && mkdir "repo"

	cd "out/make" && cp -R . "$(PACK_DIR)/install"
	cd ".." && cp dokumentace.pdf "$(PACK_DIR)/doc"

	cd ".." && cp -R . "$(PACK_DIR)/repo"
	zip -r $(PACK_ARCHIVE) "$(PACK_DIR)"

all: install package-linux package-win package-mac

install: FORCE
	@echo "Installing ${PROJECT}:"
	@npm install

run: FORCE
	@echo "Starting ${PROJECT}:"
	@$(NODE_PATH)$(ESTART)

test: FORCE
	@echo "Testing ${PROJECT}:"
	@$(NODE_PATH)$(QUNIT)

doc: FORCE
	@echo "Testing ${PROJECT}:"
	@$(NODE_PATH)$(DOCUMENTATION)
	@$(NODE_PATH)$(MDPDF)
	@rm -f ../dokumentace.md

make-all: FORCE
	@$(NODE_PATH)$(EMAKE) --platform linux --arch x64 --skip-package
	@$(NODE_PATH)$(EMAKE) --platform win32 --arch x64 --skip-package
	@$(NODE_PATH)$(EMAKE) --platform mas --skip-package

package-linux: FORCE
	@$(NODE_PATH)$(EPACKAGE) --platform linux --arch x64
package-win: FORCE
	@$(NODE_PATH)$(EPACKAGE) --platform win32 --arch x64
package-mac: FORCE
	@$(NODE_PATH)$(EPACKAGE) --platform mas

clean: FORCE
	rm -rf node_modules
	rm -rf out
	rm -rf "$(PACK_DIR)"
	rm -rf release-builds

FORCE: