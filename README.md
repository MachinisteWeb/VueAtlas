# VueAtlas #

Version : 1.0.0 (Beta)

NodeAtlas Version minimale : 2.0.x

**For an international version of this README.md, [see below](#international-version).**



## Avant-propos ##

VueAtlas est un exemple de pages web couplants [Vue](http://www.vuejs.org/), [NodeAtlas](http://node-atlas.js.org/) et les Websockets pour créer des pages dynamiques avec Rendu Côté Serveur.



## Modifier le site en local ##

Pour modifier le site avec un rendu en temps réel, il vous faudra installer [NodeAtlas](http://node-atlas.js.org/) sur votre poste de développement et vous rendre dans le dossier :

```
\> cd </path/to/resume>sources/
```

et utilisez la commande :

```
\> node </path/to/>node-atlas/ --browse
```

ou lancez `server.na` en double cliquant dessus :
- en expliquant à votre OS que les fichiers `.na` sont lancé par défaut par `node`,
- en ayant installé `node-atlas` via `npm install -g node-atlas`
- en étant sur que votre variable d'environnement `NODE_PATH` pointe bien sur le dossier des `node_modules` globaux.

Les deux pages seront à :

- *http://localhost:7777/*
- *http://localhost:7777/todo-list/*



## Générer le site ##

Une fois que votre site vous plait, générez sa version exportable en utilisant :

```
\> cd </path/to/resume>sources/
```

puis en utilisant la commande :

```
\> node </path/to/>node-atlas/ --generate
```

Il ne vous reste plus qu'à envoyer le dossier `</path/to>serverless/` 
- à votre client pour une review des assets HTML ou
- à votre équipe Back-end pour une intégration dans un CMS, ou un site PHP, .NET, Node.js ou
- sur votre serveur de production quelque soit l'environnement (Apache, IIS, Node.js, etc.).



## Même fichier, configuration différente ##

Vous pouvez transformer votre projet initialement paramètré pour créer des maquettes en un site sans Back-end avec NodeAtlas.

Il suffit pour cela de monter le site sur un serveur et d'utiliser un webconfig différent :


```
\> cd </path/to/src>/
```

puis en utilisant la commande :

```
\> node </path/to/>node-atlas/ --webconfig webconfig.prod.json
```


## Exemple en ligne ##

Vous pouvez voir fonctionner ce repository à l'adresse : [http://bruno.lesieur.name/](http://bruno.lesieur.name/).


-----


## International Version ##

### Overview ###

VueAtlas is an example of web pages using both [Vue](http://www.vuejs.org/) and [NodeAtlas](http://node-atlas.js.org/) with Websocket to create dynamic Server-Side Render.



### Edit the website in local server ###

To change the website with a real-time rendering, you need to install [NodeAtlas](http://node-atlas.js.org/) on your development computer and go to the folder:

```
\> cd </path/to/resume>sources/
```

and use the command:

```
\> node </path/to/>node-atlas/ --browse
```

or run `server.na` by double clicking and:
- explaining your OS that `.na` files are run by default with `node`,
- Having installed `node-atlas` via `npm install -g node-atlas`
- Being on your environment variable `NODE_PATH` is pointing to the global `node_modules` folder.

The two pages will be to:

- *http://localhost:7777/*
- *http://localhost:7777/en/*



### Generate site ###

Once your site vous plait, generate its exportable version using:

```
\> cd </path/to/>serverless/
```

then using the command:

```
\> node </path/to/>node-atlas/ --generate
```

It'll just send the file `</path/to/resume>website/` 
- to your client for review of HTML assets
- à votre équipe Back-end pour une intégration dans un CMS, ou un site PHP, .NET, Node.js ou
- to your Back-end team for integration into a CMS, or a PHP site, .NET, Node.js or
- on your production server in any environment (Apache, IIS, Node.js, etc.).



### Same file, different configuration ###

Vous pouvez transformer votre projet initialement paramètré pour créer des maquettes en un site sans Back-end avec NodeAtlas.
You can turn your generating asset project into a website without Back-end with NodeAtlas.

Simply mount the site on a server and use a different webconfig:


```
\> cd </path/to/src>/
```

then using the command:

```
\> node </path/to/>node-atlas/ --webconfig webconfig.prod.json
```


### Online Example ###

You can see this repository running at: [http://bruno.lesieur.name/](http://bruno.lesieur.name/) (Fr).