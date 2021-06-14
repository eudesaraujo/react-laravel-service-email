FROM php:7.4-cli

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    libzip-dev\
    zip \
    jpegoptim optipng pngquant gifsicle \
    libpq-dev \
    unzip \
    vim\
    git \
    curl \
    net-tools \
    libonig-dev \
    libc-client-dev \
    libkrb5-dev \
    libedit-dev \
    libxml2-dev \
    supervisor

RUN docker-php-ext-install mbstring tokenizer mysqli pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

RUN mkdir -p /var/log/supervisor
RUN chown www:www /var/log/supervisor

COPY --chown=www:www ./backend-service-email/ /var/www/html/backend-service-email/

ADD ./docker-config/supervisord.conf /etc/

RUN chmod -R 755 /var/www/

USER www

WORKDIR  /var/www/html/backend-service-email/

RUN composer install

CMD ["supervisord", "-c", "/etc/supervisord.conf"]

