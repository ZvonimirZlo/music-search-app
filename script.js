let term = '';

const updateTerm = () => {
    term = document.getElementById('searchTerm').value;
 
    // check if song or artist exist
    if (!term || term === '') {
        alert('Enter a valid term!');
    } else {
        const url = `https://itunes.apple.com/search?term=${term}`;
        const songContainer = document.getElementById('songs');

        //removes old search results
        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.results);
                const artists = data.results;
                return artists.map(result => {
                    const article = document.createElement('article');
                    const artists = document.createElement('h3');
                    const song = document.createElement('h5');
                    const img = document.createElement('img');
                    const audio = document.createElement('audio');
                    const audioSource = document.createElement('source');


                    artists.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;

                    article.appendChild(img);
                    article.appendChild(artists);
                    article.appendChild(song);
                    article.appendChild(audio);
                    audio.appendChild(audioSource);

                    songContainer.appendChild(article);
                })
            })
            .catch(error => console.log(error))
    }
}


const searchBtn = document.getElementById('searchTermBtn');
searchBtn.addEventListener('click', updateTerm)

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');

    //prevents playing of multiple songs at the same time
    for (let song of audio) {
        if (song != event.target) {
            song.pause()
        }
    }
}, true)


  

