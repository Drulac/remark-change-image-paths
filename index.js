const visit = require('unist-util-visit')

module.exports = (
	options = {
		search: /^/,
		replace: '/uploads',
	}
) => {
	return function image() {
		console.log(options)

		return function transformer(tree) {
			visit(tree, 'element', onImage)

			function onImage(node) {
				if (node.tagName === 'img') {
					console.log(
						'replace  :',
						JSON.stringify(node.properties.src)
					)

					node.properties.src = node.properties.src.replace(
						options.search,
						options.replace
					)

					console.log(
						'replaced :',
						JSON.stringify(node.properties.src)
					)
				}
			}
		}
	}
}
