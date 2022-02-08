import { ApiCore } from "../utilities/core";

const url = "student/dashboard";

export const apiStudentDashboard = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParams: true,
  post: true,
  postFormData: true,
  put: true,
  putById: true,
  patch: true,
  remove: true,
  delete: true,
  url: url,
});
