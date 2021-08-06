// https://api.jikan.moe/v3/anime/{id}(/request)
// {animeArr.forEach(anime => getAll(anime))})
// 'https://api.jikan.moe/v3/search/anime?q=&order_by=title&sort=asc'
document.addEventListener("DOMContentLoaded", () => {
    const newCom = document.querySelector('.search-anime')
    newCom.addEventListener('submit', e => {
        e.preventDefault()
        commenting()
    })
});



bringUpSomeAnime = (anime) => {
    const displayAnime = document.getElementById('random-animes')
    let card = document.createElement('div')
    
    card.className = 'card'
    card.id = `${anime.mal_id}`
    card.innerHTML = `
    <p class="title">${anime.title}</p>
    <img src ="${anime.image_url} class = "anime-display"/>
    <p id =${anime.id}>${anime.score}</p>
    <button class ="like" id = "${anime.mal_id}"> 👍</button>
    <button class ="watch-btn" id  ="${anime.mal_id}">Watch Later</button>`
    card.querySelector('.like').addEventListener('click', () => {
        card.querySelector('.card > .like').textContent = "✔️"
    })
    card.querySelector('.watch-btn').addEventListener('click', () => {
        const watchList = document.getElementById('watch-later')
        watchList.append(card)
    })

    displayAnime.append(card)
}



getAllAnime = () => {
fetch('https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1&order_by=score&sort=desc')
.then(resp => resp.json())
.then(animeArr => {
    let bigObj = animeArr
    bigObj = animeArr.results
    bigObj.forEach(anime => bringUpSomeAnime(anime))
    // debugger
    // console.log(shonenAnime)

        document.querySelector('#comment').addEventListener('keyup', e => {
            const searchString = e.target.value
            const filteredAnime = bigObj.filter( anime => {
                return anime.title.toLowerCase().includes(searchString)
            })
            displayFiltered(filteredAnime)            
        })
    })
    
}
getAllAnime()

document.querySelector('input[type="text"]').addEventListener('focus', (e)=>{
    e.target.style.background = 'lightblue'
})
document.querySelector('input[type="text"]').addEventListener('blur', (e) => {
    e.target.style.background = 'white'
})
document.querySelector('#written-note').addEventListener('focus', (e) => {
    e.target.style.background = 'lightblue'
})
document.querySelector('#written-note').addEventListener('blur', (e) => {
    e.target.style.background = 'white'
})

commenting = () => {
    const li = document.createElement('div')
    const addComment = document.querySelector('#written-note')
    li.className = 'comment-card'
    li.innerText = addComment.value
    document.querySelector('#notes').append(li)
}

displayFiltered = (bigObj) => {
    const htmlString = bigObj
    .map((anime) => {
        return `
        <li class="card" name ="note-card">
            <h2>${anime.title}</h2>
            <img src="${anime.image_url}"></img>
            <button class ="delete-btn" id = "${anime.mal_id}">Delete</button>
        </li>
    `
    })
    document.querySelector('#filtering').innerHTML = htmlString
    liCard()
}

// liCard = () => {
//     let liDelete = document.querySelectorAll('li')
//     liDelete.addEventListener('click', () => {
//         document.querySelectorAll('.delete-btn').remove()
//     })
// }

// const liDelete = document.querySelector('li')
liCard = () => {
const liDelete = document.querySelector('li')
liDelete.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('li').remove(liDelete)
})
}

// displayFiltered = (anime, filterForm) => {
//     let card = document.createElement('div')
//     card.innerHTML =  `
//         <div class="card" name ="note-card">
//             <h2>${anime.title}</h2>
//             <img src="${anime.image_url}"></img>
//             <button class ="delete-btn" id = "${anime.mal_id}">Delete</button>
//         </div >
//     `
    
//     filterForm.append(card)
    
// }

// document.querySelector('#comment').addEventListener('keyup', e => {
//     const searchString = e.target.value
//     const filteredAnime = bigObj.filter( anime => {
//         return anime.title.toLowerCase().includes(searchString)
//     })
//     const filterForm = document.querySelector('#filtering')
//     filteredAnime.forEach((anime) => displayFiltered(anime, filterForm))            
// })
// })

// }