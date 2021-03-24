import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif-container/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('src', "https://media0.giphy.com/media/zaCojXv2S01zy/giphy-downsized.gif?cid=722b3a9fbs8gblxtep0eavs63lgpywu3of8wth60pu1ccdip&rid=giphy-downsized.gif");

    await render(hbs`<GifContainer::Image @src={{this.src}}/>`);
    //will test if the img element has the attribute 'src' and if the passed value of src is the expected set value on line 13.
    assert.dom('img').hasAttribute('src', this.src);
    //will test if the img element has the attribute 'alt' and if the value if '.gif'.
    assert.dom('img').hasAttribute('alt', '.gif');
    //will test if the img element has a class named 'gif-image'.
    assert.dom('img').hasClass('gif-image');
    
  });
});
