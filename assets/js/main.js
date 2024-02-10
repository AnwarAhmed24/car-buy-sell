
$(document).ready(function () {
  try {
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


  //Slider For Details Page//
  $('.car-img-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.img-arrow-prev',
    nextArrow: '.img-arrow-next',
    centerPadding: '0px',
    asNavFor: '.slider-nav',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }

    }]

  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    arrows:false,
    slidesToScroll: 1,
    asNavFor: '.car-img-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        centerMode: false,
        centerPadding: '0px',
        focusOnSelect: true,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 380,
      settings: {
        slidesToShow: 3,
     
      }
    }]
    
  });


//Related Car Slider for Details Page//
  $('.related-cars').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 5
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
 
  
 //3Dots Funciton//
  $("#read-more").on("click", function () {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("read-more");
  
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    });

   
//======Click to Copy Clipboard =====//
  $("#copy-link").on("click", function () {
    var copyText = document.getElementById("myInput1");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text

    this.innerText = "Copied";
  });


    //Internation Phone Code//
    let input = document.querySelector("#phone_num");
    window.intlTelInput(input, {
      showSelectedDialCode: true,
      initialCountry: "ae",
      onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],

      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
    });

  
    
   


  }

  catch (error) {
    console(error.message);
  }
 

});

