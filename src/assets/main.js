$(function() {
  $(document).ready(function(){
    $.ajax({
      url: 'https://www.codeschool.com/users/rombo84fx.json',
      dataType: 'jsonp',
      success: function(response){
          var completedCourses = $.map(response.courses.completed, function(course) {
            var completedCourse = $('<div class="course"></div>');
            var courseTitle = $('<h3>' + course.title + '</h3>');
            var courseImage = $('<img src="' + course.badge + '"></img>');
            var courseButton = $('<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>');
            completedCourse.html(courseTitle.append(courseImage).append(courseButton));
            return completedCourse;
          });
          $('#badges').html(completedCourses);
      }
    });
  });
});
