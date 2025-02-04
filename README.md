# 📖 MZ 세대 단어를 알아볼 수 있는 MZ 사전

<img width="1489" alt="스크린샷 2025-02-04 오후 2 47 36" src="https://github.com/user-attachments/assets/96fb6991-611e-41ed-8613-17e12f760748" />

- 배포 URL : [https://web-mz-dict-front-m61t9knhb5c1f236.sel4.cloudtype.app/]
- Test ID : test
- Test PW : 1234

<br>

## 프로젝트 소개

- MZ사전은 MZ 세대들의 신조어들을 알기 힘든 분들을 위한 서비스 입니다.
- 모르는 단어가 있다면, 기존의 사전과 마찬가지로 단어를 찾아보고 예문도 찾아볼 수 있습니다.
- 북마크를 통하여 MyWord에서 모아서 볼 수 있습니다.

<br>

## 팀원 구성

<div align="center">

| **서현우** | **강태화** |
| :------: |  :------: |
| [<img src="https://avatars.githubusercontent.com/u/90229940?v=4" height=150 width=150> <br/> @Harang-Dev](https://github.com/Harang-Dev) | [<img src="https://avatars.githubusercontent.com/u/54405000?v=4" height=150 width=150> <br/> @Kooo1225](https://github.com/Kooo1225) |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, styled-components, React-Query, Ant Design
- Back-end : Java17, JWT, Swagger, Spring Boot, MyBatis
- DB : Maria DB
- 버전 및 이슈관리 : Github, GitKraken
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : CloudType
- 디자인 : [Figma](https://www.figma.com/design/4mXwyblbbQCYzIk1r3qDXU/MZ-%EC%82%AC%EC%A0%84?node-id=521-2&t=AIPcr6iFxr10dIPR-1)
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
    - 컴포넌트화를 통해서 유지보수가 용이했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.
    
### React-Query

- 최상위 컴포넌트를 만들어 props로 유저 정보를 내려주는 방식의 경우 불필요한 props 전달이 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
- React-Query를 사용한 이유
  - useState, Redux 같은 상태관리 라이브러리를 다 사용해봐서, 새로운 라이브러리를 사용해보고 싶었습니다.
  - 또한 token 관리를 할때 Redux 보다 React-Query가 훨씬 유용하다고 느꼈습니다.
  - 마찬가지로 API 사용을 할때에도 여러가지 상황에 따른 상태관리가 훨씬 용이했습니다.
- 로그인과 최초 프로필 설정 시 유저 토큰을 로컬 스토리지에 저장 후 사용했습니다.

<br>

## 3. 역할 분담

### 서현우

- **UI**
    - 페이지 : 존재하는 모든 페이지
- **기능**
    - 단어 검색, 모든 단어 보기, 회원가입, 로그인, 검색 결과, 내 단어 등 모든 기능을 구현했습니다.

<br>

### 강태화

- **API**
    - RESTful api 작성
    - JWT구현
    
<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2025-01-04 ~ 2025-01-14
- UI 구현 : 2025-01-04 ~ 2025-01-07
- 기능 구현 : 2022-01-08 ~ 2022-01-14

<br>

### 작업 관리

- GitHub 와 GitKraken 를 사용하여 진행 상황을 공유했습니다.
- 매일 Discord를 활용한 회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 Notion 에 회의 내용을 기록했습니다.

<br>

## 5. 개선 목표

- 추가 기능 구현
  - 댓글 기능 구현
  - 없는 단어 추가 요청 및 요청 허가할 관리자 페이지 추가

<br>
