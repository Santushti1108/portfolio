import Reveal from "./Reveal";
// import { profile } from "../data/content";

export default function GithubStats() {
  // const { githubUsername } = profile;

  return (
    <section className="relative px-6 py-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="">
            {/* <p className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
              GitHub Activity
            </p> */}
            <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
              {/* <div className="overflow-x-auto rounded-xl bg-black/20 p-4">
                <img
                  src={`https://ghchart.rshah.org/FACC15/${githubUsername}`}
                  alt={`${profile.name}'s GitHub contribution graph`}
                  className="min-w-[600px]"
                  loading="lazy"
                />
              </div> */}
              <div className="flex flex-col gap-4">
                {/* <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=FACC15&icon_color=FACC15&text_color=9CA3AF&count_private=true`}
                  alt="GitHub stats"
                  loading="lazy"
                  className="w-full"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=FACC15&text_color=9CA3AF`}
                  alt="Most used languages"
                  loading="lazy"
                  className="w-full"
                /> */}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
