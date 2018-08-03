all: index.html resources.html
.PHONY: all

index.html: template.html syntax.md
	cat template.html | perl -pe 's/\{\{\ *CONTENT\ *\}\}/`pandoc syntax.md`/ge' > index.html

resources.html: template.html resources.md
	cat template.html | perl -pe 's/\{\{\ *CONTENT\ *\}\}/`pandoc resources.md`/ge' > resources.html

