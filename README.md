# Sistema de Cadastro de Pessoas


<div>
<img src="https://i.imgur.com/znB6f6F.png" alt="tela mobile" width="15%" >
<img src="https://i.imgur.com/lFBYuL7.png" alt="tela desktop"  width="60%" > 
 </div>



## Sobre o projeto
Este projeto é uma página que realiza um simples [CRUD](https://learn.microsoft.com/en-us/iis-administration/api/crud) no frontend, utilizando uma API Fake para fazer as simulações em tempo de desenvolvimento, ele foi criado com as tecnologias listadas abaixo. Nesta aplicação você consegue:
- Ver uma lista de pessoas cadastradas
- Editar os dados de alguma pessoa a lista
- Remover alguma pessoa da lista
- Adicionar uma ou mais pessoas à lista

Em breve terá o deploy da aplicação aqui, estarei a trabalhar mais alguns dias neste projeto melhorando o seu código e disponibilizando novas features!



## Tecnologias utilizadas
- [React.js](https://pt-br.reactjs.org/) [Framework]
- [Typescript](https://www.typescriptlang.org/) [Linguagem]
- [SAAS](https://sass-lang.com/) [pré-processador CSS]

**Packages**:
  - [json-server](https://www.npmjs.com/package/json-server#getting-started) [Api Fake (mock API)]
  - [node-sass](https://www.npmjs.com/package/node-sass)
  - [typescript-plugin-css-modules](https://www.npmjs.com/package/typescript-plugin-css-modules) [CSS modular]
  - [axios](https://www.npmjs.com/package/axios) [para fazer requisições a API]
  - [classnames](https://www.npmjs.com/package/classnames) [estilização condicional]
  - [useForm](https://www.useform.org/Use) [formulários para react]



##  Instalação
<details><summary><b>Intruções</b></summary>

1. No terminal da sua preferência execute o comando [git clone](https://www.git-scm.com/docs/git-clone):

    ```sh
    $ git clone https://github.com/Odisseu93/sitema-cadastro-de-pessoas
    ```

2. Entre na pasta do projeto:

    ```diff
    $ cd sitema-cadastro-de-pessoas
    ```

4. Instale as dependencias do projeto

    ```diff
    $ npm install
    ```

4. instale o [JSON SerVer](https://github.com/typicode/json-server):

    ```
    $ npm install -g json-server
    ```

5. Na pasta do projeto entre onde está o arquivo JSON:

    ```diff
    $ cd .\src\services\api\
  
    ```

6. Inicie o JSON Server o json-server:

    ```diff
     $ json-server --watch db.json --port 5000
    ```
7. Agora em outro terminal aberto na pasta do projeto (outra janela), para rodar a aplicação digite: 
    ```diff
     $ npm run start
    ```
Abra [http://localhost:3000](http://localhost:3000) para visualização no seu navegador.

</details>

## Organização
- Páginas e Componentes e arquivos de  estilo

![](https://i.imgur.com/CdgacQB.png)

- Configurações do axios, [interceptors](https://axios-http.com/docs/interceptors) e funções para realizar as requisições

![](https://i.imgur.com/ICY6cYJ.png)


- Em **Styles** está algumas variáveis personalizadas utilizadas na estilzação com SASS e em **utils** está algumas funções utilitárias

![](https://i.imgur.com/SS2BKgL.png)

todas estas pastas e arquivos estão em [src](https://github.com/Odisseu93/sitema-cadastro-de-pessoas/tree/main/src) na pasta do projeto.
