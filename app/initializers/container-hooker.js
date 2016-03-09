/* $Id$ */

import ModalManager from "modal/utils/modal-manager";

export function initialize(container, app) {
	ModalManager.reopen({
		container: app.__container__
	});
}

export default {
	name: 'container-hooker',
	initialize: initialize
};
