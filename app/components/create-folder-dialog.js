import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    console.log(this.get('model.name'));
    console.log('inside create-folder-dialog');
  }
});
