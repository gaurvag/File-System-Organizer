function helpFn() {
  console.log(`
    List of all the commands:
        fso tree "directoryPath"
        fso organize "directoryPath"
        fso help
    `);
}

module.exports = {
  helpKey: helpFn,
};
