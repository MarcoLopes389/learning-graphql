# Arquitetura

A arquitetura utilizada será uma combinação de DDD com arquitetura em camadas, onde o foco será no domínio e na linguagem dele, e as outras camadas possuirão adaptadores para converter para linguagem específica.
Os modelos de domínio serão ricos, possuindo as regras principais de negócio e os casos de uso possuindo apenas a orquestração e as regras de consistência dos dados.

## Modelo de trabalho

O modelo de trabalho será orientado a testes, seguindo as especificações do BDD e TDD em suas implementações, além da criação de uma documentação antes da implementação de qualquer funcionalidade.

## Patterns

Os patterns usados neste projeto serão os seguintes:
- repository
- use case
- dao
- controller
- mappers
- dtos