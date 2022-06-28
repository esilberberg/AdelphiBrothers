// Reads Google Sheets and then formats data for display under 'projects' tab in main section.

const url = "https://docs.google.com/spreadsheets/d/1Z7_z0qVmOVx818EtVM0FmyGrRSyn7bYFo862207aUZ0/export?format=csv";

const discography = document.querySelector("#discography");

fetch(url).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);   
}).then(function(csv) {
    csv.forEach(function(row) {
        // row. should be followed by exact name of column label in sheet
        discography.innerHTML += 
        '<div class="album">' + '<div class="album-art">' +	
                '<a href="' + row.link + '" target=”_blank” rel=”noopener noreferrer”>' + '<img src="media/' + row.artwork + '">' +'</a>' +
            '</div>' + 
            '<div class="album-info">' + 
                '<a href="' + row.link + '" target=”_blank” rel=”noopener noreferrer”>' +
                    '<h2>' + row.album + '</h2>' + 
                '</a>' + 
                '<p class="year">' + row.year + '</p>' + 
                '<p class="credits">' + row.credits + '</p>' + 
                '<p class="tracks">' + row.tracks + '</p>' +   
            '</div>' + '</div>'
    });
});


        // '<div class="album">' + '<div class="album-art">' +	
        //         '<a href="' + row.link + '" target=”_blank” rel=”noopener noreferrer”>' + '<img src="media/' + row.artwork + '">' +'</a>' +
        //     '</div>' + 
        //     '<div class="album-info">' + 
        //         '<h2>' + row.album + '</h2>' + 
        //         '<p class="year">' + row.year + '</p>' + 
        //         '<p class="credits">' + row.credits + '</p>' + 
        //         '<p class="tracks">' + row.tracks + '</p>' +   
        //     '</div>' + '</div>'