import { pageProvider } from '../pages';

const mainPage = pageProvider.main();

async function searchFor(searchSubject: string) {
  await mainPage.sendKeys({ header: { search: searchSubject } });
  await mainPage.clickOn({ header: { searchButton: null } })
};

async function goToTheNextPage() {
  await mainPage.clickOn({ catalog: { nextPageButton: null } })
};

async function gettingDataFromCatalogGrid() {
  return mainPage.getData({ catalog: { catalogTable: null } });
}

async function openProductPageByTitleFor(title: string) {
  await mainPage.clickOn({ catalog: { catalogTable: { tile__title: title } } });
}

export const mainFlows = {
  searchFor, goToTheNextPage, gettingDataFromCatalogGrid, openProductPageByTitleFor
}
