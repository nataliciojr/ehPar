// Aguarda o carregamento completo da página antes de executar o código
window.addEventListener("load", function () {

    // Adiciona um event listener para o clique no botão de login, que chama a função validarLogin
    document.getElementById("btnLogin").addEventListener("click", validarLogin);

    // Adiciona event listeners para eventos de tecla pressionada nos campos de entrada de usuário e senha
    document.getElementById("user").addEventListener("keypress", function () {
        // Você pode adicionar código aqui para lidar com eventos de tecla pressionada no nome de usuário, se necessário
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        // Você pode adicionar código aqui para lidar com eventos de tecla pressionada na senha, se necessário
    });

    // Função para validar as informações de login
    function validarLogin() {
        // Obtém referências para os campos de entrada de usuário e senha
        var user = document.getElementById("user");
        var pwd = document.getElementById("pwd");

        // Verifica se o campo de usuário está em branco
        if (!user.value) {
            alert(`Usuário em branco`);
        }
        // Verifica se o campo de senha está em branco
        else if (!pwd.value) {
            // Utiliza o método "alertWifi" que parece ser um erro de digitação. Talvez você queira usar simplesmente "alert"
            alertWifi(`Senha em branco`);
        }
        // Se ambos os campos estiverem preenchidos, chama a função para processar o login
        else {
            processarLogin(user.value, pwd.value);
        }
    }

    // Função para processar as informações de login
    function processarLogin(user, pwd) {
        // Verifica se o navegador suporta o armazenamento local
        if (typeof (Storage) != "undefined") {
            // Obtém os usuários armazenados localmente
            var usuarios = localStorage.getItem("usuarios");

            // Se não houver usuários armazenados, exibe uma mensagem de alerta
            if (!usuarios) {
                alert(`Usuário inexistente. Tente um usuário diferente!`);
            }
            // Se houver usuários armazenados, verifica se as credenciais correspondem a algum usuário
            else {
                var usuarios = JSON.parse(usuarios);
                var achou = false;

                // Itera sobre a lista de usuários para encontrar uma correspondência
                for (i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].nome == user && usuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                }

                // Se encontrou uma correspondência, redireciona para a página "indexGame.html"
                if (achou) {
                    window.open("indexGame.html", "_self");
                } else {
                    // Se não encontrou correspondência, exibe uma mensagem de alerta
                    alert(`Usuário inexistente. Tente um usuário diferente!`);
                }
            }
        }
        // Se o navegador não suportar o armazenamento local, exibe uma mensagem de alerta
        else {
            alert(`Navegador não suporta armazenamento local`);
        }
    }

});
