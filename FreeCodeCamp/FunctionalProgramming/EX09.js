var filteredList = watchList.filter(el => +el["imdbRating"] >= 8).map(el => ({title : el["Title"],
    rating: el["imdbRating"]}))