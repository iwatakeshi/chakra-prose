import { withProse } from "../src";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "black" }),
  withProse()
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};
