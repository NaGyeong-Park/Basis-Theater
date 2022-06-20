import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'
// import accounts from './accounts'

export default {
  // namespaced: true,
  state: {
    movies: [],
    movie: {},
    rate: 0,
    recommend : {}
  },

  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    ismovie: state => !_.isEmpty(state.movie),
    rate: state => state.rate,
    recommend: state => state.recommend,
  },

  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_MOVIE_VOTES: (state, votes) => (state.movie.vote_set = votes),
    SET_MY_RATE: (state, rate) => (state.rate = rate),
    SET_RECOMMEND: (state, recommend) => state.recommend = recommend,
  },

  actions: {
    async fetchRecommend({commit, getters}) {
      await axios({ 
        url: drf.movies.recommendation(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then((res) => {
        commit('SET_RECOMMEND', res.data)
        router.push({ name: 'recommendations' }).catch(err=>err);
      })
      .catch(err => console.error(err.response))
    },

    setVote({commit, getters}, rate) {
      commit('SET_MY_RATE', rate)
      return getters.rate
    },

    fetchMovies({ commit, getters }) {
      /* 게시글 목록 받아오기
      GET: movies URL (token)
        성공하면
          응답으로 받은 게시글들을 state.movies에 저장
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
    },

    fetchMovie({ commit, getters }, moviePk) {
      /* 단일 게시글 받아오기
      GET: movie URL (token)
        성공하면
          응답으로 받은 게시글들을 state.movies에 저장
        실패하면
          단순 에러일 때는
            에러 메시지 표시
          404 에러일 때는
            NotFound404 로 이동
      */
      axios({
        url: drf.movies.movie(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE', res.data)
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    
		createVote({ commit, getters }, { moviePk, rate, content }) {
      /* 댓글 생성
      POST: reviews URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.movie의 reviews 갱신
        실패하면
        에러 메시지 표시
      */
     
      axios({
        url: drf.movies.votes(moviePk),
        method: 'post',
        data: {rate, content},
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res.data)
          commit('SET_MOVIE_VOTES', res.data)
        })
        .catch(err => {
          console.error(err.response)
        })
    },

    updateVote({ commit, getters }, { moviePk, votePk, rate, content }) {
      /* 댓글 수정
      PUT: vote URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.movie의 votes 갱신
        실패하면
          에러 메시지 표시
      */

      axios({
        url: drf.movies.vote(moviePk, votePk),
        method: 'put',
        data: {rate, content},
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_VOTES', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteVote({ commit, getters }, { moviePk, votePk }) {
      /* 댓글 삭제
      사용자가 확인을 받고
        DELETE: vote URL (token)
          성공하면
            응답으로 state.movie의 votes 갱신
          실패하면
            에러 메시지 표시
      */
        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.movies.vote(moviePk, votePk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_MOVIE_VOTES', res.data)
            })
            .catch(err => console.error(err.response))
          }
        },
  },
}
