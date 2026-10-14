export function isTermsRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path === "/terms" || path.endsWith("/terms") || path.endsWith("/terms.html");
}
