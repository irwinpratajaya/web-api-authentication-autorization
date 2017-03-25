$('#login-form').submit(function (e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:3000/login',
    type: 'POST',
    data: $(this).serialize(),
    success: function (token) {
      console.log(token);
      if (token) {
        // console.log(user);
        localStorage.setItem('token', token)
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
    url: 'http://localhost:3000/',
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
