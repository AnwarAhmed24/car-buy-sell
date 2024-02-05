$(document).ready(function () {

//=====Brand Image Slider=====//
  $('.brand-slider').slick({
        arrows: false,
        dots: false,
    autoplay:true,
    pauseOnHover:false,
    slidesToShow: 5,
    slidesToScroll: 1,

      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      
        }

      }, {

          breakpoint: 1000,
          settings: {
            slidesToShow: 3
          }

        },{

        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          autoplaySpeed: 2000
        }

      }, {

        breakpoint: 300,
        settings: "unslick" 

      }]
        
  });

//Propuller Car Slider//
  $('.propuller-cars').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '.prev-btn',
    nextArrow:'.next-btn',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }]

  });

 /*  $(".prev-btn").click(function () {
    $(".propuller-cars").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".propuller-cars").slick("slickNext");
  });
 */

  //====Advance Search Function=====//
  NiceSelect.bind(document.getElementById("select-city"), {searchable: true, placeholder: 'Select City'});
  NiceSelect.bind(document.getElementById("select-make"), {searchable: true, placeholder: 'Select Make'});
  NiceSelect.bind(document.getElementById("select-model"), {searchable: true, placeholder: 'Select Model'});
  NiceSelect.bind(document.getElementById("select-transmission"), { searchable: false, placeholder: 'Select Transmission'});
  //Search For Car Parts//
  NiceSelect.bind(document.getElementById("parts-brand"), {searchable: true, placeholder: 'Select Brand'});
  NiceSelect.bind(document.getElementById("parts-model"), { searchable: true, placeholder: 'Select Model' });
  NiceSelect.bind(document.getElementById("parts-name"), { searchable: true, placeholder: 'Select Parts' });
  NiceSelect.bind(document.getElementById("parts-condtion"), { searchable: false, placeholder: 'Select Condtion' });


  

});