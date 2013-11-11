$(document).ready(function() {

  var todoTemplate = $.trim($('#todo_template').html());
  
  function bindEvents() {
    console.log("started")
    $('.add').bind('click', function(e){
    var task = $('input').val()
    console.log('html', todo_template)
    console.log(task)
    console.log($('h2').val())
    // .replaceWith(task)
    // $('#todo_template').css('display', 'inline')
    $('.todo_list').append(todoTemplate)

    // ('style', 'list-item')
    })


    // add an event listener for click on delete, complete
    // .remove()

    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  //Create functions to add, remove and complete todos

  








  // function buildTodo(todoName) {
  //   // Creates an jQueryDOMElement from the todoTemplate.
  //   // console.log(todoName)
  //   var $todo = $(todoTemplate);
  //   // Modifies it's text to use the passed in todoName.
  //   $todo.find('h2').text(todoName);
  //   // Returns the jQueryDOMElement to be used elsewhere.
  //   return $todo;
  // }

  bindEvents();
});
