import Ember from 'ember';
import DialogComponent from '../components/custom-modal';

export default Ember.Object.create({
    show( innerLayout, dialogOptions ){

        let options = $.extend({

            container: Modal.__container__,

            innerLayout: innerLayout

        }, dialogOptions);

        const dialog = new DialogComponent();

        dialog.setProperties( options ).append();

        return dialog;
    },
    hide(){

    }
});
