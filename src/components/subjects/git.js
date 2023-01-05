import React, { useEffect } from "react";
import Apxor from "apxor";
const Git = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Subjects",
      "Item name": "Git",
      ItemTopic: "Git learning path",
    });
  }, []);
  return (
    <div id="subjects_git" className="subjects">
      <h1>Git - A version control system</h1>
      <h2 id="git-learning-path">Learning Path</h2>
      <h3 id="git-basics">Basics</h3>
      <ul>
        <li>Git Config</li>
        <li>
          Clone : <strong>git clone</strong>
        </li>
        <li>
          Staging : <strong></strong>git add
        </li>
        <li>
          Committing : <strong>git commit</strong>
        </li>
        <li>
          What is <strong>.gitignore?</strong>
        </li>
        <li>Commit Hashes</li>
        <li>Forks & Remotes (Upstream, Origin etc.)</li>
        <li>
          Push : <strong>git push</strong>
        </li>
        <li>
          Pull : <strong>git pull</strong>
        </li>
        <li>
          Stash : <strong>git stash</strong>
        </li>
        <li>
          Branches : <strong>git switch</strong>, <strong>git branch</strong>
        </li>
        <li>Merge Requests</li>
      </ul>
      <h3 id="git-advanced">Advanced</h3>
      <ul>
        <li>Merge Conflicts, When do they emerge, & How to resolve?</li>
        <li>
          Cherry Picking : <strong>git cherry-pick</strong>
        </li>
        <li>
          Checkout : <strong>git checkout</strong>, & Branching out from there
        </li>
        <li>Merge vs Rebase</li>
        <li>Squashing & Interactive Rebase</li>
        <li>Reverse Merging main to feature-branch.</li>
        <li>Markdown, Gitlab Issues, MRs, Code Reviews.</li>
        <li>Git Tags, Releases, & Semantic Versioning.</li>
        <li>Conventional Commits.</li>
        <li>GitFLow vs GitHub WorkFlow vs GitLab WorkFlow.</li>
      </ul>
      <h2 id="git-references">References</h2>
      <p>
        Here is a playlist from free-coding-camp that discusses Git in detail
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br></br>
      <p>A practical guide to git</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/r50BKIFGCI0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 id="git-exercises">Exercises</h2>
      <h3>Exercise 1</h3>
      <ol>
        <li>Set up Git locally with SSH key authentication.</li>
        <li>Create a repository in GitHub and clone it locally.</li>
        <li>Create a branch apart from 'main' and make some changes.</li>
        <li>Merge both the branches.</li>
      </ol>
      <h3>Exercise 2</h3>
      <ol>
        <li>Try to generate a merge conflict and solve it.</li>
        <li>Try to learn cherry-pick and git rebasing the branches.</li>
        <li>
          Try to create a undo a commit by setting HEAD to previous commit.
        </li>
      </ol>
    </div>
  );
};

export default Git;
