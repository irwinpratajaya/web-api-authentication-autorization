$(document).ready(function () {
  let token = localStorage.getItem('token')
  if (!token) {
    window.location.href = 'http://127.0.0.1:8080/index.html'
  } else {
    $.ajax({
      url: `http://localhost:3000/verify/${token}`,
      success: function (user) {
        if (!user.email) {
          window.location.href = 'http://127.0.0.1:8080/index.html'
        }
      }
    })
    getData()
  }
})

// $(document).ready(function() {
//   getData()
// });

function getData() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/',
    success: function(data){
      data.forEach(function(data){
      $('#user').append(`
        <tbody>
          <tr>
            <td>${data.username}</td>
            <td>${data.email}</td>
          </tr>
        </tbody>
      `)
      })
    }
  })
}

$('#logout').click(function () {
  localStorage.clear()
  window.location.href = 'http://127.0.0.1:8080/index.html'
})
