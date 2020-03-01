export const onServiceWorkerUpdateReady = () => {
  console.log('update')
  const answer = window.confirm(`Этот сайт обновился. Перезагрузить страницу?`)
  if (answer === true) {
    window.location.reload()
  }
}
