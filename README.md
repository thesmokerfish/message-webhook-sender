# Webhook Messenger 📨

Ce script permet d'envoyer des messages à un webhook Discord.

## Prérequis 🤔

- Node.js (version 12 ou supérieure)

## Installation ⚙️

1. Clonez ou téléchargez ce référentiel sur votre machine.
2. Ouvrez une invite de commande dans le répertoire du projet.
3. Installez les dépendances en exécutant la commande suivante :

```shell
npm install
```
## Utilisation ✨
1. Obtenez l'URL du webhook Discord auquel vous souhaitez envoyer les messages.
2. Exécutez le script en utilisant la commande suivante : node msgwebhook.js <webhook_url>
                                                          Remplacez <webhook_url> par l'URL réelle du webhook.
3. Suivez les instructions affichées dans la console pour entrer et envoyer les messages.
   Entrez le message à envoyer et appuyez sur Entrée pour l'envoyer au webhook.
    Pour quitter le script, utilisez la combinaison de touches CTRL+C.

## Exemple 🧑‍💻
```shell
node webhook-messenger.js https://discord.com/api/webhooks/1234567890/123456789/

> Entrez le message à envoyer (ou tapez CTRL+C pour quitter) : 
```
Une fois le script en cours d'exécution, vous pouvez saisir les messages que vous souhaitez envoyer au webhook. Chaque message sera envoyé immédiatement.

Note : Assurez-vous que l'URL du webhook est valide et que vous avez les autorisations appropriées pour envoyer des messages au webhook.

# Licence 📄

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer selon les termes de cette licence.
