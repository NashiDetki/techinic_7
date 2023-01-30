let image = document.querySelector('.viewer_image');
console.log(image);


let link1 = document.querySelector('.link1');
console.log(link1);


let link2 = document.querySelector('.link2');
console.log(link2);


let link3 = document.querySelector('.link3');
console.log(link3);


let link4 = document.querySelector('.link4');
console.log(link4);

link1.addEventListener('click',function(){
    image.src = './img/photo1669536588 (1).jpeg'
});

link2.addEventListener('click',function(){
    image.src = './img/photo1669536588 (2).jpeg'
});

link3.addEventListener('click',function(){
    image.src = './img/photo1669536588 (3).jpeg'
});

link4.addEventListener('click',function(){
    image.src = './img/photo1669536588.jpeg'
});