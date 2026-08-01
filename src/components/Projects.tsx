import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { profile, highlightedProjects } from "../data/content";
import { useGithubRepos, type Repo } from "../lib/useGithubRepos";
import { HiOutlineExternalLink, HiOutlineStar } from "react-icons/hi";
import { FiGitBranch, FiGithub } from "react-icons/fi";

function score(repo: Repo) {
  const nameNorm = repo.name.toLowerCase().replace(/[-_]/g, " ");
  const isHighlighted = highlightedProjects.some((p) =>
    nameNorm.includes(p.toLowerCase().split(" ")[0])
  );
  return (
    (isHighlighted ? 1000 : 0) + repo.stargazers_count * 2 + repo.forks_count
  );
}

function ProjectCard({ repo, index }: { repo: Repo; index: number }) {
  return (
    <Reveal delay={(index % 6) * 0.06}>
      <div className="glass group flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-accent">
              {repo.name.replace(/[-_]/g, " ")}
            </h3>
            <div className="flex shrink-0 gap-2 text-text-muted">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${repo.name} on GitHub`}
                className="transition-colors hover:text-accent"
              >
                <FiGithub size={16} />
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open live demo for ${repo.name}`}
                  className="transition-colors hover:text-accent"
                >
                  <HiOutlineExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-secondary">
            {repo.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {repo.language && (
              <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-secondary">
                {repo.language}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-text-muted">
            <span className="flex items-center gap-1">
              <HiOutlineStar size={13} /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <FiGitBranch size={12} /> {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { repos, status } = useGithubRepos(profile.githubUsername);
  const [filter, setFilter] = useState<string>("All");

  const sorted = useMemo(
    () => [...repos].sort((a, b) => score(b) - score(a)),
    [repos]
  );

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => r.language && set.add(r.language));
    return ["All", ...Array.from(set)];
  }, [repos]);

  const filtered =
    filter === "All" ? sorted : sorted.filter((r) => r.language === filter);

  return (
    <section id="projects" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
                Projects
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Featured work.
              </h2>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs text-white transition-colors hover:border-accent/40"
            >
              <FiGithub /> @{profile.githubUsername}
            </a>
          </div>
        </Reveal>

        {status === "success" && languages.length > 2 && (
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilter(lang)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors duration-200 ${
                    filter === lang
                      ? "bg-accent text-[#09090B]"
                      : "glass text-text-secondary hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {status === "loading" &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="glass h-44 animate-pulse rounded-2xl"
              />
            ))}

          {status === "error" && (
            <div className="glass col-span-full rounded-2xl p-8 text-center text-text-secondary">
              Couldn't load repositories from GitHub right now. Visit{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline underline-offset-4"
              >
                github.com/{profile.githubUsername}
              </a>{" "}
              directly.
            </div>
          )}

          {status === "success" && filtered.length === 0 && (
            <div className="glass col-span-full rounded-2xl p-8 text-center text-text-secondary">
              No public repositories found for this filter yet.
            </div>
          )}

          {status === "success" &&
            filtered.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
