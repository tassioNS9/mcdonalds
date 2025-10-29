
# McDonald's Delivery System

Este projeto é um sistema de delivery de comidas desenvolvido com foco em agilidade, escalabilidade e experiência do usuário.

## Tecnologias e Bibliotecas Utilizadas

- **Next.js**: Framework React para aplicações web modernas.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Tailwind CSS**: Estilização rápida e responsiva.
- **Prisma ORM**: Gerenciamento de banco de dados relacional.
- **ESLint & Prettier**: Padronização e qualidade de código.

## Padrões de Projeto

- **Componentização**: Reutilização de componentes React.
- **Context API**: Gerenciamento de estado global (ex: carrinho de compras).
- **Actions & Helpers**: Separação de lógica de negócio e utilitários.
- **Rotas Dinâmicas**: URLs amigáveis para restaurantes, produtos e pedidos.

## Setup do Projeto

1. **Instale as dependências:**
	```bash
	npm install
	```
2. **Configure o banco de dados:**
	- Edite o arquivo `.env` com sua conexão.
	- Execute as migrações:
	  ```bash
	  npx prisma migrate dev
	  ```
	- (Opcional) Popule o banco com dados de exemplo:
	  ```bash
	  npx prisma db seed
	  ```
3. **Inicie o servidor de desenvolvimento:**
	```bash
	npm run dev
	```

## Estrutura Principal

- `src/app/` - Páginas e componentes principais
- `prisma/` - Schema e migrações do banco de dados
- `public/` - Arquivos estáticos

## Observações

- O projeto utiliza padrões modernos de desenvolvimento web.
- Para produção, configure variáveis de ambiente e revise permissões de acesso.

---

Desenvolvido para facilitar pedidos e gestão de restaurantes no sistema de delivery.
