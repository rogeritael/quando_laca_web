function createAndDownloadTSFile(filename, content) {
    const blob = new Blob([content], { type: 'text/typescript' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    // Simulate a click event to trigger the download
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false,
    });
    a.dispatchEvent(clickEvent);

    // Release the object URL resources
    window.URL.revokeObjectURL(url);
}

function getInfos(){
    var id = document.querySelector('.banner-title').innerText.replace('Edit', '').replace(':','').toLowerCase().replaceAll(' ','_')
    var title = document.querySelector('.banner-title').innerText.replace('Edit', '')
    var developer = document.querySelector('.banner-subsubheading').innerText
    var platformsArray = document.querySelectorAll('.gamepage-tabs div')[5].querySelectorAll('p')[1].querySelectorAll('a')
    var platforms = []
    var month = 0
    var image = document.querySelector('.gamepage-cover img').src
    var price= 100
    var date = document.querySelector('.banner-subheading span span').innerText.replace(',', '').split(' ')
    let categories = document.querySelectorAll(".gamepage-tabs div")[5].querySelectorAll('p')[0].innerText.replace('Genre: ', '').trim().split(',')
    var genres = []

    for(i=0; i < categories.length; i++){
        switch(categories[i]){
        
            case 'Point-and-click':
                genres.push({id: '', name: 'Point-and-click'})
                break;
            case 'Fighting':
                genres.push({id: '', name: 'Luta'})
                break;
            case 'Shooter':
                genres.push({id: '', name: 'Shooter'})
                break;
            case 'Music':
                genres.push({id: '', name: 'Música'})
                break;
            case 'Platform':
                genres.push({id: '', name: 'Plataforma'})
                break;
            case 'Puzzle':
                genres.push({id: '', name: 'Puzzle'})
                break;
            case 'Racing':
                genres.push({id: '', name: 'Corrida'})
                break;
            case 'Real Time Strategy (RTS)':
                genres.push({id: '', name: 'RTS'})
                break;
            case 'Role-playing (RPG)':
                genres.push({id: '', name: 'RPG'})
                break;
            case 'Tactical':
                genres.push({id: '', name: 'Tático'})
                break;
            case 'Simulator':
                genres.push({id: '', name: 'Simulador'})
                break;
            case 'Sport':
                genres.push({id: '', name: 'Esporte'})
                break;
            case 'Strategy':
                genres.push({id: '', name: 'Estratégia'})
                break;
            case 'Turn-based strategy (TBS)':
                genres.push({id: '', name: 'TBS'})
                break;
            case 'Quiz/Trivia':
                genres.push({id: '', name: 'Quiz/Trivia'})
                break;
            case `Hack and slash/Beat 'em up`:
                genres.push({id: '', name: `Hack and slash`})
                break;
            case 'Adventure':
                genres.push({id: '', name: 'Aventura'})
                break;
            case 'Indie':
                genres.push({id: '', name: 'Indie'})
                break;
            case 'Card & Board Game':
                genres.push({id: '', name: 'Cartas'})
                break;
            case 'MOBA':
                genres.push({id: '', name: 'MOBA'})
                break;
        }
    }


    var releaseDate = ''

    switch(date[0]){
        case 'Jan':
            month = 0;
            break;
        case 'Feb':
            month = 1;
            break;
        case 'Mar':
            month = 2;
            break;
        case 'Apr':
            month = 3;
            break;
        case 'May':
            month = 4;
            break;
        case 'Jun':
            month = 5;
            break;
        case 'Jul':
            month = 6;
            break;
        case 'Aug':
            month = 7;
            break;
        case 'Sep':
            month = 8;
            break;
        case 'Oct':
            month = 9;
            break;
        case 'Nov':
            month = 10;
            break;
        case 'Dec':
            month = 11;
            break;
    }

    let images = document.querySelectorAll('.media-thumbs-track div.media-thumbs-item img, .media-thumbs-track div.media-thumbs-item iframe')
    let medias = []

    for(i=0; i < images.length; i++){
        if(images[i].src.split('/')[2] === 'www.youtube.com'){
            medias.push({type: 'video', image: '', link: images[i].src})
        } else {
            medias.push({type: 'image', image: images[i].src})
        }
}

    var releaseDate = `new Date(${date[2]}, ${month}, ${date[1]})`

    for(i=0; i < platformsArray.length;i++){
        platforms.push(platformsArray[i].innerText)
    }

    var about = document.querySelectorAll('.gamepage-tabs div')[5].querySelector('div').innerText.split('\n\n')
    
    var infos = {
        id: id,
        name: title,
        image: image,
        price: price,
        developer: developer,
        platforms: platforms,
        releaseDate: releaseDate,
        category: genres,
        media: medias,
        description: about
    }

    var fileName = title.replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '').replaceAll('-', '').replaceAll("'", "").replaceAll('`', '').replaceAll('!', '').replaceAll('_', '').replaceAll(':', '').replaceAll(',', '')


    const infosString = `export const ${fileName} = ${JSON.stringify(infos, null, 2)}`;
    createAndDownloadTSFile(`${fileName}.ts`, infosString);
}
getInfos()