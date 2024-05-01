const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function playTrack(trackId){
    const snippet = ` 
    <iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator"
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>
    `;

    document.querySelector("#artist").innerHTML = snippet;
}

async function getTracks(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url); //the existing url fetch is grabbing from
    const trackData = await response.json(); //then grabs data that exists within this url
    console.log(trackData);
    document.querySelector('#tracks').innerHTML = ""; // clears out after every new search

    // creating a loop to show the first five loops 
for (let i = 0; i < 5; i++){
        const track = trackData[i];
        const snippet = `
            <section class="track-item preview" onclick="playTrack('${track.id}')">
                <img src="${track.album.image_url}" alt="track image">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
            <h2>${track.album.name}</h2>
            <p>${track.artist.name}</p>
            </div>
        </section>
    `;
    document.querySelector('#tracks').innerHTML += snippet;
    }
}

async function getAlbums(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const response = await fetch(url); //the existing url fetch is grabbing from
    const albumData = await response.json(); //then grabs data that exists within this url
    console.log(albumData);
    document.querySelector('#albums').innerHTML = ""; // clears out after every new search

// creating the loop here//
for (let i = 0; i < 5; i++){
    const album = albumData[i];
    const snippet = `
    <section class="album-card" id="${albums.id}">
    <div>
        <img src="${album.image_url}">
        <h2>${album.name}</h2>
        <div class="footer">
            <a href="${album.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
`;
document.querySelector('#albums').innerHTML += snippet;
    }   
}

async function getArtist(term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const response = await fetch(url); //the existing url fetch is grabbing from
    const artistData = await response.json(); //then grabs data that exists within this url
    console.log(artistData);
    document.querySelector('#artist').innerHTML = ""; // clears out after every new search

    const artist = artistData[0];

    const snippet = `
    <section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
`;
    document.querySelector("#artist").innerHTML = snippet;
}

//PREVIOUS CODE//
// // const url = `${baseURL}?q=${term}&type=artist&limit=1`;
// const response = await fetch(url);
// const artistdata = await request.json();
// console.log(artistData);

//const artist = artistData[0];

//const snippet=`
// <section class="artist-card" id="${artist.id}">
// //     <div>
// //         <img src="${artist.image_url}">
// //         <h2>${artist.name}</h2>
// //         <div class="footer">
// //             <a href="${artist.spotify_url}" target="_blank">
// //                 view on spotify
// //             </a>
// //         </div>
// //     </div>
// // </section>
//`;
// const container = document.querySelector('#artist').innerHTML= snippet;

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}