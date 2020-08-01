const store = require('./store')

window.gameOver = false

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else { store.player = 'X' }
}

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Failed to sign up!')
}

const signInSuccess = function (response) {
  $('#authenticatedRoute').show()
  $('#unauthenticatedRoute').hide()
  $('#message').text('Sign in successful!')
  $('form').trigger('reset')
  store.user = response.user
}
const signInFailure = function () {
  $('#message').text('Sign in unsuccessful!')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Change password failed.')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out.')
  $('form').trigger('reset')
  $('#unauthenticatedRoute').show()
  $('#authenticatedRoute').hide()
  $('#gameBoard').hide()
  delete store.user
}
const signOutFailure = function () {
  $('#message').text('Failed to sign out.')
}

const createGameSuccess = function (response) {
  store.game = response.game._id
  store.plays = response.game.cells
  store.player = 'X'
  $('#message').text(`Game created successfully, ${store.player} goes first.`)
  $('#gameBoard').show()
  for (let i = 0; i < store.plays.length; i++) {
    $(`#${i}`).text(store.plays[i])
  }
  // $('#0').text(store.plays[0])
  // $(`#0`).text('X')
}
const createGameFailure = function () {
  $('#message').text('Failed to create a game.')
}

const pickSquareSuccess = function (response, winner) {
  store.game = response.game._id
  store.plays = response.game.cells
  $('#message').text(`Great play, ${store.player} !`)
  for (let i = 0; i < store.plays.length; i++) {
    $(`#${i}`).text(store.plays[i])
    switchPlayer()
  }
  if (response.game.cells[0] !== '' && response.game.cells[0] === response.game.cells[1] && response.game.cells[0] === response.game.cells[2]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[0] + ' wins!'))
  } else if (response.game.cells[3] !== '' && response.game.cells[3] === response.game.cells[4] && response.game.cells[3] === response.game.cells[5]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[3] + ' wins!'))
  } else if (response.game.cells[6] !== '' && response.game.cells[6] === response.game.cells[7] && response.game.cells[6] === response.game.cells[8]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[6] + ' wins!'))
  } else if (response.game.cells[0] !== '' && response.game.cells[0] === response.game.cells[3] && response.game.cells[0] === response.game.cells[6]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[0] + ' wins!'))
  } else if (response.game.cells[1] !== '' && response.game.cells[1] === response.game.cells[4] && response.game.cells[1] === response.game.cells[7]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[1] + ' wins!'))
  } else if (response.game.cells[2] !== '' && response.game.cells[2] === response.game.cells[5] && response.game.cells[2] === response.game.cells[8]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[2] + ' wins!'))
  } else if (response.game.cells[0] !== '' && response.game.cells[0] === response.game.cells[4] && response.game.cells[0] === response.game.cells[8]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[0] + ' wins!'))
  } else if (response.game.cells[2] !== '' && response.game.cells[2] === response.game.cells[4] && response.game.cells[2] === response.game.cells[6]) {
    window.gameOver = true;
    ($('#message').text(response.game.cells[2] + ' wins!'))
  } else if (response.game.cells.every(val => val)) {
    window.gameOver = true;
    ($('#message').text('Its a draw!'))
  }
}
const pickSquareFailure = function () {
  $('#message').text('Failed to make a move!')
}

const getGamesSuccess = function (response) {
  const getGames = response.games.length
  $('#message').text('Games played ' + getGames)
}

const getGamesFailure = function () {
  $('#message').text('Failed to get games')
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
  pickSquareSuccess,
  pickSquareFailure,
  getGamesSuccess,
  getGamesFailure
}
