import type { NextPage } from "next"

const Page: NextPage = () => {
  return (
    <div className="min-h-screen font-rounded bg-sky-500">
      <main className="">
        <div className="flex flex-row-reverse gap-2 p-6 pr-4 h-[80vh]">
          <div className="flex flex-col items-end">
            <div className="flex flex-row-reverse flex-1 ">
              <div className="[content-visibility:auto] flex flex-row-reverse gap-4">
                <h1 className="[writing-mode:vertical-rl] text-5xl text-gray-50">
                  夏休み一行日記
                </h1>
                <div className="flex flex-col justify-end">
                  <div className="flex flex-col items-center w-12 h-52 bg-white">
                    <span className="text-sm text-sky-500">名前</span>
                    <span className="[writing-mode:vertical-rl] font-slackside text-5xl">
                      み～
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <span className="text-sm text-gray-50">毎日やること</span>
              <div className="flex flex-col items-center w-full h-12 bg-white">
                <span className="font-slackside text-2xl leading-5">
                  githubに
                  <br />
                  くさをはやす
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-1 p-1 bg-white rounded-sm">
            <div className="flex flex-col gap-1 text-lg text-gray-50">
              <div className="relative w-12 h-12 bg-sky-400">
                <span className="absolute top-0 left-1 text-gray-50">月</span>
                <div className="flex absolute inset-0 justify-center items-center">
                  <span className="w-[1.5px] h-full bg-gray-50 rounded rotate-45"></span>
                </div>
                <span className="absolute right-1 bottom-0 text-gray-50">
                  日
                </span>
              </div>
              <div className="[writing-mode:vertical-rl] flex justify-center items-center w-12 h-12 bg-sky-400">
                天気
              </div>
              <div className="[writing-mode:vertical-rl] flex flex-1 justify-center items-center w-12 bg-sky-400">
                できごと
              </div>
              <div className="[writing-mode:vertical-rl] flex justify-center items-center w-12 h-12 bg-sky-400">
                <p className="leading-5">
                  目標
                  <br />
                  達成
                </p>
              </div>
            </div>
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1 font-slackside">
                <div className="flex relative justify-center w-12 h-12 text-3xl leading-3 bg-sky-300">
                  <span className="absolute top-1 left-2">8</span>
                  <div className="flex absolute inset-0 justify-center items-center">
                    <span className="w-[1.5px] h-full bg-gray-50 rounded rotate-45"></span>
                  </div>
                  <span className="absolute right-1 bottom-3">{i + 1}</span>
                </div>
                <div className="flex justify-center items-center w-12 h-12 bg-sky-300">
                  たいふう
                </div>
                <div className="flex flex-1 justify-center w-12 bg-sky-300">
                  <p className="[writing-mode:vertical-rl] font-slackside text-lg">
                    きょうあったこと
                  </p>
                </div>
                <div className="flex justify-center w-12 h-12 text-5xl leading-7 bg-sky-300">
                  ○
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
