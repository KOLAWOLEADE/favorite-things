
$(document).ready(function() {
    $("#my-favorite").submit(function(event) {
        const petInput = $("#pet").val();
        const schoolInput = $("#school").val();
        const clubInput= $("#club").val();
        const subjectInput = $("#subject").val();
        const countryInput = $("#country").val();


        $(".pet").text(petInput);
        $(".school").text(schoolInput);
        $(".club").text(clubInput);
        $(".subject").text(subjectInput);
        $(".country").text(countryInput);
    
      $("#favorite-things").show();
      event.preventDefault();


       let favorite = ["petInput", "schoolInput", "clubInput", "subjectInput", "countryInput"];

       console.log(favorite);

       let secondFavorite = favorite[1];

       let firstFavorite = favorite[0];

       let thirdDFavorite = favorite[2];

       console.log(secondFavorite,firstFavorite,thirdDFavorite);

       let brandNewFavorite = [];

       brandNewFavorite = favorite.push(secondFavorite,firstFavorite,thirdDFavorite);

       console.log(brandNewFavorite);


    //    $(".favor").show();



    });
  });