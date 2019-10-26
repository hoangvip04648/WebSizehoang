
window.onscroll = function() {myFunction()};

var flagCroll=1;
function myFunction() {
  if(flagCroll){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      flagCroll=0;
      document.getElementById("header").classList.add('fixed');
    }
  }
  if ( (document.documentElement.scrollTop === 0 )&&( $('.menu-mobile.active').length===0)) {
    document.getElementById("header").classList.remove('fixed');
    flagCroll=1;
  }
}



function toggleMobileMenu1() {
  $('.item-menu-mobile.cuahang').toggleClass('active');
}

function toggleMobileMenu() {
    $('.item-menu-mobile.tapchi').toggleClass('active');
  }

var countClickMenu=0;
function toggleMenu() {
  countClickMenu++;
  console.log(countClickMenu)
  $('.item-menu-mobile.tapchi').removeClass('active');
  $('.item-menu-mobile.cuahang').removeClass('active');
  $('.menu-mobile').toggleClass('active');
  //404
  if((countClickMenu%2))
  {
    document.getElementById("header").classList.add('fixed');
  }
  else{
    if(flagCroll===1){
      document.getElementById("header").classList.remove('fixed');
    }
  }
 }
 function closemenumobile(){
  $('.menu-mobile').removeClass("active");
  $('.item-menu-mobile.tapchi').removeClass('active');
  $('.item-menu-mobile.cuahang').removeClass('active');
}



var slideIndex=0;
var run;
showSlide();
function showSlide(){
  if(slideIndex>3){
    slideIndex=0;
  }
  if(slideIndex<0){
    slideIndex=3;
  }
  let slides= document.getElementsByClassName('baner');
  let dots=document.getElementsByClassName('dot');
  var i;
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  for(i=0;i<slides.length;i++){
    dots[i].style.background="none";
  }
  slides[slideIndex].style.display="block";
  dots[slideIndex].style.background="white"
  slideIndex++;
  run= setTimeout(showSlide,5000);
}


function currenDot(n){
  clearTimeout(run);
  showSlide(slideIndex=n);

}

function preSlide(){
  clearTimeout(run);
  showSlide(slideIndex=slideIndex-2);
}
function nextSlide(){
  clearTimeout(run);
  showSlide(slideIndex);
}

var listButtonnextProduct = $('.button-next-product');
var listWrapProduct=$('.wrap-detail');
var listButtonPreProduct = $('.button-pre-product')

var currenProduct=[];
for(var i=0;i<listWrapProduct.length;i++){
  currenProduct[i]=-100;
}
var count=5;
// so san pham trong 1 slide product
var numberProduct=15;


isSelected(0);
function isSelected(curren){
  // update count them 5 don vi;
  var listproducts=$(document.getElementsByClassName('wrap-detail')[curren]).find('.product');
  //selected cho 5 phan tu dau tien cua moi list product
  if(onNext===1)
  { 
    for(var i=count;i<count+5;i++){
      if(i>numberProduct-1)
      {
        listproducts[i-numberProduct].classList.remove('is-selected');
      }
      else {
        listproducts[i].classList.remove('is-selected');
      }
    }
    count=count+5;
    if(count>numberProduct-1){
      count=0;
    }
    for(var i=count;i<count+5;i++){
      listproducts[i].classList.add('is-selected');
    }
  }
  else if(onPre===1){
    for(var i=count;i<count+5;i++){
      if(i>numberProduct-1)
      {
        listproducts[i-numberProduct].classList.remove('is-selected');
      }
      else {
        listproducts[i].classList.remove('is-selected');
      }
    }
    count=count-5;
    if(count<0){
      count=numberProduct+count;
    }
    for(var i=count;i<count+5;i++){
      listproducts[i].classList.add('is-selected');
    }
  }
  else{
    for(var i=0; i<listWrapProduct.length;i++){
      var listproducts=$(listWrapProduct[i]).find('.product');
      for(var j=5;j<10;j++){
        listproducts[j].classList.add('is-selected')
      }
    }
  }
}

//flag de thay doi left khi het anh.
var flagPre=0;var onPre=0;
var flagNext=0;var onNext=0;


