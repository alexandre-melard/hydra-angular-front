FROM nginx:1.17.3-alpine

# copy artifact build from the 'build environment'
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/sso-demo/ .

