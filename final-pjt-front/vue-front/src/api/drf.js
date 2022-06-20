const HOST = 'http://localhost:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const VOTES = 'votes/'
const COMMUNITIES = 'communities/'
const COMMENTS = 'comments/'
const RECOMMEND = 'recommendations/'
const FONTAWESOME_CDN = '<script src="https://kit.fontawesome.com/25a5039376.js" crossorigin="anonymous"></script>'

export default {
  FONTAWESOME_CDN,
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
  },
  movies: {
    movies: () => HOST + MOVIES,
    movie: moviePk => HOST + MOVIES + `${moviePk}/`,
    votes: moviePk => HOST + MOVIES + `${moviePk}/` + VOTES,
    vote: (moviePk, votePk) =>
      HOST + MOVIES + `${moviePk}/` + VOTES + `${votePk}/`,
    recommendation: () => HOST + MOVIES + RECOMMEND,
  },
  communities: {
    articles : () => HOST + COMMUNITIES,
    article: articlePk => HOST + COMMUNITIES + `${articlePk}/`,
    comments: articlePk => HOST + COMMUNITIES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
    HOST + COMMUNITIES + `${articlePk}/` + COMMENTS + `${commentPk}/`,

  }
}
