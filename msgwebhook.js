const https = require('https');
const readline = require('readline');

// Récupération de l'URL du webhook dans la ligne de commande
const webhookUrl = process.argv[2];
if (!webhookUrl) {
  console.error('Veuillez spécifier l\'URL du webhook dans la ligne de commande.');
  process.exit(1);
}

// Création de l'interface pour lire l'input de l'utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour envoyer un message au webhook
function sendMessage(message) {
  const data = JSON.stringify({ content: message });
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const req = https.request(webhookUrl, options, res => {
    if (res.statusCode !== 204) {
      console.error(`Erreur lors de l'envoi du message : code ${res.statusCode}`);
    }
  });

  req.on('error', error => {
    console.error('Erreur lors de l\'envoi du message :', error);
  });

  req.write(data);
  req.end();
}

// Fonction pour demander à l'utilisateur d'entrer un message et l'envoyer au webhook
function askAndSendMessage() {
  rl.question('Entrez le message à envoyer (ou tapez CTRL+C pour quitter) : ', message => {
    sendMessage(message);
    askAndSendMessage();
  });
}

// Lancer la demande de message
askAndSendMessage();