function preProduct(curren){
  currenProduct[curren]=currenProduct[curren]+100;
  //turn on Next
  onPre=1;
  //update count them 5 don vi.
  //delete selected cu
  //selected 5 product ke tiep
  isSelected(curren);
  //dich slide sang trai

  listWrapProduct[curren].style.transform= `translateX(${currenProduct[curren]}%)`;
  var listProduct=$(document.getElementsByClassName('wrap-detail')[curren]).find('.product');
  //update left cua selected ke tiep

  //rán pre.
  var tempcount=count;

  tempcount=tempcount-5;
  
  if(tempcount<0){
    tempcount=numberProduct+tempcount;
  }
  var value=[];
  for(var j = count; j < count+5 ; j++){
    value.push(String(parseInt(listProduct[j].style.left)-100))
  }
  var temp=0;
 
  
  for(var j = tempcount; j < tempcount+5 ; j++){
    listProduct[j].style.setProperty('left',value[temp]+'%');
    temp++;
  }

 
  //ran next
  var tempcount=count;

  tempcount=tempcount+5;
  
  if(tempcount>numberProduct-1){
    tempcount=0;
  }
  var value=[];
  for(var j = count; j < count+5 ; j++){
    value.push(String(parseInt(listProduct[j].style.left)+100))
  }
  var temp=0;
 
  
  for(var j = tempcount; j < tempcount+5 ; j++){
    listProduct[j].style.setProperty('left',value[temp]+'%');
    temp++;
  }
  
  onPre=0;
}


 
    

function nextProduct(curren){
  currenProduct[curren]=currenProduct[curren]-100;

  onNext=1;
  //update count them 5 don vi.
  //delete selected cu
  //selected 5 product ke tiep
  isSelected(curren);
  //dich slide sang trai
  listWrapProduct[curren].style.transform= `translateX(${currenProduct[curren]}%)`;
  var listProduct=$(document.getElementsByClassName('wrap-detail')[curren]).find('.product');
  //update left cua selected ke tiep

  //rán pre.
  var tempcount=count;

  tempcount=tempcount-5;
  
  if(tempcount<0){
    tempcount=numberProduct+tempcount;
  }
  var value=[];
  for(var j = count; j < count+5 ; j++){
    value.push(String(parseInt(listProduct[j].style.left)-100))
  }
  console.log("pre"+value);
  var temp=0;
 
  
  for(var j = tempcount; j < tempcount+5 ; j++){
    listProduct[j].style.setProperty('left',value[temp]+'%');
    temp++;
  }

  //ran next
  var tempcount=count;

  tempcount=tempcount+5;
  
  if(tempcount>numberProduct-1){
    tempcount=0;
  }
  var value=[];
  for(var j = count; j < count+5 ; j++){
    value.push(String(parseInt(listProduct[j].style.left)+100))
  }
  console.log("next"+value);
  var temp=0;
 
  
  for(var j = tempcount; j < tempcount+5 ; j++){
    listProduct[j].style.setProperty('left',value[temp]+'%');
    temp++;
  }

  onNext=0;
}



var a=[];



