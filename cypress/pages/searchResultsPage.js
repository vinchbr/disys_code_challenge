export const companyDetailsLocator = ".osrp-blk";
export const hoursContainerLocator =
  'div[data-attrid="kc:/location/location:hours"]';
export const expandHoursLocator = 'span[style="display:inline"]';

export const searchResultsPage = {
  expandHours: () => {
    cy.get(companyDetailsLocator);
    cy.get(hoursContainerLocator).get(expandHoursLocator).click();
  },
};
