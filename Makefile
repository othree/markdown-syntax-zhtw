all: index.html resources.html

index.html: header.html footer.html content.html
	cat header.html content.html footer.html > index.html

resources.html: header.html general_footer.html resources_content.html
	cat header.html resources_content.html general_footer.html > resources.html

content.html: syntax.md
	perl Markdown_1.0.1/Markdown.pl syntax.md > content.html

resources_content.html: resources.md
	perl Markdown_1.0.1/Markdown.pl resources.md > resources_content.html

