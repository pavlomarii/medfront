export const ApiPaths = {
  apiPath: "http://localhost:3000",
  companies: {
    getAll: "/companies",
    getOne: (id: string | number) => `/companies/${id}`,
  },
  patients: {
    getAll: "/patients",
    batchCreate: "/patients/batch_create",
  },
};
