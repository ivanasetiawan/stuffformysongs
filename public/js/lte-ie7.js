/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-heart' : '&#x22;',
			'icon-coffee' : '&#x23;',
			'icon-ampersand' : '&#x24;',
			'icon-type' : '&#x25;',
			'icon-droplet' : '&#x26;',
			'icon-spades' : '&#x27;',
			'icon-left-to-right' : '&#x21;',
			'icon-right-to-left' : '&#x28;',
			'icon-shit' : '&#x29;',
			'icon-cloudy' : '&#x2a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};