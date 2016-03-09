/* $Id$ */

import Ember from 'ember';
import layout from 'modal/templates/components/ui-button';

export default Ember.Component.extend({
	layout: layout,

	tagName: 'button',

	classNames: ['ui', 'button'],

	classNameBindings: ['size', 'type', 'icon:icon:', 'promise:loading'],

	type: 'basic',

	size: '',

	icon: null,

	clickedParam: null,

	clicked: null,

	label: null,

	attributeBindings: ['title', 'disabled', 'tabindex'],

	promise: false,

	preventAll: true,

	click: function(event) {
		if (this.get('preventAll')) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.sendAction('clicked', this.get('clickedParam'), (promise) => {
			this.setProperties({
				'promise': promise,
				'disabled': !!promise
			});
			if (promise instanceof Ember.RSVP.Promise) {
				promise.finally(() => {
					this.setProperties({
						'promise': false,
						'disabled': false
					});
				});
			}
		});
	}
});
