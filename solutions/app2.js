const user = {
  firstName: "John",
  lastName: "Doe",
};

const { lastName: l, firstName: f, job: j = "unknown" } = user;

export { l, f, j };
