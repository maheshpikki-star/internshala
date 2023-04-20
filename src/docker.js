import React from "react";

export default function Docker() {
  return (
    <div>
      <br></br>
      <br></br>

      <h1 style={{ margin: "30px", textAlign: "center" }}>Docker</h1>

      <p style={{ margin: "30px", textAlign: "justify" }}>
        Docker is a container management service. The keywords of Docker are
        develop, ship and run anywhere. The whole idea of Docker is for
        developers to easily develop applications, ship them into containers
        which can then be deployed anywhere. The initial release of Docker was
        in March 2013 and since then, it has become the buzzword for modern
        world development, especially in the face of Agile-based projects.
      </p>
      <h2 style={{ margin: "30px", textAlign: "justify" }}>
        Features of Docker
      </h2>

      <ul style={{ margin: "30px", textAlign: "justify" }}>
        <li>
          Docker has the ability to reduce the size of development by providing
          a smaller footprint of the operating system via containers.
        </li>{" "}
        <li>
          With containers, it becomes easier for teams across different units,
          such as development, QA and Operations to work seamlessly across
          applications.{" "}
        </li>
        <li>
          You can deploy Docker containers anywhere, on any physical and virtual
          machines and even on the cloud.
        </li>{" "}
        <li>
          {" "}
          Since Docker containers are pretty lightweight, they are very easily
          scalable.
        </li>
      </ul>

      <h2 style={{ margin: "30px", textAlign: "justify" }}>
        Components of Docker
      </h2>
      <ul style={{ margin: "30px", textAlign: "justify" }}>
        Docker has the following components
        <li>
          Docker for Mac − It allows one to run Docker containers on the Mac OS.
        </li>{" "}
        <li>
          {" "}
          Docker for Linux − It allows one to run Docker containers on the Linux
          OS.
        </li>{" "}
        <li>
          Docker for Windows − It allows one to run Docker containers on the
          Windows OS.
        </li>{" "}
        <li>
          Docker Engine − It is used for building Docker images and creating
          Docker containers.
        </li>{" "}
        <li>
          Docker Hub − This is the registry which is used to host various Docker
          images.{" "}
        </li>
        <li>
          Docker Compose − This is used to define applications using multiple
          Docker containers.
        </li>
      </ul>
          </div>
  );
}
