# 🎞근본극장 : BASIS THEATER

🏆 삼성 청년 소프트웨어 아카데미(SSAFY) 7기 1학기 종합 프로젝트 최우수상

___

# 🎈기획의도

근본극장은 [THE MOVIE DB](https://www.themoviedb.org/?language=ko)의 영화들 중 평점이 7.5를 초과하고 평가한 사람의 수가 3000명을 초과하는 신뢰가능한 영화를 추천해주는 서비스 입니다.

현대인들에게 __시간은 금🥇__이기에 여가시간에 영화를 볼 때도 시간이 아깝지 않은 영화를 보고싶어 합니다. 그래서 영화 스트리밍 서비스에서 영화를 보는 시간보다 영화를 찾는 시간이 긴 사람이 많습니다. 

근본극장은 이런 사람들의 시간을 아껴주기위해 일정 기준치 이상인 __근본__있는 영화들을 추천해주는 영화 서비스입니다.



# 🎟서비스 주요내용

1. 로그인, 로그아웃, 회원가입
2. 커뮤니티 게시글 및 댓글 CRUD
3. 메인 페이지 : 장르별 영화 추천
4. 영화 세부 페이지 : 영화 세부 정보 및 평가 기능 CRUD
5. 유저 프로필 페이지 : 영화 평가 정보를 바탕으로 제일 많이 평가한 장르와 제일 적게 평가한 장르를 알려줌
6. 영화 추천 페이지 : 제일 적게 평가한 장르의 영화 중 유저가 평가하지 않은 영화를 랜덤으로 추천해주는 알고리즘



# 🎪서비스 화면

## 메인화면

![image-20220705153928679](README%20(2).assets/image-20220705153928679.png)

- 로그인 한 유저의 header : 추천영화, 커뮤니티, 프로필, 로그아웃 
- 비로그인 유저의 header : 회원가입, 로그인

![image-20220705154028599](README%20(2).assets/image-20220705154028599.png)

- 장르별로 랜덤한 8개의 영화를 추천해줍니다.
- 유저들이 평가한 평점이 제목 밑에 나타납니다.

## 영화 세부 페이지

![image-20220705154131565](README%20(2).assets/image-20220705154131565.png)

- 영화의 제목, 평점, 장르, 줄거리를 보여줍니다.
- 평가창에서 평가 CRUD가 가능합니다.
  - 두 가지 형태로 평가를 할 수 있습니다 : 별점만 / 별점 + 한 줄 평가 
  - 평가는 한 유저 당 한 개씩 남길 수 있습니다. 여러 개의 평가는 불가합니다.
  - 다른 유저의 닉네임을 클릭하면 해당 유저의 프로필 페이지로 이동합니다.
  - 수정 : edit을 눌러 수정 / 한 줄 평가하기에 새로운 내용 재입력 후 vote
  - 삭제 : delete를 눌러 삭제 / 한 줄 평가하기에 별점을 0점으로 vote
- 평가를 하면 유저의 해당 영화 장르의 지수가 상승합니다.

## 커뮤니티 화면

![image-20220705154455677](README%20(2).assets/image-20220705154455677.png)

![image-20220705154459585](README%20(2).assets/image-20220705154459585.png)

- 게시글 CRUD가 가능합니다.
- 유저의 닉네임을 클릭하면 해당 유저의 프로필 페이지로 이동합니다.

## 커뮤니티 세부화면

![image-20220705154538221](README%20(2).assets/image-20220705154538221.png)

- 목록 버튼을 클릭하면 커뮤니티 목록으로 돌아갑니다.
- 게시글 작성자는 게시글을 update, delete가 가능합니다.
- 댓글 CRUD가 가능합니다.
  - 댓글 작성자는 본인의 댓글을 update, delete가 가능합니다.
  - 여러 번 작성이 가능합니다.
  - 댓글 작성자의 닉네임을 클릭하면 해당 유저의 프로필로 이동합니다.

## 유저 프로필 화면

![image-20220705154747070](README%20(2).assets/image-20220705154747070.png)

- 근본극장의 장르별 영화 총 갯수 대비 해당 유저가 평가한 장르의 영화 갯수를 지수로 표시하여 보여줍니다.
- 부족한 장르의 그래프 바가 빨간색으로 표시됩니다.

## 영화 추천 화면

![image-20220705154952138](README%20(2).assets/image-20220705154952138.png)

- 장르별로 상단의 소개 문구가 달라집니다.
- 해당 유저의 평가가 제일 적은 장르의 영화 중 유저가 평가하지 않은 3개의 영화를 랜덤으로 추천해줍니다.
- 영화 포스터나 제목을 클릭하면 해당 영화의 세부 페이지로 이동합니다.



# 🌍개발환경

## 🌎Frontend

- **IDE**: VSCode
- **Language**: HTML5, CSS3
- **Library**: Vuex
- **Framework**: Vue, Bootstrap

## 🌏Backend

- **IDE** :VSCode
- __Lanuage__ : Python3
- **Library**: rest framework, drf auth, chrsheaders
- **Open API**: TMDB
- **Framework**: Django

## 🚙기획 및 협업툴

- 회의록, 일정관리 : Notion
- 회의 : Webex, Discode
- 와이어프레임 : MS PowerPoint
- 코드관리 : GitLab
- ER Diagram : Draw.io
- API DOC : MS Excel



# 🗂서비스 아키텍쳐

## ER Diagram

![image-20220705160208598](README%20(2).assets/image-20220705160208598.png)

## 초기 Wireframe

![image-20220705161103442](README%20(2).assets/image-20220705161103442.png)

![image-20220705161116468](README%20(2).assets/image-20220705161116468.png)

## API Document

![image-20220705160459855](README%20(2).assets/image-20220705160459855.png)

## 폴더 구조

```
+---final-pjt
|   0519_workshop.pptx
|   README.md
|   README.pdf
|   tree.txt
|   
+---final-pjt-back
|   |   .gitignore
|   |   db.sqlite3
|   |   genres.json
|   |   manage.py
|   |   movies.json
|   |   requirements.txt
|   |   
|   +---accounts
|   |   |   admin.py
|   |   |   apps.py
|   |   |   models.py
|   |   |   serializers.py
|   |   |   tests.py
|   |   |   urls.py
|   |   |   views.py
|   |   |   __init__.py
|   |   |   
|   |   +---migrations
|   |   |   |   0001_initial.py
|   |   |   |   __init__.py
|   |   |   |   
|   |           
|   +---communities
|   |   |   admin.py
|   |   |   apps.py
|   |   |   models.py
|   |   |   serializers.py
|   |   |   tests.py
|   |   |   urls.py
|   |   |   views.py
|   |   |   __init__.py
|   |   |   
|   |   +---migrations
|   |   |   |   0001_initial.py
|   |   |   |   __init__.py
|   |           
|   +---django_backend
|   |   |   asgi.py
|   |   |   settings.py
|   |   |   urls.py
|   |   |   wsgi.py
|   |   |   __init__.py
|   |   |   
|   |           
|   +---movies
|      |   admin.py
|      |   apps.py
|      |   models.py
|      |   serializers.py
|      |   tests.py
|      |   urls.py
|      |   views.py
|      |   __init__.py
|      |   
|      +---fixtures
|      |   \---movies
|      |           jsonparser.py
|      |           
|      +---migrations
|      |   |   0001_initial.py
|      |   |   __init__.py
|      |   |   
|              
\---final-pjt-front
    |   
    \---vue-front
        |   .gitignore
        |   babel.config.js
        |   jsconfig.json
        |   package-lock.json
        |   package.json
        |   README.md
        |   vue.config.js
        |   
        +---node_modules
        |   |   .package-lock.json
        |   |   
        +---public
        |       favicon.ico
        |       index.html
        |       근본극장.png
        |       
        \---src
            |   App.vue
            |   main.js
            |   
            +---api
            |       drf.js
            |       
            +---assets
            |       404.jpg
            |       communityText.png
            |       mainImg.png
            |       근본극장.png
            |       
            +---components
            |       AccountErrorList.vue
            |       ArticleForm.vue
            |       CommentList.vue
            |       CommentListForm.vue
            |       CommentListItem.vue
            |       FooterBar.vue
            |       genreMovie.vue
            |       genreMovies.vue
            |       NavBar.vue
            |       VoteForm.vue
            |       VoteList.vue
            |       VoteListItem.vue
            |       VoteMainForm.vue
            |       
            +---router
            |       index.js
            |       
            +---store
            |   |   index.js
            |   |   
            |   \---modules
            |           accounts.js
            |           articles.js
            |           movies.js
            |           
            \---views
                    ArticleDetailView.vue
                    ArticleEditView.vue
                    ArticleListView.vue
                    ArticleNewView.vue
                    LoginView.vue
                    LogoutView.vue
                    MovieDetailView.vue
                    MovieListView.vue
                    MovieRecommendation.vue
                    NotFound404.vue
                    ProfileView.vue
                    SignupView.vue
```

## 프로젝트 일정

| **5/19**            | **5/20**                 | 5/23                     |
| ------------------- | ------------------------ | ------------------------ |
| 아이디어 회의       | API Document 작성        | Backend logic 완성       |
| 방향 설정           | ERD, Wireframe 설계      | Frontend Component  완성 |
| **5/24**            | **5/25**                 | **5/26**                 |
| Frontend logic 완성 | QA작업                   | 발표자료 제작            |
| Web Design 완성     | 버그 수정 및 디자인 수정 | README 작성              |

## 팀소개

![image-20220705160536813](README%20(2).assets/image-20220705160536813.png)



## 🙏협업 : GitLab 사용 규칙

1. 매일 아침 git pull 받아 시작
2. merge하기 전 회의하여 코드 확인 후 merge



# 💚후기💙

__박나경__ : 처음 프로젝트를 받았을 때는 1주일 안에 이 모든 것을 할 수 있을까 했지만 1학기때 배운 총 지식과 구글링을 동원하여 기본에 충실한 웹 서비스를 만들어내서 기뻤습니다! Vue로 프로젝트를 구현하며 React로 해봐도 되겠다는 생각을 했고, 추후 React로 동일한 페이지를 구현하여 Vue와 React의 장단점을 비교해 볼 예정입니다.

처음 API Docs를 만들 때 Back에서 받아오는 데이터를 팀원에게 임의로 맡겼는데, 그러다보니 원하는 데이터 형식이 나오지 않아 API Docs 수정을 많이 하게 되었습니다. 앞으로 프로젝트를 진행할 때 서로 데이터 포멧을 더 정확히 상의하여야 겠다고 느꼈습니다. 방학 때 Docker와 Jenkins를 배웠는데, 추후 배포경험도 해 볼 예정입니다.

 <br>

__이성진__ : 사실 설계를 대충 하고 시작했는데 그러다 보니 중간에 디자인, 로직, response 등을 매우 많이 수정해야 했고 예상치 못한 곳에서 버그도 많이 발생했다. 시간을 좀 투자하더라도 정밀한 설계를 하고 프로젝트를 시작해야 오히려 더 시간을 절약할 수 있을 것 같다.

특히 백엔드에서 API 서버를 구성할 때, response로 serializer를 이용하면 편하게 구성할 수 있는데 문제는 serializer를 이용할 때에는 ORM문 만으로는 안에 있는 레코드를 원하는 대로 조작하기 어렵다는 아쉬움이 있었다. 그래서 차라리 프론트엔드 개발자와 소통하여 어떤 데이터를 어떤 형태로 넘겨줄지 정확하게 정한 후, 직접 데이터베이스를 조회하여 response할 컨테이너를 만드는 것이 나을 수도 있을 것 같다. 그래서 이번 프로젝트에서는 대부분의 view 함수를 serializer를 사용하지 않고 구성하였다.

프론트엔드와 백엔드의 소통의 중요성을 깨달았다. 서로 의도한 것을 정확히 말하지 않으면, 상대방이 다르게 이해했거나 구현방법을 다르게 했을 가능성이 매우 높으므로 서로의 코드를 수시로 확인하면서 불편한 것이 있으면 그때 그때 고치는 자세가 필요할 것 같다.