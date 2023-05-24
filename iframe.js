const iframe = document.getElementById("iframe");
const datas = ['Z49_ON56pLQ', 'Ifj8dwuAzAQ', 'CJe3ISkn-RM', 'avd45BMdnBQ', 'ciGt6IIngRk', 'Yh36PaE-Pf0', 'Sh03YXzvDF4'];
const iframeTemplate = data => `
<iframe width="300" height="150" src="https://www.youtube.com/embed/${data}?rel=0&autoplay=1&mute=0&loop=1&playlist=${data}&controls=1&showinfo=0&frameborder=0" align= "middle" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;


const obtenerIdsDeVideos = async () => {
    const indiceAleatorio = Math.floor(Math.random() * datas.length);
    const videoId = datas[indiceAleatorio];
    const urlVideo = iframeTemplate(videoId);
    iframe.innerHTML = urlVideo;
  };

  obtenerIdsDeVideos();
