# Configure your Apache server to proxy requests to your Node.js application. This typically involves creating a .htaccess file with rules like

- **RewriteEngine On**
- **RewriteRule ^(.*)$ http://localhost:4321/$1 [P,L]**

---------------

## About

### Astro integration to generate an Apache .htaccess file

- <https://www.npmjs.com/package/astro-htaccess>

## LAMP Stack with Node.js Proxy Configuration

NODE.JS app in Apache - force web. and https: sample .htaccess, skip images or other files desired - partialy based on vielhuber/.htaccess
.htaccess
#########################

## NODE.JS app running in Apache

### sample .htaccess  - partialy based on vielhuber/.htaccess

### Read also <https://gist.github.com/vielhuber/f2c6bdd1ed9024023fe4>

### Also rules to enforce web. prefix and https: SSL access and avoid extra processing for any file defined

### This file must be on the dir where Apache expects to find the website

### The Node App can be anywhere else but must be accessible as explained below

### This may not work in a shared environment or if you don't have a minimum access to the server environment

### This works in a dedicated or virtual server environment with CPanel or other panel if you can manage server's software

## ModRewrite must be active on Apache

Options +FollowSymLinks
RewriteEngine On

## First check if domain starts with web and add it

RewriteCond %{HTTP_HOST} !^$
RewriteCond %{HTTP_HOST} !^www\. [NC]

## If not using SSL force it

RewriteCond %{HTTPS}s ^on(s)|
RewriteRule ^ http%1://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=302,L,NE]

## Check if the request is for an image file (you can add any extension here)

## if it is don't do anyhting more because itsn't required to process it with NodeJS

RewriteCond %{REQUEST_FILENAME} -f
RewriteCond %{REQUEST_FILENAME} \.(jpg|jpeg|png|gif|bmp|webp)$ [NC]
RewriteRule ^ - [L]

### Redirect all trafic to NodeJS server

### It must be running and, in this case, listening to port 60000

### If it is listening in a different port adapt the code as fit

---pws
RewriteRule ^$ http://127.0.0.1:60000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ <http://127.0.0.1:60000/$1> [P,L]
---pws
