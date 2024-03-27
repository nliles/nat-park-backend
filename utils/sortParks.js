const sortParks = (parks) => {
  return parks.sort((a, b) =>
    (a?.fullName || "").localeCompare(b?.fullName || "", "fr", {
      ignorePunctuation: true,
    }),
  );
};

module.exports = {
  sortParks,
};
