import {
  mergeThemeOverride,
  ThemeExtension,
  ComponentSingleStyleConfig,
} from "@chakra-ui/react";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleFunction = () => ({
  h1: {
    fontFamily: "heading",
    fontWeight: "bold",
    fontSize: { base: "4xl", md: "5xl" },
    mb: { base: 8, md: 10 },
  },
  h2: {
    fontFamily: "heading",
    fontWeight: "bold",
    fontSize: { base: "2xl", md: "3xl" },
    mt: { base: 12, md: 14 },
    mb: { base: 6, md: 8 },
  },
  h3: {
    fontFamily: "heading",
    fontWeight: "semibold",
    fontSize: { base: "xl", md: "2xl" },
    mt: { base: 8, md: 10 },
    mb: { base: 3, md: 4 },
  },
  h4: {
    fontFamily: "heading",
    fontWeight: "semibold",
    fontSize: { base: "md", md: "lg" },
    mt: { base: 6, md: 8 },
    mb: 2,
  },
  p: {
    fontFamily: "body",
    fontWeight: "normal",
    fontSize: "md",
    lineHeight: 6,
    my: 6,
  },
  a: {
    fontWeight: 500,
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: {
      textDecoration: "underline",
    },
    _focus: {
      boxShadow: "outline",
    },
  },
  hr: {
    my: { base: 12, md: 14 },
    borderColor: "gray.200",

    _dark: {
      borderColor: "gray.600",
    },
  },
  blockquote: {
    fontStyle: "italic",
    fontWeight: "semibold",
    paddingStart: 4,
    my: { base: 6, md: 8 },
    borderStartWidth: "4px",
    borderStartColor: "gray.200",

    _dark: {
      borderStartColor: "gray.600",
    },
  },

  pre: {
    p: 4,
    rounded: "md",
    bg: "gray.700",
    color: "gray.50",
    overflow: "auto",

    _dark: {
      bg: "gray.800",
    },

    code: {
      fontWeight: "normal",

      "&::before, &::after": {
        content: '""',
      },
    },
  },
  code: {
    fontWeight: "semibold",

    "&::before, &::after": {
      content: '"`"',
    },
  },

  figure: {
    my: 8,

    figcaption: {
      color: "gray.400",
      mt: 3,

      _dark: {
        color: "gray.500",
      },
    },
  },

  ul: {
    paddingStart: 6,
    listStyleType: "disc",
  },
  ol: {
    paddingStart: 6,
  },
  li: {
    paddingStart: 2,
    my: 3,
  },
  "ol>li::marker": {
    color: "gray.400",

    _dark: {
      color: "gray.500",
    },
  },
  "ul>li::marker": {
    color: "gray.500",

    _dark: {
      color: "gray.300",
    },
  },

  table: {
    width: "full",
    my: 8,
    textAlign: "start",

    thead: {
      borderBottomWidth: "1px",
      borderBottomColor: "gray.300",

      _dark: {
        borderBottomColor: "gray.600",
      },
    },

    th: {
      textAlign: "inherit",
      fontWeight: 600,
      p: { base: 2, md: 3 },
    },

    td: {
      p: { base: 2, md: 3 },
      verticalAlign: "baseline",
    },

    tbody: {
      tr: {
        borderBottomWidth: "1px",
        borderBottomColor: "gray.200",

        _dark: {
          borderBottomColor: "gray.700",
        },

        ":last-of-type": {
          borderBottomWidth: "0px",
          borderBottomColor: "transparent",
        },
      },
    },

    tfoot: {
      tr: {
        borderTopWidth: "1px",
        borderTopColor: "gray.300",

        _dark: {
          borderTopColor: "gray.600",
        },
      },
    },
  },

  "h1 + *, h2 + *, h3 + *, h4 + *, hr + *": {
    mt: 0,
  },
});

const variantShort: SystemStyleFunction = () => ({
  h1: {
    fontFamily: "heading",
    fontWeight: "bold",
    fontSize: { base: "3xl", md: "4xl" },
    mb: { base: 3, md: 4 },
  },
  h2: {
    fontFamily: "heading",
    fontWeight: "bold",
    fontSize: { base: "xl", md: "2xl" },
    mt: { base: 6, md: 7 },
    mb: { base: 3, md: 4 },
  },
  h3: {
    fontFamily: "heading",
    fontWeight: "semibold",
    fontSize: { base: "lg", md: "xl" },
    mt: { base: 4, md: 5 },
    mb: { base: 1, md: 2 },
  },
  h4: {
    fontFamily: "heading",
    fontWeight: "semibold",
    fontSize: { base: "md", md: "lg" },
    mt: { base: 3, md: 4 },
    mb: 2,
  },
  p: {
    fontFamily: "body",
    fontWeight: "normal",
    fontSize: "md",
    lineHeight: 6,
    my: 2,
  },
  hr: {
    my: { base: 6, md: 7 },
  },
  li: {
    my: 1,
  },
});

const _theme = {
  baseStyle,
  variants: {
    short: variantShort,
  },
};

export function withProse(config?: ComponentSingleStyleConfig): ThemeExtension {
  return (theme) => {
    return mergeThemeOverride(theme, {
      components: {
        Prose: mergeThemeOverride(_theme, config),
      },
    });
  };
}
