# Docker 🚢

### Docker build
O comando "docker build" é usado para criar uma nova imagem Docker a partir de um Dockerfile e outros arquivos de contexto. A opção "-t" é usada para dar um nome ou "tag" à imagem criada. O ponto "." indica que o contexto do build é o diretório atual. Portanto, o comando "docker build -t name ." cria uma nova imagem com o nome que você definir a partir do Dockerfile e outros arquivos presentes no diretório atual.

```docker
    docker build -t name . 
```
### Docker run
O comando "docker run" é usado para criar e executar um contêiner Docker a partir de uma imagem existente. A opção "-p" é usada para mapear uma porta do host local para uma porta do contêiner.

```docker
    docker run -p localPort:containerPort rentx
```
### Docker exec
O comando "docker exec" é usado para executar um comando dentro de um contêiner Docker em execução. A opção "-it" é usada para criar uma sessão interativa com o contêiner, permitindo que você interaja com ele por meio de um terminal.
No comando "docker exec -it containerName", "containerName" é o nome ou ID do contêiner em execução.
Por exemplo, se você deseja executar um shell dentro do contêiner chamado "my-container", você pode executar o seguinte comando:

```docker
    docker exec -it my-container /bin/bash
```
