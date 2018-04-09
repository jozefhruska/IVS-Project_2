# Parameters
EFORGE=electron-forge
ESTART=$(EFORGE) start
EPACKAGE=$(EFORGE) package
QUNIT=qunit

run:
	$(ESTART)
test:
	$(QUNIT)

package-linux:
	$(EPACKAGE) --platform linux --arch x64
package-win:
	$(EPACKAGE) --platform win32 --arch x64
package-mac:
	$(EPACKAGE) --platform mas