$('#getdata').click(function () {
   //ajax functie aan roepen
   $.ajax({
      // link waar informatie van komt
      url: 'https://thatsthespir.it/api',
      error: function (error) {
         console.log(error);
      },
      success: function (data) {
         // in p text zetten 
         $('#text')
            // toevoegen aan p#text
            .html(data.quote)
            .append(' - ' + data.author);
      },
      type: 'GET'
   });
});