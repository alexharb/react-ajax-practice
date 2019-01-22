import $ from 'jquery'

var postGreeting = (options, callback) => {
    $.ajax({
      type: 'POST',
      url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
      data: 
      {
        name: options.name || 'Example name',
        message: options.message || 'Example message',
      },
      success: function(data) {
        console.log(data);
        return callback(data); 
      },
      error: function (data) {
        console.error('Failed to post data', data);
      }
    });
};

export default postGreeting;