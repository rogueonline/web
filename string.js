var String = {
	/**
	 * Trim leading space
	 */
	trimStart: function(string) {
		return string.replace(new RegExp("^\\s+"), "");
	},

	/**
	 * Trim trailing space
	 */
	trimEnd: function(string) {
		return string.replace(new RegExp("\\s+$"), "");
	},

	/**
	 * string.replace(/stringToReplace/, "replacement");
	 */
	replace: function(string, stringToReplace, replacement) {
		return string.replace(new RegExp(stringToReplace), replacement);
	},

	/**
	 * string.replace(/stringToReplace/i, "replacement");
	 */
	replaceIgnoreCase: function(string, stringToReplace, replacement) {
		return string.replace(new RegExp(stringToReplace, "i"), replacement);
	},

	/**
	 * string.replace(/stringToReplace/g, "replacement");
	 */
	replaceAll: function(string, stringToReplace, replacement) {
		return string.replace(new RegExp(stringToReplace, "g"), replacement);
	},

	/**
	 * string.replace(/stringToReplace/gi, "replacement");
	 */
	replaceAllIgnoreCase: function(string, stringToReplace, replacement) {
		return string.replace(new RegExp(stringToReplace, "gi"), replacement);
	},

	hashCode: function(string) {
		var hashCode = 0;

		for (var i = 0; i < string.length; i++) {
			var charCode = string.charCodeAt(i);
			hashCode = hashCode * 31 + charCode;
			hashCode |= 0; // Convert to 32bit integer
		}

		return hashCode;
	}
};
