const store = require('./store')

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else { store.player = 'X' }
}

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Failed to sign up!')
}

const signInSuccess = function (response) {
  $('#message').text('Sign in successful!')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const signInFailure = function () {
  $('#message').text('Sign in unsuccessful!')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
}
const changePasswordFailure = function () {
  $('#message').text('Change password failed.')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out.')
}
const signOutFailure = function () {
  $('#message').text('Failed to sign out.')
}

const createGameSuccess = function (response) {
  store.game = response.game._id
  store.plays = response.game.cells
  store.player = 'X'
  console.log('this is store after game creation ', store)
  $('#message').text(`Game created successfully, ${store.player} goes first.`)
  for (let i = 0; i < store.plays.length; i++) {
    $(`#${i}`).text(store.plays[i])
  }
  // $('#0').text(store.plays[0])
  // $(`#0`).text('X')
}

const createGameFailure = function () {
  console.log('Failed to create game')
}

const pickSquareSuccess = function (response) {
  store.game = response.game._id
  store.plays = response.game.cells
  $('#message').text(`Great play, ${store.player} !`)
  for (let i = 0; i < store.plays.length; i++) {
    $(`#${i}`).text(store.plays[i])
  }
  switchPlayer()
}

const pickSquareFailure = function () {
  $('#message').text('Failed to make a move!')
}

const getGamesSuccess = function (response) {
  $('#message').text(`You have played ${response.games.length}`)
}
const getGamesFailure = function () {
  $('#message').text('Failed to get games.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure,
  pickSquareSuccess,
  pickSquareFailure
}