import Ember from 'ember';
import ComponentContentMixin from '../../../mixins/component-content';
import { module, test } from 'qunit';

module('Unit | Mixin | component content');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentContentObject = Ember.Object.extend(ComponentContentMixin);
  let subject = ComponentContentObject.create();
  assert.ok(subject);
});
