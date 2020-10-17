<h1 align="center">
  <br />
  <img alt="Happy" src="./github/happy-logo.svg" width="200px" />
</h1>

<h4 align="center">O Happy é uma aplicação para conectar pessaoas que desejam visitar orfanatos, orientando estas e levando felicidade a todas estas crianças. </h4>

<p align="center">
  <img alt="Linguagem mais usada" src="https://img.shields.io/github/languages/top/marcosribeirodacunha/happy?style=flat">
  <img alt="Objetivo: estudo" src="https://img.shields.io/badge/purpose-study-lightgrey?style=flat">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a href="https://rocketseat.com.br/">
    <img alt="Feito por: Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-blueviolet?style=flat">
  </a>
</p>

<p align="center">
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-créditos">Créditos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img src="./github/happy-mobile.png" width="21%">&nbsp;&nbsp;<img src="./github/happy-web.png" width="74%">
</p>

# ⚙ Instalação

Para clonar e executar a aplicação é necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que instala também o [npm](http://npmjs.com)). Em sua linha de comando:

```bash
# Clone o repositório
$ git clone https://github.com/marcosribeirodacunha/happy.git

# Entre no repositório
$ cd happy
```

### ❗ Importante

- Renomei o arquivo `.env.example` para `.env` dentro de `/backend` e `/web`

- Para renderizar o mapa, crie uma conta grátis em [mapbox](https://www.mapbox.com/) e insira sua chave pública no arquivo `.env` de `/web`, conforme solicitado:

  - `REACT_APP_MAPBOX_TOKEN=INSIRA_SUA_CHAVE_DO_MAPBOX_AQUI`

- No arquivo `.env` de `/backend`, substituir conforme solicitado:

  - `API_URL=http://LOCALHOST:3333_OU_URLEXPO:3333`

  - Caso queira testar apenas a parte **web** da aplicação:

    - Substitua por `http://localhost:3333`

  - Caso queira testar apenas a parte **mobile**, ou a **mobile** em conjunto com a **web**:
    - Substitua pelo IP de conexão com [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) com :3333 no final (ex: `http://192.168.1.10:3333`);
    - Nesse caso, também é importante colocar esse mesmo IP de conexão na `baseURL` dentro do arquivo `mobile/src/services/api.ts`.

- No arquivo `.env` de `/backend` modifique as seguintes variáveis com os valores relativos ao banco de dados postgres:

  - `TYPEORM_HOST`
  - `TYPEORM_PORT`
  - `TYPEORM_USERNAME`
  - `TYPEORM_PASSWORD`
  - `TYPEORM_DATABASE`

- Crie um banco de dados com o mesmo nome do valor inserido na váriável `TYPEORM_DATABASE`.

## 💻 Web

```bash
# Instale as dependências dentro do diretório web
$ cd web
$ npm install
// ou yarn

# Iniciar a aplicação
$ npm start
// ou yarn start
```

## 💾 Backend

```bash
# Instale as dependências dentro do diretório backend
$ cd backend
$ npm install
// ou yarn

# Criar as tabelas no banco de dados
$ npm run typeorm migration:run
// ou yarn typeorm migration:run

# Iniciar a aplicação
$ npm run dev
// ou yarn dev
```

## 📱 Mobile

```bash
# Instale as dependências dentro do diretório mobile
$ cd mobile
$ npm install
// ou yarn

# Iniciar a aplicação
$ npm start
// ou yarn start
```

# 👨‍💻 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [TypeORM](https://typeorm.io/#/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Leaflet](https://react-leaflet.js.org/)

Para mais detalhes sobre recursos e tecnologias:

- [README do Backend](https://github.com/marcosribeirodacunha/happy/tree/master/backend)
- [README do Frontend (web)](https://github.com/marcosribeirodacunha/happy/tree/master/web)
- [README do Mobile](https://github.com/marcosribeirodacunha/happy/tree/master/mobile)

# 🎞 Créditos

Aplicação construída durante a Next Level Week #3, realizada por :rocket: [Rocketseat](https://rocketseat.com.br/).

# 📜 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
