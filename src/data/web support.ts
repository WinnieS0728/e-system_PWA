export type deviceType = "computer" | "phone";
export type webSupportType = {
  name: "chrome" | "edge" | "firefox" | "safari";
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
      support: true,
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
