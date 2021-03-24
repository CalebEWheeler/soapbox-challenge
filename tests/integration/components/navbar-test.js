import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Navbar />`);
    //will test if the element 'p' has a class of 'navbar-title'.
    assert.dom('p').hasClass('navbar-title');
    //will test if the element 'img' with a class of 'navbar-image' has an attribute 'src'.
    assert.dom('img.navbar-image').hasAttribute('src');
  });
});
