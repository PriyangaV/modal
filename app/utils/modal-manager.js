/* $Id$ */

import Ember from 'ember';
import ModalComponent from 'modal/components/basic-modal';

export default Ember.Object.create({
	container: null,

	showBasicModal: function(model, props) {
		return this.show(null, props, model);
	},

	show: function(name, properties, model) {
		var self = this;
console.log(model);
		return new Ember.RSVP.Promise(function(resolve, reject) {
			var dialog = new ModalComponent();

			dialog.setProperties($.extend({
				container: self.get('container'),

				model: model,

				contentTemplateName: name,

				allowMultiple: true,

				approveClicked: function(res) {
					resolve(res, model, properties);
				},

				denyClicked: function() {
					reject(model, properties);
				}
			}, properties));

			dialog.append();
		});
	},

	alert: function(alertDetails, model) {
		alertDetails = alertDetails || {};
		alertDetails.isAlert = true;
		alertDetails.isPrompt = false;

		return this.showBasicModal(model, alertDetails);
	},

	confirm: function(confirmDetails, model) {
		confirmDetails = confirmDetails || {};
		confirmDetails.isAlert = false;
		confirmDetails.isPrompt = false;

		return this.showBasicModal(model, confirmDetails);
	},

	prompt: function(promptDetails, model) {
		promptDetails = promptDetails || {};
		promptDetails.isAlert = false;
		promptDetails.isPrompt = true;

		promptDetails.promptPlaceholder = promptDetails.placeholder;
		promptDetails.promptValue = promptDetails.value;

		return this.showBasicModal(model, promptDetails);
	},

	hide: function(templateName) {
		let dialogElement = $(".ui.modal[data-template=" + templateName.replace(/\//g, "\\$&") + "]");

		if (dialogElement.length) {
			dialogElement.modal("hide");
		}
	}
});
