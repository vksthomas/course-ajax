(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        console.log(searchedForText);

        (function ajaxx(){
            const unsplashRequest = new XMLHttpRequest();
        
            unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
            unsplashRequest.onload = addImage;
            unsplashRequest.setRequestHeader('Authorization', 'Client-ID 516df37e62129890c744aecd2fe369d60e851188a2006e493a13bd126b9b7aa7');
            unsplashRequest.send();
            })()
    });
    
    function addImage(){

        let htmlcontent = '';
        const data = JSON.parse(this.response);

         console.log(data)
        //  console.log(this.response)
            const firstImage = data.results[0];

            htmlcontent =  `<figure>
            <img src='${firstImage.urls.regular}' >
            <figure> `
        

        responseContainer.insertAdjacentHTML('afterbegin',htmlcontent)
       
    }
})();
