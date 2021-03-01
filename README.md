# Fullstack-challenge Maxxidata

### Contexto
Em todo aplicativo comercial temos um controle dos profissinais envolvidos no processo sejam usuários, responsáveis, gerentes, administradores, operadores, etc. Por isso um ponto importante de qualquer aplicação é permitir designarmos estas funções ou seja categorizar em tipos estes profissionais. Ex.: ProfissionalAna = Médica, José = Professor...

Vamos criar então uma aplicação que nos permita consultar, criar e editar essas informações e manter essa relação entre o profissional e seu tipo.

### Instalando
``` shell
    git clone https://github.com/jhonattasantos/maxxidata-challenge.git
    cd maxxidata-challenge
    mkdir db
    docker-compose up -d
```

Você pode mudar as variaveis de ambiente no arquivo .env na raiz do projeto. Abaixo as configurações 

``` text
PORT=3000
POSTGRES_PASSWORD=root
POSTGRES_USER=root
POSTGRES_DB=maxxidata_challenge
POSTGRES_PORT=5432
```