// responsive
var flag=0;
var saveLeft=[];
function mobileProduct(){
  if(screen.width<765)
  { 
    flag=1;
    //xoa va luu lia cac thuoc tinh left,position cua img
    for(var i=0;i<listWrapProduct.length;i++)
    {
      var listproducts=$(document.getElementsByClassName('wrap-detail')[i]).find('.product');
      for(var j=0; j< listproducts.length;j++){
        console.log( listproducts[j].style.left)
        saveLeft.push(listproducts[j].style.left); 
        //xoa left,position 
        listproducts[j].style.left=null;
        listproducts[j].style.position=null;
      }
    }
    //thay doi ten wrap-detail ->row
    for(var i=0;i<listWrapProduct.length;i++)
    {
      listWrapProduct[i].classList.add('row');
      listWrapProduct[i].classList.remove('wrap-detail');
    }

    //xet height co khung hinh
    for(var i=0;i<listWrapProduct.length;i++){
    (document.getElementsByClassName('wrap-')[i]).style.height='auto';
    (document.getElementsByClassName('wrap-')[i]).style.paddingTop="10px";
    }

    //an hai button
    for(var i=0;i<listWrapProduct.length;i++){
      (document.getElementsByClassName('button-pre-product')[i]).style.display='none';
      (document.getElementsByClassName('button-next-product')[i]).style.display='none';
    }
  }
  else if(flag){


    //.row -> wrap-detail ( trang thai ban dau)
    for(var i=0;i<listWrapProduct.length;i++)
    {
      var listproducts=$(document.getElementsByClassName('wrap-')[i]).find('.row');
      listproducts.addClass('wrap-detail');
      listproducts.removeClass('row');
    }

    //them lai left va position
    for(var i=0;i<listWrapProduct.length;i++)
    {
      var listproducts=$(document.getElementsByClassName('wrap-detail')[i]).find('.product');
      for(var j=0; j< listproducts.length;j++){
        //them left,position 
        listproducts[j].style.left=saveLeft[j+numberProduct*i];
        listproducts[j].style.position="absolute";
      }
    }
    //xet height co khung hinh
    for(var i=0;i<listWrapProduct.length;i++){
      (document.getElementsByClassName('wrap-')[i]).style.height='275px';
      (document.getElementsByClassName('wrap-')[i]).style.paddingTop="0";
    }

     //hien lai hai button
     for(var i=0;i<listWrapProduct.length;i++){
      (document.getElementsByClassName('button-pre-product')[i]).style.display='inline-block';
      (document.getElementsByClassName('button-next-product')[i]).style.display='inline-block';
    }

  }
}
mobileProduct();

$(document).ready(function(){
  $(window).resize(function(){
    mobileProduct();
  });
});


// detail



// ajax

// var listObject = [];

// for(var i = 0 ; i< 5; i++){
//   listObject.push( document.getElementsByClassName('product')[i]);
// }


// function getData( listObject ){
//   $.ajax({
//     url : "https://api.myjson.com/bins/cjjf4",
//     method : "GET", 
//     dataType : "json",
//     success : function(res){
//       // render(res);
//       console.log(res);
//     },
//     error: function(err){
//       console.log(err);
//     }
//   })
// }

// function getData() {
//   $.ajax({
//     url: 'https://api.myjson.com/bins/cjjf4',
//     method: 'GET',
//     success: function(res) {
//      render(res);
//     },
//     error : function(err) {
//       alert("Can't get data !");
//       console.log(err);
//     }
//   })
// }

// $(document).ready(function(){
//   getData()
// })

function render(data){
  var html="";
  for(var i = 0;i<data.length ; i++){
    var flag=i*20;
    html += 
              `<div class="col-6 col-xs-6 col-sm-6 col-md-3 product" style="position: absolute;left:${flag}%">
                <div >
                    <div>
                        <img src="${data[i].source}" id="${data[i].id}">
                    </div>
                </div>
                <div >
                  <div class="col-12" style="text-align: center">
                      <span>RICHNESS</span>
                      <p>Tshirt</p>
                      <strong>${data[i].price}.000</strong>
                  </div>  
                </div>
              </div>`
  }
  $('.wrap-detail').prepend(html);
}




function detailhtml() {
  $('.container').remove();
  $.ajax({
    url :"https://api.myjson.com/bins/12hp4k",
    method : "GET",
    dataType : 'json',  
    success : function(res){
      //render ra giao dien list product

      var html = 
      `<section class="content" style="top:10px!important">
        <div class="container">
          <div class="row listproduct">`;
      for(var i=0 ; i < res.length; i++){
        html += 
        `<div class="col-6 col-xs-6 col-sm-3 col-lg-2 product" >
            <div class="row">
              <a class="img000" href="./detailProduct.html">
                <img src="${res[i].source}" id="${res[i].id}" >
              </a>
            </div>
          <div >
            <div class="col-12" style="text-align: center">
                <span>RICHNESS</span>
                <p>Tshirt</p>
                <strong>${res[i].price}.000</strong>
            </div>  
          </div>
        </div>`
      }
      html+=
          `</div>
          </div>
          </section>`;
      $('.content').prepend(html);
    },
    error : function(err){
      console.log(err);
    }
  })
}

function showdetail(data){

}


