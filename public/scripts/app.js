
$(document).ready(function () {



  $('.create-map-button').click(function () {
    $.ajax({
      method: "POST",
      url: "/maps"
    });
  });


  $('.my-map-click').click(function () {
    $('.list-my-maps').toggleClass('visible').toggleClass('slide');
    $('.to-grey').toggleClass('grey-screen');

  });



  //creating links in the list

  const createList = (link) => {
    return `<p>"${item.id}"</p>`;
  };

  const renderLink = () => {
    let map = "map descrpition or id";
    let $newLink = createListLink(map);
    let result = map.link($newLink);
    $('.links').prepend(result);
  };

  $('.my-map-click').click(function () {
    $.ajax({
      method: "GET",
      url: "/maps"
    })
      .then((idArray) => {

        for (let item of idArray) {
          let mapListId = `<p>"${item.id}"</p>`;

          $('.links').prepend(mapListId);


        }

      });
    // renderLink();
  });


  // SKELETON EXAMPLE

  // $(() => {
  //   $.ajax({
  //     method: "POST",
  //     url: "/maps"
  //   }).done((result) => {
  //     for (user of users) {
  //       $("<div>").text(user.name).appendTo($("body"));
  //     }
  //   });

});



