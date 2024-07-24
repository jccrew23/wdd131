const review = [
    {
        firstName: 'Liz',
        stars: '⭐⭐⭐⭐⭐',
        reviewpar: 'Our kids have learned so much here in just  year. Is has tremendously  helped with their piano skills and overall confidence with trying new things. Jalie is kind, patient and a very effective teacher. They have learned so much from her in a short amount time.'
    },
    {
        firstName: 'Emily',
        stars: '⭐⭐⭐⭐⭐',
        reviewpar: 'We have been taking piano lessons at Creative Keys for almost one year now, both child and adult classes. They have the best teacher, and we feel so grateful about finding this gem!'
    },
    {
        firstName: 'Sam',
        stars: '⭐⭐⭐⭐⭐',
        reviewpar: 'Jalie was the piano teacher for our two sons and was so wonderful. She is fun and gentle, and always made them feel so positively about the piano and their lessons. I would highly recommend her to anyone looking for a teacher who is passionate and great with kids.'
    },
    {
        firstName: 'Paulie',
        stars: '⭐⭐⭐⭐⭐',
        reviewpar: 'Creative Keys is stellar at communicating with parents and students. My child takes lessons from Jalie and finds her helpful, kind and supportive as well as incredible knowledgeable about music theory. She has gained an immeasurable amount of confidence so far.'
    }
];

function displayReview(sect) {
    document.querySelector('#review').innerHTML = '';
    sect.forEach(rev => {
        const card = document.createElement('section');
        const fname = document.createElement('h3');
        const stars = document.createElement('p');
        const reviewWord = document.createElement('p');

        fname.innerHTML = rev.firstName;
        stars.innerHTML = rev.stars;
        reviewWord.innerHTML = rev.reviewpar;

        card.appendChild(fname);
        card.appendChild(stars);
        card.appendChild(reviewWord);

        document.querySelector('#review').appendChild(card);
    })
}

displayReview(review);

// footer copyright and modified date
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);