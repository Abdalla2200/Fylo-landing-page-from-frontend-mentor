tailwind.config = {
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: "20px", // Default padding for all containers
      },
      colors: {
        veryDarkBlue: "hsl(243, 87%, 12%)",
        desaturatedBlue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224, 93%, 58%)",
        moderateCyan: "hsl(170, 45%, 43%)",
        lightGrayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        bodyFont: ["Open Sans", "serif"],
        headingFont: ["Raleway", "sans-serif"],
      },
    },
  },
};
