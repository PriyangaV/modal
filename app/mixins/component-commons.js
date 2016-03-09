/* $Id$ */

import Ember from 'ember';

export default Ember.Mixin.create({
	transition: 'flip vertical',

	toJSON: function() {
		let props = Object.keys(this);
		let proto = this.constructor.prototype;

		for (let p in proto) {
			if (proto.hasOwnProperty(p) && typeof(this[p]) !== "function") {
				props.push(p);
			}
		}

		let copy = {};

		props.forEach((p) => {
			copy[p] = this.get(p);
		});

		return copy;
	}
});
