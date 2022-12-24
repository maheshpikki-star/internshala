import React, { useEffect } from "react";
import Apxor from "apxor";
const DevEnv = () => {
  useEffect(() => {
    Apxor.logEvent("ItemPageViewed", {
      "Item type": "Subjects",
      "Item name": "Dev Env",
      ItemTopic: "Development environment",
    });
  }, []);
  return (
    <div id="subjects_devenv" className="subjects">
      <br></br>
      <br></br>
      <br></br>
      <h1>Development Environment</h1>
      <p>
        A development environment is the collection of processes and tools that
        are used to develop the source code for a program or software product.
        This involves the entire environment that supports the process end to
        end, including development, staging and production servers.
      </p>
      <h2 id="devenv-IDE">IDE - Integrated Development Environment</h2>
      <p>
        An integrated development environment is a software application that
        provides comprehensive facilities to computer programmers for software
        development. An IDE normally consists of at least a source code editor,
        build automation tools and a debugger. Below are the IDE's that we use
        most in our day-to-day development activities at Apxor.
      </p>
      <h3 id="visual-studio">Visual Studio Code</h3>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/">
            Download Visual Studo Code
          </a>
        </li>
        <li>
          <a href="https://code.visualstudio.com/docs">
            Visual Studo Code documentation
          </a>
        </li>
        <li>
          <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">
            Visual Studo Code shortcuts
          </a>
        </li>
      </ul>

      <h3 id="intellij-idea">IntelliJ IDEA</h3>
      <ul>
        <li>
          <a href="https://www.jetbrains.com/idea/download/">
            Download IntelliJ IDEA
          </a>
        </li>
        <li>
          <a href="https://www.jetbrains.com/help/idea/getting-started.html">
            IntelliJ IDEA documentation
          </a>
        </li>
        <li>
          <a href="https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html">
            IntelliJ IDEA shortcuts
          </a>
        </li>
      </ul>

      <h3 id="xcode-ide">XCode</h3>
      <ul>
        <li>
          <a href="https://developer.apple.com/download/all/?q=Xcode">
            Download XCode
          </a>
        </li>
        <li>
          <a href="https://developer.apple.com/documentation/xcode/">
            XCode documentation
          </a>
        </li>
        <li>
          <a href="https://swifteducation.github.io/assets/pdfs/XcodeKeyboardShortcuts.pdf">
            XCode shortcuts
          </a>
        </li>
      </ul>
      <h3 id="android-studio">Android Studio</h3>
      <ul>
        <li>
          <a href="https://developer.android.com/studio">
            Download Android Studio
          </a>
        </li>
        <li>
          <a href="https://developer.android.com/studio/intro">
            Android Studio documentation
          </a>
        </li>
        <li>
          <a href="https://developer.android.com/studio/intro/keyboard-shortcuts">
            Android Studio shortcuts
          </a>
        </li>
      </ul>

      <h2 id="devenv-docker">Docker</h2>
      <p>
        Docker is an open platform for developing, shipping, and running
        applications. Docker enables you to separate your applications from your
        infrastructure so you can deliver software quickly. With Docker, you can
        manage your infrastructure in the same ways you manage your
        applications. By taking advantage of Docker’s methodologies for
        shipping, testing, and deploying code quickly, you can significantly
        reduce the delay between writing code and running it in production.
      </p>
      <p>
        Docker provides the ability to package and run an application in a
        loosely isolated environment called a container. The isolation and
        security allows you to run many containers simultaneously on a given
        host. Containers are lightweight and contain everything needed to run
        the application, so you do not need to rely on what is currently
        installed on the host. You can easily share containers while you work,
        and be sure that everyone you share with gets the same container that
        works in the same way.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pTFZFxd4hOI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2 id="devenv-kube">Kubernetes</h2>
      <p>
        Kubernetes (sometimes shortened to K8s with the 8 standing for the
        number of letters between the “K” and the “s”) is an open source system
        to deploy, scale, and manage containerized applications anywhere.
      </p>
      <h3>Why Kubenetes?</h3>
      <ul>
        <li>
          <span>
            <strong>Automated operations</strong>
          </span>
          <br></br>
          <span>
            Kubernetes has built-in commands to handle a lot of the heavy
            lifting that goes into application management, allowing you to
            automate day-to-day operations. You can make sure applications are
            always running the way you intended them to run.
          </span>
        </li>
        <li>
          <span>
            <strong>Infrastructure abstraction</strong>
          </span>
          <br></br>
          <span>
            When you install Kubernetes, it handles the compute, networking, and
            storage on behalf of your workloads. This allows developers to focus
            on applications and not worry about the underlying environment.
          </span>
        </li>
        <li>
          <span>
            <strong>Service health monitoring</strong>
          </span>
          <br></br>
          <span>
            Kubernetes continuously runs health checks against your services,
            restarting containers that fail, or have stalled, and only making
            available services to users when it has confirmed they are running.
          </span>
        </li>
      </ul>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/s_o8dwzRlu4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DevEnv;
