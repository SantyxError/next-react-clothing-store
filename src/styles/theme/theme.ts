interface DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    background: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
    link: string;
    linkHover: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    black: string;
  };

  fontFamily: {
    primary: string;
    secondary: string;
    accent: string;
  };

  fontSize: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  fontWeights: {
    regular: number;
    medium: number;
    bold: number;
  };

  spacing: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
  };

  borderRadius: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  border: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  boxShadow: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  lineHeight: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  opacity: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  };

  mediaQueries: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  zIndex: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
  };
}

export const theme: DefaultTheme = {
  color: {
    primary: "#1976d2", // Azul vibrante
    secondary: "#f44336", // Rojo vibrante
    background: "#ffffff", // Blanco
    backgroundSecondary: "#f5f5f5", // Gris suave
    textPrimary: "#333333", // Gris oscuro
    textSecondary: "#757575", // Gris medio
    link: "#1565c0", // Azul oscuro para enlaces
    linkHover: "#0d47a1", // Azul muy oscuro para hover
    border: "#e0e0e0", // Gris claro para bordes
    success: "#4caf50", // Verde para éxito
    warning: "#ffeb3b", // Amarillo para advertencia
    error: "#d32f2f", // Rojo oscuro para error
    black: "#000000", //Negro
  },

  fontFamily: {
    primary: "Arial, sans-serif",
    secondary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    accent: "'Courier New', Courier, monospace",
  },

  fontSize: {
    1: "0.6rem",
    2: "0.8rem",
    3: "1rem",
    4: "1.2rem",
    5: "1.4rem",
    6: "1.6rem",
    7: "1.8rem",
    8: "2rem",
    9: "3rem",
    10: "4.5rem",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600,
  },

  spacing: {
    0: "0rem",
    1: "0.4rem",
    2: "0.8rem",
    3: "1.2rem",
    4: "1.6rem",
    5: "2rem",
    6: "2.5rem",
    7: "3rem",
    8: "4rem",
    9: "5rem",
    10: "6rem",
    11: "7rem",
  },

  borderRadius: {
    0: "0rem",
    1: "0.2rem",
    2: "0.4rem",
    3: "0.6rem",
    4: "0.8rem",
    5: "1rem",
    6: "1.2rem",
    7: "1.4rem",
    8: "1.6rem",
    9: "1.8rem",
    10: "2rem",
  },

  border: {
    1: "0.1rem",
    2: "0.2rem",
    3: "0.4rem",
    4: "0.6rem",
    5: "0.8rem",
    6: "1rem",
    7: "1.2rem",
    8: "1.4rem",
    9: "1.6rem",
    10: "2rem",
  },

  boxShadow: {
    1: "0 1px 2px rgba(0, 0, 0, 0.1)",
    2: "0 2px 4px rgba(0, 0, 0, 0.15)",
    3: "0 3px 6px rgba(0, 0, 0, 0.2)",
    4: "0 4px 8px rgba(0, 0, 0, 0.25)",
    5: "0 6px 12px rgba(0, 0, 0, 0.3)",
    6: "0 8px 16px rgba(0, 0, 0, 0.35)",
    7: "0 10px 20px rgba(0, 0, 0, 0.4)",
    8: "0 12px 24px rgba(0, 0, 0, 0.45)",
    9: "0 14px 28px rgba(0, 0, 0, 0.5)",
    10: "0 16px 32px rgba(0, 0, 0, 0.55)",
  },

  lineHeight: {
    1: "0.6rem",
    2: "0.8rem",
    3: "1rem",
    4: "1.2rem",
    5: "1.4rem",
    6: "1.6rem",
    7: "1.8rem",
    8: "2rem",
    9: "3rem",
    10: "4.5rem",
  },

  opacity: {
    1: "0.1",
    2: "0.2",
    3: "0.3",
    4: "0.4",
    5: "0.5",
    6: "0.6",
    7: "0.7",
    8: "0.8",
    9: "0.9",
    10: "1",
  },

  mediaQueries: {
    mobile: "@media (max-width: 48rem)",
    tablet: "@media (min-width: 48rem) and (max-width: 64rem)",
    desktop: "@media (min-width: 64rem)",
  },

  zIndex: {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    7: 70,
    8: 80,
    9: 90,
    10: 100,
  },
};
