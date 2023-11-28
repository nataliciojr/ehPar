// Este event listener é acionado quando a janela termina de carregar
window.addEventListener("load", function () {

    // Event listener para o clique no botão "Novo Usuário", que chama a função validarCadastro
    document.getElementById("btnNewUser").addEventListener("click", validarCadastro);

    // Event listeners para eventos de tecla pressionada nos campos de entrada de usuário, senha e confirmação de senha
    document.getElementById("user").addEventListener("keypress", function () {
        // Você pode adicionar código aqui para lidar com eventos de tecla pressionada no nome de usuário, se necessário
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        // Você pode adicionar código aqui para lidar com eventos de tecla pressionada na senha, se necessário
    });    
    document.getElementById("confPwd").addEventListener("keypress", function () {
        // Você pode adicionar código aqui para lidar com eventos de tecla pressionada na confirmação de senha, se necessário
    });    

    // Função para validar a entrada do usuário no formulário de cadastro
    function validarCadastro() {
        // Obtendo referências para os campos de entrada de usuário, senha e confirmação de senha
        user = document.getElementById("user");
        pwd = document.getElementById("pwd");
        confPwd = document.getElementById("confPwd");

        // Verificando se o nome de usuário está em branco
        if (!user.value) {
           alert(`Usuário em branco. Informe um usuário`); 
        }
        // Verificando se a senha está em branco
        else if (!pwd.value) {
          alert(`Senha em branco. Informe uma senha`);
          
        }
        // Verificando se a confirmação de senha está em branco
        else if (!confPwd.value) {
          alert(`Confirmar senha em branco. Informe uma senha`);
            
        }
        // Verificando se a senha e a confirmação de senha são diferentes
        else if (pwd.value != confPwd.value) {
           alert(`Senha e confirmar senha diferentes. Tente novamente!`);
            
        }
        // Se todas as verificações passarem, chama a função cadastrarNovoUsuario
        else cadastrarNovoUsuario(user.value, pwd.value);
    }

    // Função para cadastrar um novo usuário
    function cadastrarNovoUsuario(user, pwd) {
        var usuario = {nome:user, senha:pwd};
        
        var usuarios = localStorage.getItem("usuarios");

        // Se não houver usuários armazenados localmente, cria uma lista com o novo usuário
        if (!usuarios) {
            usuarios = [usuario];
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            alert(`Usuário cadastrado com sucesso!`);
        }
        // Se houver usuários armazenados localmente e for possível cadastrar o novo usuário, adiciona o usuário à lista
        else if (podeCadastrar(user)) {
            usuarios = JSON.parse(usuarios);
            usuarios.push(usuario);
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
           alert(`Usuário cadastrado com sucesso!`);
           
        }
        // Se o usuário já existir, exibe uma mensagem de alerta
        else  {
           alert(`Esse usuário já existe. Tente outro!`); 
           
        }
    }

    // Verifica se já há um usuário cadastrado com o mesmo nome informado na interface 
    // Retorna true (pode cadastrar) e false (caso contrário)
    function podeCadastrar(user) {
        var usuarios = localStorage.getItem("usuarios");
        usuarios = JSON.parse(usuarios);
        var achou = false;
        for (i=0; i<usuarios.length; i++)
            if (usuarios[i].nome == user) {
                achou = true;
                break;
            }
        return !achou;
    }
});
