import Ember from 'ember';
import ContentTemplatableMixin from '../../../mixins/content-templatable';
import { module, test } from 'qunit';

module('Unit | Mixin | content templatable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContentTemplatableObject = Ember.Object.extend(ContentTemplatableMixin);
  let subject = ContentTemplatableObject.create();
  assert.ok(subject);
});
