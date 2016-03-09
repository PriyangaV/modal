import Ember from 'ember';
import ModalManager from 'modal/utils/modal-manager';

const { Controller, inject } = Ember;

export default Controller.extend({

	actions: {

		showTemplateModal: function() {
			ModalManager.show('create-folder-dialog', {
				title: "Alert!!",
				ok: "Create"
			}, {'name':'priya'});
		}
	}
});
