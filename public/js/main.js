$(document).ready(function() {

  /**
   * Functions for My Hours
   */
  
  // Add a row to the projects list
  $("#add_row").click(function(){
      $('#my_hours_table tr:last').after('<tr><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td></tr>');
  });
  
  // Submit the projects list
  $("#post_hours").click(function(){
        var url = window.location;
        var hostname = $('<a>').prop('href', url).prop('hostname');
        var hoursData = [];
    
        $('#my_hours_table > tbody').find('tr').each(function (i, el) {
            var $tds = $(this).find('td');
 
            var project = $tds.eq(0).find('input').val();
            var hours = $tds.eq(1).find('input').val();
            
            if (project && hours) {
              hoursData.push({
                name: project,
                hours: hours
              });
            }
        }); 

        $.ajax({
            type: 'PUT',
            url: '/api/hours/me',
            data: {
              hours: hoursData
            },

            success: function(data, status) {
              window.location.href = '/dashboard';
            }
        });

        event.preventDefault();
    });
  
  /**
   * Functions for Dashboard
   */

});