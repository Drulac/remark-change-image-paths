# remark-change-image-paths

change image paths in your markdown files

# install

`npm install remark-change-image-paths --save`

# usage

```js
const fs = require('fs')
const unified = require('unified')
const markdown = require('remark-parse')
const remarkChangeImagesPath = require('remark-change-image-paths')(
	{
		search: /^/,
		replace: "/path/to/imagesFolder/",
	}
)
const remark2rehype = require('remark-rehype')
const stringify = require('rehype-stringify')

unified()
        .use(markdown)
        .use(remark2rehype)
        .use(remarkChangeImagesPath)
        .use(stringify)
        .process(
                `![](img.png)`,
                function (err, file) {
                        if (err) throw err
                        console.log(String(file))
                }
        )
```

will output :

```html
<img src="/path/to/imagesFolder/img.png">
```

# credits

this if a fork from [@h2xd/remark-change-image-paths](https://www.npmjs.com/package/@h2xd/remark-change-image-paths)
