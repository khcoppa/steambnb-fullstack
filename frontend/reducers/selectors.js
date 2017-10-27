export const selectListing = ({ listings }, id) => {
  const listing = listings[id] || {};
  return listing;
}
