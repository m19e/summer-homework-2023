import localFont from "next/font/local"

export const rounded = localFont({
  src: [
    {
      path: "fonts/rounded/rounded-mplus-1c-thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "fonts/rounded/rounded-mplus-1c-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/rounded/rounded-mplus-1c-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-rounded",
  display: "swap",
})

export const slackside = localFont({
  src: [
    {
      path: "fonts/SlacksideOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-slackside",
  display: "swap",
})
