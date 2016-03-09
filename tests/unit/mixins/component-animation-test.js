import Ember from 'ember';
import ComponentAnimationMixin from '../../../mixins/component-animation';
import { module, test } from 'qunit';

module('Unit | Mixin | component animation');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentAnimationObject = Ember.Object.extend(ComponentAnimationMixin);
  let subject = ComponentAnimationObject.create();
  assert.ok(subject);
});
