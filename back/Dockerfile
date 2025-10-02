# PHP ベースイメージ
FROM php:8.3-fpm

# Composer コピー
COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# プロジェクト全体をコピー
COPY . .

RUN apt-get update && \
    apt-get install -y git unzip libzip-dev libpq-dev && \
    docker-php-ext-install zip pdo pdo_pgsql && \
    docker-php-ext-enable pdo_pgsql

# Composer 依存関係インストール
RUN composer install --no-dev --optimize-autoloader

# 権限設定
RUN mkdir -p storage bootstrap/cache && \
    chown -R www-data:www-data storage bootstrap/cache

EXPOSE 9000
