$(document).ready(function() {
console.log("ha")

  var todoTemplate = $.trim($('#todo_template').html());
  // var task = $('.todo').html()
  // var task = $('#todo.text').text()
  
  function bindEvents() {
    console.log("started")
    $('.add').on('click', function(e){
    console.log(todo_template)
    // $('.todo_list').append(todo_template)
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
