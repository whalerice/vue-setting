(function(a) {
	function f(b, c, d) {
		var e = a.ui.resizable.prototype[b];
		a.ui.resizable.prototype[b] = function() {
			if (d) d.apply(this, arguments);
			e.apply(this, arguments);
			if (c) c.apply(this, arguments);
		};
	}
	function e(a) {
		return parseInt(a.css('margin-top'), 10) || 0;
	}
	function d(a) {
		return parseInt(a.css('margin-left'), 10) || 0;
	}
	function c(a) {
		return a.sort(function(a, b) {
			return !a ? 1 : !b ? -1 : Math.abs(a) - Math.abs(b);
		})[0];
	}
	function b(a, b, c) {
		return Math.abs(a) < c ? -a : Math.abs(b) < c ? -b : 0;
	}
	a.extend(a.ui.resizable.prototype.options, {
		snapTolerance: 20,
		snapMode: 'both',
	});
	a.ui.plugin.add('resizable', 'snap', {
		start: function() {
			var b = a(this),
				c = b.data('ui-resizable'),
				f = c.options.snap;
			c.ow = c.helper.outerWidth() - c.size.width;
			c.oh = c.helper.outerHeight() - c.size.height;
			c.lm = d(b);
			c.tm = e(b);
			c.coords = [];
			a(typeof f == 'string' ? f : ':data(ui-resizable)').each(function() {
				if (this == c.element[0] || this == c.helper[0]) return;
				var b = a(this),
					f = b.position(),
					g = f.left + d(b),
					h = f.top + e(b);
				c.coords.push({
					l: g,
					t: h,
					r: g + b.outerWidth(),
					b: h + b.outerHeight(),
				});
			});
		},
		resize: function() {
			var d = [],
				e = [],
				f = [],
				g = [],
				h = a(this).data('ui-resizable'),
				i = h.axis.split(''),
				j = h.options.snapTolerance,
				k = h.options.snapMode,
				l = h.position.left + h.lm,
				m = l - j,
				n = h.position.top + h.tm,
				o = n - j,
				p = l + h.size.width + h.ow,
				q = p + j,
				r = n + h.size.height + h.oh,
				s = r + j;
			a.each(h.coords, function() {
				var c = this,
					h = Math.min(q, c.r) - Math.max(m, c.l),
					t = Math.min(s, c.b) - Math.max(o, c.t);
				if (h < 0 || t < 0) return;
				a.each(i, function(a, i) {
					if (k == 'outer') {
						switch (i) {
							case 'w':
							case 'e':
								if (h > j * 2) return;
								break;
							case 'n':
							case 's':
								if (t > j * 2) return;
						}
					} else if (k == 'inner') {
						switch (i) {
							case 'w':
							case 'e':
								if (h < j * 2) return;
								break;
							case 'n':
							case 's':
								if (t < j * 2) return;
						}
					}
					switch (i) {
						case 'w':
							d.push(b(l - c.l, l - c.r, j));
							break;
						case 'n':
							e.push(b(n - c.t, n - c.b, j));
							break;
						case 'e':
							f.push(b(p - c.l, p - c.r, j));
							break;
						case 's':
							g.push(b(r - c.t, r - c.b, j));
					}
				});
			});
			if (g.length) h.size.height += c(g);
			if (f.length) h.size.width += c(f);
			if (d.length) {
				var v = c(d);
				h.position.left += v;
				h.size.width -= v;
			}
			if (e.length) {
				var t = c(e);
				h.position.top += t;
				h.size.height -= t;
			}
		},
	});
	f('_mouseStop', null, function() {
		if (this._helper) {
			this.position = {
				left: parseInt(this.helper.css('left'), 10) || 0.1,
				top: parseInt(this.helper.css('top'), 10) || 0.1,
			};
			this.size = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight(),
			};
		}
	});
	f('_mouseStart', function() {
		if (this._helper) {
			this.size = {
				width: this.size.width - (this.helper.outerWidth() - this.helper.width()),
				height: this.size.height - (this.helper.outerHeight() - this.helper.height()),
			};
			this.originalSize = {
				width: this.size.width,
				height: this.size.height,
			};
		}
	});
	f('_renderProxy', function() {
		if (this._helper) {
			this.helper.css({
				left: this.elementOffset.left,
				top: this.elementOffset.top,
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
			});
		}
	});
	var g = a.ui.resizable.prototype.plugins.resize;
	a.each(g, function(a, b) {
		if (b[0] == 'ghost') {
			g.splice(a, 1);
			return false;
		}
	});
	a.each(a.ui.resizable.prototype.plugins.start, function(b, c) {
		if (c[0] == 'ghost') {
			var d = c[1];
			c[1] = function() {
				d.apply(this, arguments);
				a(this)
					.data('ui-resizable')
					.ghost.css({ width: '100%', height: '100%' });
			};
			return false;
		}
	});
})(jQuery);
