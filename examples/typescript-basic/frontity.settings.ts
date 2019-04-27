import Settings from "@frontity/types/settings";
import Router from "@frontity/types/router";

const settings: Settings<Router> = [
  {
    name: "site-1",
    settings: {
      url: "https://test.frontity.io"
    },
    packages: [
      {
        name: "@frontity/tiny-router",
        settings: {
          extension1: {
            example1: ""
          }
        }
      },
      {
        name: "@frontity/extension-example-2",
        settings: {
          theme: {
            example2: ""
          }
        }
      }
    ]
  }
];

module.exports = settings;
