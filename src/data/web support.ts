export type deviceType = "computer" | "phone";
export type browserType = "chrome" | "edge" | "firefox" | "safari"
export type webSupportType = {
  name: browserType;
  support: boolean | "unknown";
};

export const webSupport: Record<deviceType, webSupportType[]> = {
  computer: [
    {
      name: "chrome",
      support: true,
    },
    {
      name: "edge",
      support: true,
    },
    {
      name: "firefox",
      support: "unknown",
    },
    {
      name: "safari",
      support: false,
    },
  ],
  phone: [
    {
      name: "chrome",
      support: true,
    },
    {
      name: "edge",
      support: true,
    },
    {
      name: "firefox",
      support: "unknown",
    },
    {
      name: "safari",
      support: true,
    },
  ],
};
