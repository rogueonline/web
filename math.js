if ((Math.rad == undefined) ||
    (Math.deg == undefined) ||
    (Math.cartesian == undefined) ||
    (Math.polar == undefined)) {
	let math = (function() {
		let rad = function($this, degree) {
			return degree * ($this.PI / 180);
		};

		let deg = function($this, radian) {
			return radian * (180 / $this.PI);
		};

		let cartesian = function($this, radian, radius) {
			let x = radius * $this.cos(radian);
			let y = radius * $this.sin(radian);
			return {x: x, y: y};
		};

		let polar = function($this, x, y) {
			let radian = $this.atan2(x, y);

			if (radian < 0) {
				radian += ($this.PI * 2);
			}

			return radian
		};

		return {
			/**
			 * Math.rad(degree);
			 */
			rad: function(degree) {
				return rad(this, degree);
			},

			/**
			 * Math.deg(radian);
			 */
			deg: function(radian) {
				return deg(this, radian);
			},

			/**
			 * Math.cartesian(radian);
			 *
			 * cartesian.x or cartesian["x"]
			 * cartesian.y or cartesian["y"]
			 */
			cartesian: function(radian, radius) {
				return cartesian(this, radian, radius);
			},

			/**
			 * Math.polar(x, y)
			 */
			polar: function(x, y) {
				return polar(this, x, y);
			}
		};
	})();

	Math.rad = math.rad;
	Math.deg = math.deg;
	Math.cartesian = math.cartesian;
	Math.polar = math.polar;
};
