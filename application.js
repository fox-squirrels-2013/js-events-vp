$(document).ready(function() {

  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {

    $('.add').on('click', function(){
      var task = $('input').val()
      $('.todo_list').append(buildTodo(task))

      // clears the input box
      $('input').val('')
    })
    $('.todo_list').on('click', '.delete', function(e){
      $(this).closest('.todo').remove()
      e.preventDefault()
    })
     $('.todo_list').on('click', '.complete', function(e){
      $(this).closest('.todo').addClass('complete')
      e.preventDefault()
    })

    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  //Create functions to add, remove and complete todos

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    // console.log(todoName)
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
