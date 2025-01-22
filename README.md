# Biblioteca pessoal

O contexto do projeto é bem simples, a ideia é termos uma API simples que consiga armazenar livros cadastrados e ter a funcionalidade de organizar uma pequena biblioteca para o usuário.

## Funcionalidades

- Cadastro de usuários
- Cadastro e atualização de livros e autores, tendo histórico de edições daquele livro e autor
- Cadastro e atualização de gêneros com hierarquia
- Avaliações em livros
- Algoritmo de recomendação
- Registro de páginas lidas
- Resumo pessoal do livro lido
- Compartilhamento da biblioteca pessoal

### Cadastro de usuários

No cadastro de usuários teremos nome, email, telefone e gostos básicos de livros.
O cadastro não poderá ser feito para um email que já está cadastrado.

### Cadastro e atualização de livros e autores

A ideia é que a plataforma já possua uma base de livros, porém que o usuário possa contribuir para esta base com seus próprios livros, assim outros usuários podendo utilizar em suas bibliotecas pessoais. A ideia é ser semelhante à wikipedia, porém para o contexto de organização de leitura. Como funcionalidade futura planejo adicionar um histórico de edições e uma confirmação de vários usuários de uma edição feita, assim uma pessoa não terá o poder de informar qualquer dado sozinha.
O cadastro de livros não poderá ser feito para um título que já existe.

### Cadastro e atualização de gêneros com hierarquia

Os usuários também poderão cadastrar categorias para seus livros com a possibilidade de adicionar hierarquias a elas, assim ficando mais fácil de filtrar e especificar o que se deseja.
As categorias serão objetos de valor, ou seja, não poderãos er atualizados nem mesmo deletados no banco.

### Avaliações de livros

Estas serão únicas e exclusivas dos usuários que as fizeram, podendo dar uma nota acima 0 até 5 e deixar um comentário do que achou a respeito.
Não é possível informar uma nota menor ou igual a zero, nem superior a 5.

### Algoritmo de recomendação

### Registro de páginas lidas

Uma das funcionalidades principais da API, para poder organizar melhor as leituras pessoais do usuário, sendo um dado que somente o usuário pode alterar.
O usuário poderá avançar a página de uma a uma ou informar o número da página diretamente.
Não será possível informar um número de página que supere o total de páginas do livro.

### Resumo pessoal do livro lido

Para todos os livros é possível criar um resumo pessoal do livro, que pode ser compartilhado para fins de leitura, assim como a biblioteca pessoal.
este resumo não terá restrição alguma, porém não será possível adicionar formatação personalizada.

### Compartilhamento de biblioteca pessoal

A ideia desse compartilhamento é poder mostrar a outros usuários o progresso de leitura pessoal.

#### Outros

- [Arquitetura](./docs/architecture.md)
- [Tecnologias](./docs/technologies.md)
- [Entidades](./docs/entities.md)