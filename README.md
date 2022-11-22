# <p align = "center"> NG.CASH </p>

<p align="center">
   <img src="https://i.imgur.com/iMemgmp.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lucaslafere-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lucaslafere/ngcash-api?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

Aplicativo criado como teste técnico da NG.Cash, aplicativo financeiro da Nova Geração!

O objetivo é possibilitar que usuários da NG consigam realizar transferências internas entre si.

***

## :computer:	 Tecnologias e Conceitos

- REST API
- JWT
- Node.js
- TypeScript
- PostgreSQL
- Layered architecture
- Criptografia de dados sensíveis
- Docker

***

## 🏁 Rodando o app

Primeiro, verifique se você possui a última versão estável dos aplicativos [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) localmente.

Você também precisará do [PostgreSQL](https://www.postgresql.org/download/) rodando localmente se você pretende usar seu próprio DB. (Não é necessário se planeja utilizar o Docker, veja a seção abaixo).

Primeiro, clone esse repositório na sua máquina:

```
git clone https://github.com/lucaslafere/ngcash-api
```
Depois disso, você precisará criar um arquivo .env de acordo com os critérios apresentados no .env.example, na pasta principal do projeto. O arquivo deve ser criado no mesmo local onde está o .env.example.

Depois, dentro da pasta clonada, rode o seguinte comando para instalar as dependências:

```
npm install
```

Quando finalizado, apenas inicialize um novo servidor, com o comando:
```
npm run dev
```

:stop_sign: Se você deseja utilizar o docker para rodar sua aplicação e o banco de dados, basta seguir os seguintes comandos:

Primeiro, clone esse repositório na sua máquina:

```
git clone https://github.com/lucaslafere/ngcash-api
```
Depois disso, você precisará construir a imagem dos containers necessários para a aplicação. (Tenha certeza de que possui a última versão estável do [Docker](https://docs.docker.com/compose/install/) e [Docker-Compose](https://docs.docker.com/compose/install/) instalados em seu computador).

Após verificar/instalar o Docker, rode o comando que constrói as imagens:

```
docker-compose build
```

Quando finalizado, apenas inicialize a aplicação, com o comando:
```
docker-compose up
```

 ## :rocket: Rotas

```yml
POST /sign-up
    - Registra um novo usuário, criando uma conta.
    - username deve ser único e ter no mínimo 3 caracteres
    - A senha deve conter no mínimo 8 caracteres, sendo um número e uma letra maiúscula.
    - headers: {}
    - body: {
    "username": "loremlorem",
    "password": "Loremlorem1"
    }
```

```yml
POST /sign-in
    - Rota de login
    - headers: {}
    - body: {
    "username": "loremlorem",
    "password": "Loremlorem1"
    }
```

```yml
GET /account (autenticada)
    - Verifica o saldo atual da conta do usuário logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
PUT /transactions/cash-out (autenticada)
    - Rota que transfere dinheiro do usuário logado, para outro usuário cadastrado na rede.
    - O número descrito em amount deve ser enviado levando decimais em consideração. Ou seja, R$10,00 = 1000.
    - headers: { "Authorization": "Bearer $token" }
    - body: {
   "amount": 1000,
   "username": loremlorem
    }
```

```yml
GET /transactions/old (autenticada)
    - Lista todas as transações do usuário logado, ordenadas das mais antigas para as mais novas.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/new (autenticada)
    - Lista todas as transações do usuário logado, ordenadas das mais novas para as mais antigas.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/cash-out (autenticada)
    - Lista todas as transações de cash-out (transferências realizadas) do usuário logado.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/cash-out/old (autenticada)
    - Lista todas as transações de cash-out (transferências realizadas) do usuário logado, ordenadas das mais antigas para as mais novas.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/cash-out/new (autenticada)
    - Lista todas as transações de cash-out (transferências realizadas) do usuário logado, ordenadas das mais novas para as mais antigas.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/cash-in (autenticada)
    - Lista todas as transações de cash-in (transferências recebidas) do usuário logado.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/cash-in/old (autenticada)
    - Lista todas as transações de cash-in (transferências recebidas) do usuário logado, ordenadas das mais antigas para as mais novas.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /transactions/cash-in/new (autenticada)
    - Lista todas as transações de cash-in (transferências recebidas) do usuário logado, ordenadas das mais novas para as mais antigas.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
