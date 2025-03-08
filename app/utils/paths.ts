const paths = {
  home() {
    return "/";
  },
  posts() {
    return `/posts`;
  },
  post(postSlug: string) {
    return `/posts/${postSlug}`;
  },
  adminLogin() {
    return `/admin/login`;
  },
  adminDashboard() {
    return `/admin/dashboard`;
  },
  assignVendorToUser(userId: string) {
    return `/admin/user/${userId}/assign-vendor`;
  },
};

export default paths;
