

var $catList = $('#cats');


$.ajax({
	method: 'GET',
	url: 'https://ga-cat-rescue.herokuapp.com/api/cats'
})
	.done(function(data) {
		var obj = JSON.parse(data);
		console.log(obj);
		for(i=(obj.length)-1; i>=0;i--){
		  $catList.append('<li>' + obj[i].name + '-' + obj[i].note + '</li>');
		}
	});

function makeResults(namePassed, notePassed){
	var newCat = document.createElement('li');
	newCat.innerHTML = namePassed + ' - ' + notePassed;
	newCat.className = 'results';
	$catList.append(newCat);
}

var name;
var note;

$('#new-cat').on('submit', function(event){
  event.preventDefault();
  name = $('#cat-name').val();
  note = $('#cat-note').val();
  makeResults(name,note);
  console.log(makeResults);
  newCat = {
  	name: name,
  	note: note,
  };

    $.ajax({
    	method: 'POST',
    	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
   		data: JSON.stringify(newCat)
	})
    .done(function(data) {
    	$.ajax({
    		method: 'GET',
    		url: 'https://ga-cat-rescue.herokuapp.com/api/cats'
    	});
    });
});




// $.ajax({
// 	method: 'POST',
// 	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
// 	contentType: 'application/json',
// 	data: JSON.stringify({
// 		name: $('#cat-name').val(),
// 		note: $('#cat-note').val()
// 	})

// });











// $catList.append("<li>").class('catList');





// var catHolder = document.createElement('li');

// catList.appendChild(catHolder).innerHTML(catsMessy);




// var cats = JSON.parse(catsMessy);







// $.ajax({
// 	method: 'GET',
// 	url: 'https://ga-cat-rescue.herokuapp.com/api/cats'
// })
// .done(function(data) {
	
// 	catList.appendChild(cats);
// });


