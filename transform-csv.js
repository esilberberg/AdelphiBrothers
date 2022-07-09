// Reads Google Sheets and then formats data for display under 'projects' tab in main section.

const albumsURL = "https://docs.google.com/spreadsheets/d/1Z7_z0qVmOVx818EtVM0FmyGrRSyn7bYFo862207aUZ0/export?format=csv&sheet={Albums}";

const singlesURL = "https://docs.google.com/spreadsheets/d/1Z7_z0qVmOVx818EtVM0FmyGrRSyn7bYFo862207aUZ0/export?format=csv&gid=1136610250";

const flexContainerAlbums = document.querySelector("#flex-container-albums");

const flexContainerSingles = document.querySelector("#flex-container-singles");

fetch(albumsURL).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        flexContainerAlbums.innerHTML += '<li class="album">' + '<a href="' + row.link + '" target=”_blank” rel=”noopener noreferrer”>' + 
        '<img src="media/' + row.artwork + '" alt="' + row.album + '" class="album-art"></img>' +
        '<h3>' + row.album + '</h3>' + 
        '<p class="blurb">' + row.blurb + '</p>' +
        '<p class="year">' + row.year + ' &#8226; ' + row.number + '</p>' + 
        '</a>' + '</li>';
    });
});

fetch(singlesURL).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        flexContainerSingles.innerHTML += '<li class="album">' + '<a href="' + row.link + '" target=”_blank” rel=”noopener noreferrer”>' + 
        '<img src="media/' + row.artwork + '" alt="' + row.track + '" class="album-art"></img>' +
        '<h3>' + row.track + '</h3>' + 
        '<p class="blurb">' + row.blurb + '</p>' +
        '<p class="year">' + row.year + ' &#8226; ' + row.number + '</p>' + 
        '</a>' + '</li>';
    });
});
