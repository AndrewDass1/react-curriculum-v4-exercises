function Snacklist() {
  let snackPreferences = [
    'Cranberry',
    'Dark Chocolate',
    'Oranges',
    'Cashews',
    'Potato Chips',
  ];

  let favoriteSnackPreferences = snackPreferences.reverse() + ' ';

  return favoriteSnackPreferences;
}

export default Snacklist;
