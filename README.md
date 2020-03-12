# Configuração do ambiente

## Instalando NodeJS
Primeiramente sera necessário instalar o programa `curl`.

    sudo apt-get install curl

#### NVM (Node Version Manager)
Para a instalação do NodeJS, usaremos o programa NVM (Node Version Manager), ele permitirá gerenciar várias versões do node na máquina.

Digite o script abaixo para baixar o script do instalador.

    curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh

Digite o comando abaixo para executar o script baixado:

    bash install_nvm.sh

Feche todas as janelas do terminal do Linux e abra novamente. Digite o comando abaixo para verificar se foi instalado com sucesso:

    nvm

Será instalado a versão `12.16.1` do node. Execute o comando abaixo:

    nvm install 12.16.1

Após, digite o comando abaixo para verificar se foi instalado com sucesso:

    node -v

Deverá exibir uma mensagem com a versão instalada.

Link de referência: [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-pt)

## Instalando o Yarn
Primeiro, execute o comando abaixo para importar o repositório que iremos baixar o Yarn:

    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

Adicione o repositóio do Yarn APT através do comando:

    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

Execute os comandos abaixo para fazer a instalação:

    sudo apt update
    sudo apt install yarn

Para confirmar se foi instalado com sucesso, digite o comando abaixo:

    yarn --version

## Outras Configurações

### Configurando o arquivo .gitignore
Adicione a seguinte linha ao arquivo `.gitignore`:

    /node_modules/

### Configurando o Yarn
Inicie o Yarn dentro do repositório do projeto:

    yarn init

Adicione estas dependências ao Yarn:

    yarn add @babel/cli
    yarn add @babel/core
    yarn add @babel/preset-env
    yarn add @babel/plugin-proposal-object-rest-spread

### Criando o arquivo .babelrc
Crie o arquivo `.babelrc`, e adicione as seguintes linhas ao seu conteúdo:

    {
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-proposal-object-rest-spread"]
    }

### Configurando um script do Babel através do Yarn
Adicione o seguinte script ao arquivo `package.json`:

    "scripts": {
        "dev": "babel ./main.js -o bundle.js -w"
    }

Este script é usado para que `main.js`, ao ser salvo, seja compilado em `bundle.js` de forma automática. Execute o script com o comando:

    yarn dev
