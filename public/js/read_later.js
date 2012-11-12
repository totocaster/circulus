function read_later(loc) {
	var d = document,
		z = d.createElement('scr' + 'ipt'),
		b = d.body,
		l = loc;
	try {
		if (!b) throw (0);
		d.title = '(Saving...) ' + d.title;
		z.setAttribute('src', 'http://www.instapaper.com/j/DxQGd0EMnnvL?u=' + encodeURIComponent(l) + '&t=' + (new Date().getTime()));
		b.appendChild(z);
	} catch (e) {
		alert('Please wait until the page has loaded.');
	}
}