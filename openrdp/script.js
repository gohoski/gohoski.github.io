document.addEventListener('DOMContentLoaded', async () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  window.location.replace(`rdp://${params.address}`);
  await sleep(3000);
  document.getElementById('progressbar').style.display = 'none';
  document.getElementById('nothing').style.display = 'block';
  document.querySelector('a').href = params.file;
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
