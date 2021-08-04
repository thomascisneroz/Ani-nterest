// https://api.jikan.moe/v3/anime/{id}(/request)
// {animeArr.forEach(anime => getAll(anime))})
document.addEventListener("DOMContentLoaded", () => {
});

// const displayAnime = document.getElementById('random-animes')

bringUpSomeAnime = (anime) => {
    const displayAnime = document.getElementById('random-animes')
    let card = document.createElement('div')
    console.log(card)
    card.className = 'card'
    card.id = `${anime.id}`
    card.innerHTML = `
    <h3>${anime.title}</h3>
    <img src ="${anime.image_url} class = "anime-display"/>
    <button class ="watch-btn" id  ="${anime.id}">👍</button>`
    displayAnime.append(card)
}



getAllAnime = () => {
fetch('https://api.jikan.moe/v3/search/anime?q=&order_by=title&sort=asc')
.then(resp => resp.json())
.then(animeArr => console.log(animeArr))
}
getAllAnime()