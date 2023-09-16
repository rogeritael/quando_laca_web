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

    var releaseDate = `new Date(${date[2]}, ${month}, ${date[1]})`

    for(i=0; i < platformsArray.length;i++){
        platforms.push(platformsArray[i].innerText)
    }
    
    var infos = {
        id: id,
        title: title,
        imagem: image,
        price: price,
        developer: developer,
        platforms: platforms,
        releaseDate: releaseDate
    }

    var fileName = title.replaceAll(' ', '')


    const infosString = `export const ${fileName} = ${JSON.stringify(infos, null, 2)}`;
    createAndDownloadFile(`${fileName}.ts`, infosString);
}
getInfos()