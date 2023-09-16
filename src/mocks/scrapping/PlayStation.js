function getPlaystationInfos(){

    var images = document.querySelector('.flickity-viewport').querySelectorAll('picture')
    var medias = []

    var descriptionArray = document.querySelector('.txt-block__paragraph').innerText.split('\n')
    var description = []
    for(i=0;i < descriptionArray.length;i++){
        if(descriptionArray[i].length > 0){
            description.push(descriptionArray[i])
        }
    }

    for(i=0; i < images.length; i++){
        var origin = images[i].querySelectorAll('source')[1].srcset.split('/')[2]

        if(origin == 'gmedia.playstation.com'){
            medias.push({type: 'image', image: images[i].querySelectorAll('source')[1].srcset})
        } else {
            medias.push({type: 'video', image: '', link: images[i].parentNode.parentNode.querySelector('.media-block__youtube-link').href})
        }
    }

    var infos = {
        media: medias,
        description: description
    }

    console.log(JSON.stringify(infos, null, 2))
}
getPlaystationInfos()