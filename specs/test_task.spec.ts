import { provider } from '../framework';

const { it } = provider.test();
const { browser } = provider.packages();
const { I } = provider.actionFlows();

describe('Check product page', () => {
  beforeEach(async () => await browser.goTo('https://rozetka.com.ua/'));
  afterEach(async () => await browser.close());

  it('Test task', async () => {
    await I.searchFor('Pokemon');

    // Made to slowdown motion. It is bad idea to use sleep in tests
    await browser.sleep();

    await I.goToTheNextPage();

    // Made to slowdown motion. It is bad idea to use sleep in tests
    await browser.sleep();

    await I.openProductPageByTitleFor('Кружка GeekLand Покемон Го Pokemon Go PG.01.03');

    // Made to slowdown motion. It is bad idea to use sleep in tests
    await browser.sleep();

    const currentPrice = await I.getCurrentPrice();
    
    I.assertActualValueBiggerThenExpected({actual: +currentPrice!.slice(0, -1), expected: 50});

    // Made to slowdown motion. It is bad idea to use sleep in tests
    await browser.sleep();

    const thumbnails = await I.getDataFromThumbnailsGalary();

    I.assertActualValueNotLessThenExpected({actual: thumbnails!.length, expected: 3})
  });
});
