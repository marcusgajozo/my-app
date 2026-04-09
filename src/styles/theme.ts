export const theme = {
  colors: {
    primary: {
      default: "#c68b98",
      50: "#f9f3f5",
      100: "#eddbdf",
      200: "#e5cad0",
      300: "#d9b1ba",
      400: "#d1a2ad",
      500: "#c68b98",
      600: "#b47e8a",
      700: "#8d636c",
      800: "#6d4c54",
      900: "#533a40",
    },

    secondary: {
      default: "#BFA06D",
      50: "#f9f6f0",
      100: "#ebe2d2",
      200: "#e2d3bc",
      300: "#d4bf9d",
      400: "#ccb38a",
      500: "#bfa06d",
      600: "#ae9263",
      700: "#88724d",
      800: "#69583c",
      900: "#50432e",
    },

    tertiary: {
      default: "#F5EBE0",
      50: "#fefdfc",
      100: "#fcf9f5",
      200: "#faf6f1",
      300: "#f8f2ea",
      400: "#f7efe6",
      500: "#f5ebe0",
      600: "#dfd6cc",
      700: "#aea79f",
      800: "#87817b",
      900: "#67635e",
    },

    neutral: "#7D7571",
    warning: "#FEDBA3 ",
    danger: "#BA1A1A",
    success: "#7ED321",

    black: "#201B18 ",
  },

  typography: {
    "text-lg": {
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 32,
    },

    "text-md": {
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 24,
    },

    "text-sm": {
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 20,
    },

    "text-xs": {
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 16,
    },
  },
} as const;
