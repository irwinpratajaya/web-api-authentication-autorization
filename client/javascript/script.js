// $(document).ready(function () {
//   let token = localStorage.getItem('token')
//   if (!token) {
//     window.location.href = 'http://127.0.0.1:8080/index.html'
//   } else {
//     $.ajax({
//       url: `http://localhost:3000/verify/${token}`,
//       success: function (user) {
//         if (!user.email) {
//           window.location.href = 'http://127.0.0.1:8080/index.html'
//         }
//       }
//     })
//     getData()
//   }
// })

$(document).ready(function() {
  getData()
});

$('#login-form').submit(function (e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:3000/login',
    type: 'POST',
    data: $(this).serialize(),
    success: function (user) {
      if (user.token) {
        console.log(user);
        localStorage.setItem('token', user.token)
        window.location.href = 'http://127.0.0.1:8080/home.html'
      }
    },
    error: function (error) {
      console.log(erorr)
    }
  })
})

function register () {
  $.ajax({
    url: 'http://localhost3000/',
    type: 'POST',
    data: {
      email: $('#email').val(),
      username: $('#username').val(),
      password: $('#password').val()
    },
    success: function (user) {
      if (!user) {
        console.log('user not found')
      } else {
        window.location.href = 'http://127.0.0.1:8080/index.html'
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}

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
