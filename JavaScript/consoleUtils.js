console.instruction = function(message) {
  console.log('\x1b[7m%s\x1b[0m', message);
};
const consoleGroup = console.group;
console.group = function(groupTitle) {
  consoleGroup('\x1b[35m%s\x1b[0m', groupTitle);
};
