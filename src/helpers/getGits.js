

export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=20&api_key=a1f3j4qs7YSwzdR7RTR54y1RSZW6JSMv`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            url: img.images?.downsized_medium.url
        }
    });


    return gifs;
}

export default getGifs;

