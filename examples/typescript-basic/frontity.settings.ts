import { Settings } from "@frontity/types";
import ExtensionExample1 from "@frontity/extension-example-1/type";
import ExtensionExample2 from "@frontity/extension-example-2/type";

const settings: Settings<ExtensionExample1 | ExtensionExample2> = [
  {
    name: "site-1",
    settings: {
      url: "https://test.frontity.io",
      random: 1
    },
    packages: [
      {
        name: "@frontity/extension-example-1",
        namespaces: ["extension1"],
        settings: {
          example1: ""
        }
      },
      {
        name: "@frontity/extension-example-2",
        settings: {
          example2: ""
        }
      }
    ]
  },
  {
    name: "site-2",
    settings: {
      url: "https://test.frontity.io"
    },
    packages: [
      {
        name: "@frontity/extension-example-2",
        settings: {
          example2: ""
        }
      }
    ]
  },
  {
    name: "site-3",
    mode: "amp",
    settings: {
      url: "https://test.frontity.io"
    },
    packages: [
      {
        name: "@frontity/extension-example-2",
        settings: {
          example2: ""
        }
      }
    ]
  }
];

module.exports = settings;
