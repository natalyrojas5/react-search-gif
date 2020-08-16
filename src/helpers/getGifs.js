export const getGifs = async(category)=>{
    const api_key = 'Z33vHvisIfwU7cQnRFcfPLxeswnZRun1';
    const limit = 9;

    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}