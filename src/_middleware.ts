import {
  chainMatch,
  isPageRequest,
  csp,
  strictDynamic,
} from "@next-safe/middleware";

const securityMiddleware = [
  csp({
    // your CSP base configuration with IntelliSense
    // single quotes for values like 'self' are automatic
    directives: {
      "script-src": ["self"],
      "img-src": ["self", "data:", "https://images.unsplash.com", "https://files.caleblamcodes.dev"],
      "font-src": ["self", "https://fonts.gstatic.com"],
    },
  }),
  strictDynamic(),
];

export default chainMatch(isPageRequest)(...securityMiddleware);