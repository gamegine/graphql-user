# graphql-user
##  :book: description
##  :floppy_disk: dev languages
- nodejs
#  :flags: branch
> **[master](../../tree/master)**
> **[dev](../../tree/dev)**
##  :hammer: builds
Lancer un container Jenkins lier au binaires du docker.

> docker run -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkins/jenkins:lts

Dans le container Jenkins installer Docker pour pouvoir realiser du Docker in Docker.

> docker exec -it -u root jenkins bash

    apt-get update && \
    apt-get -y install apt-transport-https \
         ca-certificates \
         curl \
         gnupg2 \
         software-properties-common && \
    curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
    add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
       $(lsb_release -cs) \
       stable" && \
    apt-get update && \
    apt-get -y install docker-ce
    sudo chown root:jenkins /run/docker.sock # autorisations docker

Creer un nouveau job sur lequelle sera present la pipeline. Dans la configuration de la pipeline preciser le lien du repo git.

# :calling: Publication
## :package: dependencies
- graphql 14.3.1
- express 4.17.1
- express-graphql 0.8.0
- test 0.6.0
# License
[Mozilla Public License 2.0](LICENSE)

