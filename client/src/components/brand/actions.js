export const Actions = {
  CHANGE_BRAND: 'search/change_brand'
};

export const changeBrand = (brand) => {
  return {
    type: Actions.CHANGE_BRAND,
    brand: brand
  };
};