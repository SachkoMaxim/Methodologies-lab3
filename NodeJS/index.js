'use strict';

const express = require('express');
const colors = require('colors');

const app = express();

colors.enabled = true;

const gods = ['Nyx', 'Erebus', 'Tartarus', 'Gaia', 'Ourea', 'Pontus', 'Uranus', 'Cronos', 'Rhea', 'Oceanus', 'Tethys', 'Hyperion', 'Theia', 'Iapetus', 'Crius', 'Coecus', 'Phoebe', 'Themis', 'Mnemosyne', 'Atlas', 'Epimetheus', 'Prometheus', 'Helios', 'Selene', 'Eos', 'Leto', 'Zeus', 'Demeter', 'Poseidon', 'Hades', 'Hera', 'Hestia', 'Athena', 'Apollo', 'Artemis', 'Aphrodite', 'Ares', 'Hephaestus', 'Hermes', 'Dionysus', 'Persephone', 'Hecate', 'Aeolus', 'Boreas', 'Zephyrus', 'Notus', 'Eurus', 'Pan', 'Hemera', 'Moros', 'Nemesis', 'Hypnos', 'Thanatos', 'Geras', 'Eris', 'Charon', 'Clio', 'Euterpe', 'Thalia', 'Melpomene', 'Terpsichore', 'Erato', 'Polymnia (Polyhymnia)', 'Urania', 'Calliope', 'Heracles'];

app.get('/', (req, res) => {
  res.end('Welcome to mount Olympus');
});

app.get('/gods', (req, res) => {
    let godsList = 'List of gods:<br>';
    gods.forEach(god => {
      godsList += '- ' + god + '<br>';
    });
    res.send(godsList);
});

const server = app.listen(8080, () => {
  console.log(colors.green('Listening on http://0.0.0.0:8080'));
  console.log(colors.white('Use ') + colors.yellow('Ctrl + C') + colors.white(' to escape.'));
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log(colors.red('Server stopped'));
    process.exit(0);
  });
});