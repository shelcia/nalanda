import { ApiCore } from "../utilities/core";

const url = "admin/dashboard";

export const apiAdminDashboardModel = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParams: true,
  post: true,
  put: true,
  putById: true,
  patch: true,
  remove: true,
  delete: true,
  url: url,
});
