# Rentx - Aluguel de carros 🚗

## Cadastro de carros 

**Requisitos Funcionais**
- Deve ser possível cadastrar um novo carro
- Deve seer possível listar todas as categorias

**Regras de Negócio**
- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar a placa de um carro já cadastrado
- O carro deve ser cadastrado por padrão como disponível
- O usuário responsável pelo cadastro deve ser administrador

## Listagem de carros

**Requisitos Funcionais**
- Deve ser possível listar os carros disponíveis (```available: true```)
- Deve ser possível listar os carros disponíveis pela marca 
- Deve ser possível listar os carros disponíveis pela categoria 
- Deve ser possível listar os carros disponíveis pelo nome

**Regras de Negócio**
- O usuário não precisa estar logado no sistema

## Cadastro de especificação no carro

**Requisitos Funcionais**
- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**Regras de Negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma nova espeficicação já existente para o mesmo carro
- O usuário responsável pelo cadastro deve ser administrador

## Cadastro de imagens do carro

**Requisitos Funcionais**
- Deve ser possível cadastrar uma nova imagem
- Deve ser possível listar todos os carros

**Requisitos não funcionais**
- Utilizar o multer para upload dos arquivos

**Regras de Negócio**
- O usuário responsável pelo cadastro deve ser administrador
- o Usuário poderá cadastrar mais de uma imagem para o mesmo carro

## Aluguel de carro

**Requisitos Funcionais**
Funcionalidades que a aplicação terá.
- Deve ser possível cadastrar um aluguek

**Regras de Negócio**
- O aluguel deve ter duração mínima de 24hrs
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto pelo mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto pelo mesmo carro