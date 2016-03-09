/* $Id$ */

import Ember from 'ember';
import layout from 'modal/templates/components/basic-modal';

import ContentTemplatable from 'modal/mixins/content-templatable';
import ComponentCommons from 'modal/mixins/component-commons';

export default Ember.Component.extend(ComponentCommons, ContentTemplatable, {

	ok: "Ok",

	cancel: "Cancel",

	layout: layout,

	content: null,

	isAlert: false,

	isOkButton: true,

	size: 'small',

	type: '',

	classNames: ['ui', 'modal', 'scrolling'],

	classNameBindings: ['size', 'type'],

	attributeBindings: ['data-template'],

	'data-template': Ember.computed.alias('contentTemplateName'),

	closable: false,

	closeOnDone: true,

	isPrompt: false,

	labelValue: null,

	promptPlaceholder: null,

	promptValue: null,

	footerButtons: true,

	didInsertElement: function() {
		this.$().modal({
			transition: this.get('transition'),

			onHidden: () => {
				this.destroyElement();
			},

			onApprove: () => {
				let promptValue = this.get('promptValue'),
					closeOnDone = this.get("closeOnDone"),
					contentController = this.get("contentController"),
					contentComponent = this.get("contentComponent");

				if (!closeOnDone) {
					contentComponent.send('done');
					// contentController.send("done");
				}

				this.sendAction('approveClicked', promptValue);
				return this.get("closeOnDone");
			},

			onDeny: () => {
				let closeOnDone = this.get("closeOnDone"),
					contentController = this.get("contentController"),
					contentComponent = this.get("contentComponent");

				if (!closeOnDone) {
					// contentController.send("cancel");
					contentComponent.send("cancel");
				}

				this.sendAction('denyClicked');
			}
		}).modal('show');
	},

	send: function () {
		let contentController = this.get('contentController');
		if(contentController) {
			contentController.send.apply(contentController, arguments);
		} else {
			return this._super.apply(this, arguments);
		}
	}
});
