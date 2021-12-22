import { provider } from '../framework';

const { it } = provider.test();
const { browser } = provider.packages();
const { I } = provider.actionFlows();

describe('Check product page', () => {
  beforeEach(async () => await browser.goTo('https://rozetka.com.ua/'));
  afterEach(async () => await browser.close());

  it('Test task', async () => {
    await I.searchFor('Pokemon');
    await I.goToTheNextPage();
    await I.openProductPageByTitleFor('Кружка GeekLand Покемон Го Pokemon Go PG.01.03');

    const {productLayout: {productInfoRight}} = await I.getCurrentPrice();
    
    I.assertActualValueBiggerThenExpected({actual: +productInfoRight.newPrice!.slice(0, -1), expected: 50});
  });
});
