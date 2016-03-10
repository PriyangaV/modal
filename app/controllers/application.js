import Ember from 'ember';
import ModalManager from 'modal/utils/modal-manager';
import CustomDialog from '../utils/custom-dialog';

const { Controller, inject } = Ember;

export default Controller.extend({

	actions: {
		showDialog(){
			CustomDialog.show( "create-folder-dialog", {
				title: "Create Folder",
				buttons: {
					"Create Folder": function(){
						alert("Created");
					},
					"Cancel": function(){
						alert("Canceled");
					}
				},
				dialogType: "modal"
			});
		}
	}
});
