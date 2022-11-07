const fs = require('fs').promises;
const { getTalkerJson } = require('./getJsonWithFs');

const createFileTalker = async (talker) => {
  const oldTalker = await getTalkerJson();
  oldTalker.push(talker);
  const newTalker = JSON.stringify(oldTalker);
  
  await fs.writeFile('src/talker.json', newTalker);
};

module.exports = { createFileTalker };