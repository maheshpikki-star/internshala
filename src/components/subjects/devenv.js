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
      <div>
        <h1>Development Environment</h1>
        <p>
          A development environment is the collection of processes and tools
          that are used to develop the source code for a program or software
          product. This involves the entire environment that supports the
          process end to end, including development, staging and production
          servers.
        </p>
      </div>
      <div>
        <h2 id="devenv-IDE">IDE - Integrated Development Environment</h2>
        <p>
          An integrated development environment is a software application that
          provides comprehensive facilities to computer programmers for software
          development. An IDE normally consists of at least a source code
          editor, build automation tools and a debugger. Below are the IDE's
          that we use most in our day-to-day development activities at Apxor.
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
      </div>
      <div>
        <h2 id="devenv-docker">Docker</h2>
        <p>
          Docker is an open platform for developing, shipping, and running
          applications. Docker enables you to separate your applications from
          your infrastructure so you can deliver software quickly. With Docker,
          you can manage your infrastructure in the same ways you manage your
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
      </div>
      <div>
        <h2 id="devenv-kube">Kubernetes</h2>
        <p>
          Kubernetes (sometimes shortened to K8s with the 8 standing for the
          number of letters between the “K” and the “s”) is an open source
          system to deploy, scale, and manage containerized applications
          anywhere.
        </p>
        <h3>Why Kubenetes?</h3>
        <ul>
          <li>
            <span className="list-title">Automated operations</span>
            <span>
              Kubernetes has built-in commands to handle a lot of the heavy
              lifting that goes into application management, allowing you to
              automate day-to-day operations. You can make sure applications are
              always running the way you intended them to run.
            </span>
          </li>
          <li>
            <span className="list-title">Infrastructure abstraction</span>
            <span>
              When you install Kubernetes, it handles the compute, networking,
              and storage on behalf of your workloads. This allows developers to
              focus on applications and not worry about the underlying
              environment.
            </span>
          </li>
          <li>
            <span className="list-title">Service health monitoring</span>
            <span>
              Kubernetes continuously runs health checks against your services,
              restarting containers that fail, or have stalled, and only making
              available services to users when it has confirmed they are
              running.
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
      <div>
        <h2 id="devenv-sqlnosql">SQL Vs NoSQL</h2>
        <p>
          SQL and NoSQL are two different types of databases. SQL, or Structured
          Query Language, is a programming language used to manage and
          manipulate relational databases. It is based on the relational model,
          which organizes data into tables with rows and columns. NoSQL, on the
          other hand, stands for "Not Only SQL" and refers to a variety of
          databases that are designed to handle large amounts of data that may
          not be structured in a traditional, tabular manner.
        </p>
        <p>Some key differences between SQL and NoSQL databases include: </p>
        <ul>
          <li>
            <span className="list-title">Data structure</span>
            <span>
              SQL databases are based on a fixed schema, which means that the
              structure of the database must be defined in advance and the data
              must conform to this structure. NoSQL databases, on the other
              hand, are often based on a flexible, hierarchical or
              document-oriented data model, which allows them to store data in a
              variety of formats and structures.
            </span>
          </li>
          <li>
            <span className="list-title">Query language</span>{" "}
            <span>
              SQL databases use SQL as their primary query language, while NoSQL
              databases often have their own query languages or use a more
              general-purpose language like JavaScript.
            </span>
          </li>
          <li>
            <span className="list-title">Scalability</span>{" "}
            <span>
              NoSQL databases are often designed to be more scalable than SQL
              databases, making them a good choice for handling large amounts of
              unstructured data. SQL databases, on the other hand, can be more
              difficult to scale horizontally (by adding more servers to the
              system).
            </span>
          </li>
          <li>
            <span className="list-title">ACID compliance</span>{" "}
            <span>
              SQL databases are typically ACID-compliant, which means that they
              support transactions, consistency, isolation, and durability.
              NoSQL databases may not support all of these properties, or may
              offer weaker guarantees. Overall, the choice between an SQL and a
              NoSQL database will depend on the specific needs of your
              application. SQL databases are a good choice for applications that
              require a high level of structure and support for transactions,
              while NoSQL databases are a better fit for applications that need
              to handle large amounts of unstructured data or require horizontal
              scaling.
            </span>
          </li>
        </ul>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t0GlGbtMTio"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2 id="devenv-rdbmsolap">RDBMS Vs OLAP</h2>
        <p>
          Relational Database Management Systems (RDBMS) and Online Analytical
          Processing (OLAP) systems are both types of databases, but they are
          designed for different purposes and handle data differently.
        </p>
        <p>
          <strong>RDBMS</strong> is a type of database management system (DBMS)
          that is based on the relational model, which organizes data into
          tables with rows and columns. RDBMS is designed to handle structured
          data and support transactions, which means that it can be used to
          store and manage data for a wide range of applications. Some examples
          of RDBMS include MySQL, Oracle, and Microsoft SQL Server.
        </p>
        <p>
          <strong>OLAP</strong>, on the other hand, is a type of database
          designed for fast querying and analysis of data. It is typically used
          to support business intelligence and decision making, and is
          particularly well-suited for handling large amounts of data that needs
          to be analyzed in real-time. OLAP databases are often based on a
          multi-dimensional data model, which allows users to view data from
          different perspectives and perform complex analyses. Some examples of
          OLAP systems include Microsoft Analysis Services and SAP BW.
        </p>
        <p>
          In general, RDBMS is more suitable for managing and storing data,
          while OLAP is better suited for analyzing and querying data. However,
          some systems, like hybrid OLAP (HOLAP) databases, combine elements of
          both RDBMS and OLAP and can be used for both transactional processing
          and data analysis.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GkZre_zkJJ0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2 id="devenv-mongo">MongoDB</h2>
        <p>
          <strong>MongoDB</strong> is a free and open-source NoSQL database
          management system that is designed to handle large amounts of data and
          support a variety of data models, including document, key-value, and
          graph. It is based on a distributed architecture, which means that it
          can scale horizontally across multiple servers and is designed to be
          highly available and fault-tolerant.
        </p>
        <p>
          One of the key features of MongoDB is its support for
          document-oriented storage. In this model, data is stored in the form
          of JSON-like documents, which can contain a variety of data types and
          can be nested to represent complex relationships. This makes it easy
          to store and query data that has a complex, hierarchical structure,
          and it also allows for more flexibility in the data model than is
          possible with a traditional, tabular database.
        </p>
        <p>
          MongoDB also includes a rich set of features for indexing, querying,
          and managing data, including support for full-text search,
          aggregation, and geospatial indexing. It can be used as the primary
          data store for a wide range of applications, including web, mobile,
          analytics, and real-time data processing.
        </p>
        <a href="https://www.mongodb.com/docs/manual/tutorial/getting-started/">
          Getting Started
        </a>
        <br></br>
        <a href="https://www.mongodb.com/docs/mongodb-vscode/playgrounds/">
          Playground setup for VSCode
        </a>
      </div>
      <div>
        <h2 id="devenv-clickhouse">ClickHouse</h2>
        <p>
          <strong>ClickHouse</strong> is an open-source column-oriented database
          management system developed by Yandex, a Russian internet company. It
          is designed to handle large amounts of data and support real-time
          analysis and reporting.
        </p>
        <p>
          One of the key features of ClickHouse is its ability to process and
          analyze data very quickly. It is optimized for high-performance
          querying and can handle billions of rows of data in real-time. It is
          also highly scalable, allowing it to be deployed on a large number of
          nodes and handle very large workloads.
        </p>
        <p>
          ClickHouse supports a variety of data types and has a rich set of
          features for working with data, including support for aggregations,
          window functions, and nested data structures. It can be used for a
          wide range of applications, including real-time analytics, data
          warehousing, and business intelligence.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WVk5_tQ-wx8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DevEnv;
