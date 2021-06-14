# Serviço de e-mail com Backend e micro-front 

## Requisitos

- Docker desktop instalado (https://www.docker.com/get-started)

## Download repositório
```sh
git clone https://github.com/eudesaraujo/react-laravel-service-email.git
```
## Configuração
Acesse a pasta backend-service-email e configure o .env
```sh
cd backend-service-email
cp .env.example .env
```
Preencha no .env os dados de smtp nas variaveis abaixo 
```sh
MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
```

Com o docker já instalado execute 

```sh
docker-compose up -d 
```
Os containers serão criados


Acesse a aplicação 
http://127.0.0.1:8001



