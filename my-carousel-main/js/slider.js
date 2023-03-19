const images=[
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]
let imgIndex=0;
setInterval(()=>{
    if(imgIndex===8){
        imgIndex=0
    }
    console.log(images[imgIndex]);
    const img=document.getElementById('image');
    img.setAttribute('src',images[imgIndex]);
    imgIndex++;
},1000);

//const img=document.getElementById('image');
//img.setAttribute('src','images[imgIndex]');
