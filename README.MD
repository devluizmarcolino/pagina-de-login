## 🚀 Como executar o projeto localmente

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Um editor de código de sua preferência

### Instalação e Execução

1. **Clone o repositório ou baixe os arquivos**
   ```bash
   git clone https://github.com/devluizmarcolino/pagina-de-login
   ```

2. Certifique-se que os arquivos estejam organizados da seguinte forma:
   ```
   .
   ├── index.html
   ├── styles.css
   └── script.js
   ```

3. **Execute o projeto**
   - Abra o arquivo `index.html` diretamente no seu navegador
   ou
   - Use uma extensão como "Live Server" no VS Code para iniciar um servidor local

## 💻 Funcionalidades

### Validações
- Email:
  - Campo obrigatório
  - Formato válido (exemplo@dominio.com)
- Senha:
  - Campo obrigatório
  - Mínimo de 6 caracteres

### Feedback Visual
- Mensagens de erro específicas para cada tipo de validação
- Feedback visual no hover dos botões
- Indicador de carregamento durante o envio
- Mensagem de sucesso após login

### Responsividade
- Layout adaptativo para diferentes tamanhos de tela:
  - Desktop (1200px+)
  - Tablet/Mobile (até 480px)
  - Mobile pequeno (até 320px)

## 🎨 Personalização

O projeto utiliza a cor principal `#e9f035` que pode ser facilmente alterada no arquivo CSS:
- Botão de envio: `.submit-btn`
- Borda do input em foco: `.form-group input:focus`

## 🧪 Como testar

1. Abra o arquivo `index.html` no navegador
2. Teste os cenários de validação:
   - Email vazio
   - Email com formato inválido
   - Senha vazia
   - Senha com menos de 6 caracteres
3. Teste um login válido:
   - Digite um email válido (ex: usuario@exemplo.com)
   - Digite uma senha com 6 ou mais caracteres
   - Clique em "Entrar"
   - Observe o estado de carregamento e a mensagem de sucesso

## 👨‍💻 Desenvolvimento

- **HTML**: Estrutura semântica com formulário e containers para mensagens
- **CSS**: Estilos modulares e responsivos com media queries
- **JavaScript**: Validações em tempo real e simulação de envio assíncrono

## ⚠️ Notas

- A simulação de login tem um delay de 1.5 segundos para simular uma requisição
- Não há integração com backend ou armazenamento de dados
