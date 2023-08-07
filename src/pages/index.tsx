import type { NextPage } from "next"

import { M_PLUS_Rounded_1c, Slackside_One } from "next/font/google"

const fontRounded = M_PLUS_Rounded_1c({
  weight: ["400"],
  display: "swap",
  preload: false,
})

const fontSlackside = Slackside_One({
  weight: ["400"],
  display: "swap",
  preload: false,
})

const Page: NextPage = () => {
  return (
    <main>
      <h1 className={fontRounded.className}>
        M+ Rounded 1c えむぷらすらんでぃどわんしー
      </h1>
      <p className={fontSlackside.className}>
        Slackside One すらっくさいどわん
      </p>
    </main>
  )
}

export default Page
