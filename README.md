# Agenda de Loja (API)

Uma api que disponibiliza os horários disponíveis na agenda da loja inteira.

### Features

##### Rotas:

- Consulta de horários livres ainda na loja.
- Consulta de horários marcados para cada profissionais.
- Consulta dados de cada profissional.

##### Um toque a mais...

- Cobertura de testes e2e
- Swagger
- CronJob (a cada 30min das 8am até 18pm)

### Tech

##### Tecnologias usadas:

- Nestjs - Framework para criar aplicativos web com Node.js, escalonáveis e eficientes.
- Swagger - API para criar a documentação.
- Axios - Biblioteca para o requisições HTTP.
- Visual Studio Code - Editor de codigo.

### Instalação

Esse projeto precisa do [Node.js](https://nodejs.org/) v4+ para rodar.

Instale as dependências e inicie o servidor.

###### Primeiro comando

```sh
 npm install
```

###### Rodar o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

###### Testes

```bash
# e2e tests
$ npm run test:e2e
```
