
# React App.



## Project Description

- Source code base of React Ts
- Integrate Sonar lint

## Requirements

- Basic ReactJs knowledge
- Basic HTML, CSS knowledge



## Getting Started

After getting the starter files, you need to go the file directory and run

```shell
npm install
```

and after that start the dev server.

```shell
npm start
```

## Sonarqube
(for Developer: need to install extension eg: [SonarLint - Visual code](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode#:~:text=SonarLint%20for%20Visual%20Studio%20Code,as%20you%20create%20your%20code.))

#### Why use SonarQube?
- Its open-source version is free despite its commercial competitors.
- It empowers developers to write cleaner and safer code.
- It helps you to reduce technical debt with clean and maintainable code, to increase developer velocity!
- It allows you to identify possible security flaws before going to production.
- It can be added to CI/DC flows.
- Preventions will be always cheaper than solving a big security issue when it appears.

Setup SonarQube on local pc
Start Docker and run docker compose to host Sonarqube
```shell
docker-compose up
```

[SonarQube UI: http://localhost:9000/](http://localhost:9000/).

Log in to SonarQube (default init)
- Username: admin
- Password: admin

<i>(After you login into the system, it will require you to change the password and finally, you are able to see the main dashboard and we are ready to create a new project.)</i>

#### Run sonar and report
```shell
npm sonar
```
- Open link to see report (example: http://localhost:9000/dashboard?id=source-base-react)



## License

[MIT](https://choosealicense.com/licenses/mit/)

Happy Coding! 🚀
