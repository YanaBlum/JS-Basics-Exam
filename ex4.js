const addInputToPage = function(input){
  $('#content').append(`<p>${input}</p>`)
}
$('#submit').on('click',function(){
  const name = $('#name').val()
  addInputToPage(name)
})

addInputToPage('shoobert')