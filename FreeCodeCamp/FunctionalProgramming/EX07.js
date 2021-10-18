var ratings = watchList.map(el => {
    return {title: el["Title"],
        rating: el['imdbRating']}
})