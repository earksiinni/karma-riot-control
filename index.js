var initRiotControl = function(files) {
  files.unshift({
    pattern: require.resolve('riot-control'),
    included: true,
    served: true,
    watched: false
  });
};

initRiotControl.$inject = ['config.files']

module.exports = {
  'framework:riot-control': ['factory', initRiotControl]
};
