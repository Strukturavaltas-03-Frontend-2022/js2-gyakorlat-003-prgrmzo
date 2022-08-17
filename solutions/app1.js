const user = {
  firstName: "John",
  lastName: "Doe",
};

const { firstName, lastName, job = "unknown" } = user;

export { firstName, lastName, job };
