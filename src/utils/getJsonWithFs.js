const fs = require('fs').promises;

const getTalkerJson = async () => {
  try {
    const response = await fs.readFile('src/talker.json', 'utf-8');
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    const err = new Error('Error opening file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = { getTalkerJson };