import Ember from 'ember';
import ComponentCommonsMixin from '../../../mixins/component-commons';
import { module, test } from 'qunit';

module('Unit | Mixin | component commons');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentCommonsObject = Ember.Object.extend(ComponentCommonsMixin);
  let subject = ComponentCommonsObject.create();
  assert.ok(subject);
});
