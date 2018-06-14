"use strict";

// Do not attach if already attached to prototype
if ((Object.prototype.getElementsByAttributeName == undefined) ||
    (Object.prototype.getElementsByAttributeValue == undefined) ||
    (Object.prototype.removeElementById == undefined) ||
    (Object.prototype.addClass == undefined) ||
    (Object.prototype.removeClass == undefined)) {
	let elementUtil = (function() {
		let getElementsByAttributeName = function($this, attribute) {
			let results = [];
			let elements = $this.getElementsByTagName("*");

			for (let i = 0; i < elements.length; i++) {
				if (elements[i].getAttribute(attribute) != null) {
					results.push(elements[i]);
				}
			}

			return results;
		};

		let getElementsByAttributeValue = function($this, value) {
			let results = [];
			let elements = $this.getElementsByTagName("*");

			for (let i = 0; i < elements.length; i++) {
				let attributes = elements[i].attributes;

				for (let j = 0; j < attributes.length; j++) {
					if (attributes[j].value == value) {
						results.push(elements[i]);
					}
				}
			}

			return results;
		};

		let removeElementById = function($this, id) {
			let element = $this.getElementById(id);

			if (element != null) {
				element.parentNode.removeChild(element);
			}

			return element;
		};

		let addClass = function($this, value) {
			$this.className += " " + value;
		};

		let removeClass = function($this, value) {
			let classNames = $this.className.split(" ");
			let index = classNames.indexOf(value);

			if (index > -1) {
				classNames.splice(index, 1);
				$this.className = classNames.join(" ");
			}
		};

		return {
			/**
			 * document.getElementsByAttributeName("attribute-name");
			 */
			getElementsByAttributeName: function(attribute) {
				return getElementsByAttributeName(this, attribute);
			},

			/**
			 * document.getElementsByAttributeValue("attribute-value");
			 */
			getElementsByAttributeValue: function(value) {
				return getElementsByAttributeValue(this, value);
			},

			/**
			 * document.removeElementById("element-id");
			 */
			removeElementById: function(id) {
				return removeElementById(this, id);
			},

			/**
			 * document.getElementById("element-id").addClass("class-name");
			 */
			addClass: function(value) {
				return addClass(this, value);
			},

			/**
			 * document.getElementById("element-id").removeClass("class-name");
			 */
			removeClass: function(value) {
				return removeClass(this, value);
			}
		};
	})();

	Object.prototype.getElementsByAttributeName = elementUtil.getElementsByAttributeName;
	Object.prototype.getElementsByAttributeValue = elementUtil.getElementsByAttributeValue;
	Object.prototype.removeElementById = elementUtil.removeElementById;
	Object.prototype.addClass = elementUtil.addClass;
	Object.prototype.removeClass = elementUtil.removeClass;
};
