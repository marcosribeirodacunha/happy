<h1 align="center">
  <br />
  <img alt="Happy" src="./github/happy-logo.svg" width="200px" />
</h1>

<h4 align="center">O Happy é uma aplicação para conectar pessaoas que desejam visitar orfanatos, orientando estas e levando felicidade a todas estas crianças. </h4>

<p align="center">
  <img alt="Linguagem mais usada" src="https://img.shields.io/github/languages/top/marcosribeirodacunha/happy?style=flat">
  <img alt="Objetivo: estudo" src="https://img.shields.io/badge/purpose-study-lightgrey?style=flat">
  <a href="https://rocketseat.com.br/">
    <img alt="Feito por: Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-blueviolet?style=flat">
  </a>
</p>

<p align="center">
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#créditos">Créditos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
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

## 💻 Web

Antes de iniciar a aplicação web crie uma conta em [mapbox](https://www.mapbox.com/) e copie o access token em sua conta. Logo após renomeie o arquivo `.env.example` para `.env` e insira seu token na variavel `REACT_APP_MAPBOX_TOKEN`.

Logo após realize os seguintes passos:

```bash
# Instale as dependências dentro do diretório web
$ cd web
$ npm install
// ou yarn

# Rodar aplicação web (cd web)
$ npm start
// ou yarn start
```

# 👨‍💻 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Leaflet](https://react-leaflet.js.org/)

# 🎞 Créditos

Aplicação construída durante a Next Level Week #3, realizada por :rocket: [Rocketseat](https://rocketseat.com.br/).

# 📜 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
