
# Projeto Trybe Futebol Clube

O Trybe Futebol Clube é um site informativo sobre partidas e classificações de futebol! ⚽️

O projeto é responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, foi construido um back-end dockerizado utilizando modelagem de dados através do Sequelize. 

O foi back-end implementado regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.



## Instalação

1. Clone o repositório.
```bash
git clone git@github.com:Thromoto/Trybe-Futebol-Clube.git
```
2. Entre na pasta do repositório que você acabou de clonar.

3. Execute o comando na raiz do projeto.
```bash
npm run compose:up
```
* Serão inicializados três containers (db, app_backend e app_frontend)

4. Instale as dependências.
```bash
npm install
```

5. Acesse a aplicação no seu navegador através do endereço.
```bash
http://localhost:3000
```


## Stack utilizada

Typescript, Node.js, Sequelize, Docker, docker-compose, SQL, JWT, Mocha, sinon-chai.
