import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vuejs-app/n5now-front-navbar",
  app: () => System.import("@vuejs-app/n5now-front-navbar"),
  activeWhen: ["/", (location) => location.pathname.startsWith("/")],
});
registerApplication({
  name: "@vuejs-app/n5now-front-harry",
  app: () => System.import("@vuejs-app/n5now-front-harry"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vuejs-app/n5now-front-rick",
  app: () => System.import("@vuejs-app/n5now-front-rick"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vuejs-app/n5now-front-footer",
  app: () => System.import("@vuejs-app/n5now-front-footer"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
