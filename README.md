## Contract Testing using PactJs

### Pré-Requisitos:

* Necessário ter instalado e configurado o Node e o NPM
* Renomear o arquivo .env.example para .env 
* Opcional: Ter o docker rodando localmente

### 1. Primeiros passos: Baixar todas as dependências

> npm i

### 2. Renomear o arquivo .env.example

> mv .env.example .env

### 3. Para gerar um pacto, executar o script:

> npm run test:consumer

### 4. O arquivo gerado pode ser enviado para o Pact Broker de duas formas:

* Via Docker (Necessário ter o Docker configurado, seguir os passos descritos neste artigo pra executar dessa forma: https://medium.com/beyondtest/pact-broker-via-docker-images-7d6bf66dd5ea)

* Via Pactflow

Para executar em ambas plataformas se faz necessário definir alguns valores dentro do arquivo .env

Para a alternativa via Docker definir o valor da variável:

```json
PACT_LOCAL_BROKER=
```
E pra enviar o Pact File, rodar o seguinte comando:

> npm run publish:broker

Ja para a segunda opção, é necessário definir a url/token do Pactflow:

```json
PACTFLOW_URI=

PACTFLOW_TOKEN=
```

E pra enviar o Pact File, rodar o seguinte comando:

> npm run publish:pactflow

### 5. Para verificar o pacto, é necessário rodar dois scripts:

* O primeiro script a ser executado irá criar um servidor mock que servirá de exemplo na validação do pacto:

> npm run up:mock-service

* O segundo script deverá ser executado dependendo de onde o pacto foi gerado. Caso tenha sido criado no Docker, rodar o comando:

> npm run test:provider-broker

* Caso tenha sido enviado para o PactFlow, rodar o comando:

> npm run test:provider-pactflow