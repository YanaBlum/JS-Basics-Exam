const addInputToPage = function(input){
  for(let i=0;i<10;i++)
  $('#content').append(`<p>${input}</p>`)
}
$('#submit').on('click',function(){
  const name = $('#name').val()
  addInputToPage(name)
})


addInputToPage('shoobert')