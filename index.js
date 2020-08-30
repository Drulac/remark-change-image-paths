const visit = require('unist-util-visit')

module.exports = (
	options = {
		search: '^',
		replace: '/uploads',
	}
) => {
	return function image() {
		console.log(options)

		return function transformer(tree) {
			visit(tree, 'element', onImage)

			function onImage(node) {
				if (node.tagName === 'img') {
					node.properties.src =
						options.replace + node.properties.src
				}
			}
		}
	}
}
