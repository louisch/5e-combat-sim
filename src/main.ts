Hooks.once('init', async () => {
  console.log("Test TS");
});
Hooks.on('pauseGame', onPauseGame);

function onPauseGame(paused: boolean) {
  console.log("game paused 5: ", paused);
}

if (process.env.NODE_ENV === "development") {
  console.log("In Development Mode");

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
}
