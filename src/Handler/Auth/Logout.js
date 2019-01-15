export default async (req, h) => {
  req.cookieAuth.clear();
  req.cookieAuthAdmin.clear();

  return h.response({ redirectUri: "/", success: true }).code(200);
};
