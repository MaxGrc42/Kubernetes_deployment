# TP2: Mise en place d'une application web avec kubernetes

## Table of Contents

- [Auteurs](#auteurs)
- [Introduction](#introduction)
- [Prérequis](#prérequis)
- [Présentation de l'application](#présentation-de-lapplication)
- [Mise en place des images Docker](#mise-en-place-des-images-docker)
- [Déploiement sur un cluster Kubernetes](#déploiement-sur-un-cluster-kubernetes)
    - [Déploiement de la base de données MySQL](#déploiement-de-la-base-de-données-mysql)
    - [Déploiement de l'application web](#déploiement-de-lapplication-web)
    - [Accès à l'application web](#accès-à-lapplication-web)
- [Débugage de l'application](#débugage-de-lapplication)

## Auteurs

- Romain ARGAUD
- Maxime GRECO

## Introduction

Dans ce TP, nous allons mettre en place une application web avec Kubernetes.
Nous allons déployer une application web simple qui permet la gestion d'une bibliothèque de livres.
Nous allons également déployer une base de données MySQL pour stocker les données de l'application web.

## Prérequis

Afin de pouvoir réaliser ce TP, vous devez avoir les outils suivants installés sur votre machine:

- docker
- kubernetes
- minikube

## Présentation de l'application

L'application web est une application simple qui permet de gérer une bibliothèque de livres.
L'application web est développée en utilisant le framework NextJS.

## Mise en place des images Docker
Pour construire les images des conteneurs, il faut se déplacer dans le répertoire adéquat (`database` ou `library-manager`) et exécuter la commande suivante:

```bash
docker build -t <nom-image> .
```
On peut ansuite pousser l'image sur un registre Docker:

```bash
docker push <nom-image>
```
_Il peut y avoir des problèmes de tag lors du push, il faut alors retagger l'image avec la commande suivante:_

```bash
docker tag <nom-image> <registry>/<nom-image>:<tag>
```


## Déploiement sur un cluster Kubernetes

Dans un premier temps, il faut démarrer un cluster Kubernetes en utilisant minikube:

```bash
minikube start
```

On peut utiliser une interface web avec minikube pour manager le cluster:

```bash
minikube dashboard
```

### Déploiement de la base de données MySQL

Afin de sauvegarder les données après un redémarrage de la base de données, il faut créer un volume persistant:

```bash
kubectl apply -f mysql-pv.yaml
```

Ensuite, on peut déployer la base de données MySQL:

```bash
kubectl apply -f mysql-deployment.yaml
```

On met enfin en place un service qui permettra de faire communiquer la base de données avec d'autres applications

```bash
kubectl apply -f mysql-service.yaml
```

### Déploiement de l'application web

On lance le déploiement de l'application web:

```bash
kubectl apply -f app-deployment.yaml
```

On met en place un service qui permettra de faire communiquer l'application web avec d'autres applications

```bash
kubectl apply -f app-service.yaml
```

### Accès à l'application web

Pour accéder à l'application web, on peut utiliser la commande suivante:

```bash
minikube service frontend --url
```

On obtient alors un url permettant d'accéder à notre application en local

## Débugage de l'application

Plusieurs solutions peuvent être utiles pour résoudre des problèmes.

### Vérifier les logs des pods

Il faut dans un premier temps lister les pods en cours d'exécution:

```bash
kubectl get pods
```

Puis, on peut afficher les logs d'un pod en particulier:

```bash
kubectl logs <nom-du-pod>
```

### Exécuter une commande dans un pod

Il est possible d'exécuter une commande dans un pod:

```bash
kubectl exec -it <nom-du-pod> -- /bin/bash
```