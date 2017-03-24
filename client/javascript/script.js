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
      email: $('#emailRegister').val(),
      password: $('#passwordRegister').val()
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
