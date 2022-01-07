import { app } from "./index";

app.listen(3333, () => console.log("Server is running!"));

/*
[X] Criar novos usuários
[X] listar todos usuários
[X] encontrar usuário por ID
[X] encontrar usuário por email
[X] tornar um usuário em adm

Use Cases:
[X] criar novos usuários
[X] não deve ser possível criar usuários com o mesmo email
[X] deve ser possível tornar um user em admin
[X] não deve ser possível transformar um user que não existe em admin
[X] deve ser possível encontrar um user por ID
[X] não deve ser possível encontrar um usuário que não existe
[X] listar all users
[X] não deve ser possível um usuário normal acessar todos os usuários, somente admin consegue
[X] não deve ser possível que um usuário que não existe acessar todos os users
*/