exports.checker = (result) => {
  if (!result.isEmpty()) {
    const err = { ...result };
    err.name = "Valition Error";
    throw err;
  }
};
