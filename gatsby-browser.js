export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`Этот сайт обновился. Перезагрузить страницу?`)
  if (answer === true) {
    window.location.reload()
  }
}
