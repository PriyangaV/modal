/* $Id$ */

import Ember from 'ember';

export default Ember.Mixin.create({
	container: null,

	contentTemplateName: null,

	contentController: Ember.computed('contentTemplateName', {
		get: function() {
			var contentTemplateName = this.get('contentTemplateName');

			return this.get('container').lookup('controller:' + contentTemplateName);
		}
	}),

	contentComponent: Ember.computed('contentTemplateName', {
		get: function() {
			var contentTemplateName = this.get('contentTemplateName');
			console.log(this.get('container'));
			// return this.get('container').lookup('component:' + contentTemplateName);
		}
	}),

	onDidInsertElement: Ember.on('didInsertElement', function() {
		this._replaceFooter();
	}),

	_replaceFooter: function() {
		this.$('.custom-footer').append(this.$('.footer'));
	}
});
