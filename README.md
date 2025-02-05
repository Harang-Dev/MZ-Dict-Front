# 📖 MZ 세대 단어를 알아볼 수 있는 MZ 사전  

![프로젝트 미리보기](https://github.com/user-attachments/assets/96fb6991-611e-41ed-8613-17e12f760748)  

<br>

- **배포 URL**: [MZ 사전](https://web-mz-dict-front-m61t9knhb5c1f236.sel4.cloudtype.app/)  
- **테스트 계정**  
  - **ID**: test  
  - **PW**: 1234  

<br>

## 📌 프로젝트 소개  

- **MZ 사전**은 MZ 세대들의 신조어를 쉽게 찾아볼 수 있도록 도와주는 서비스입니다.  
- 기존 사전과 마찬가지로 단어를 검색하고 예문을 확인할 수 있습니다.  
- **북마크 기능**을 활용하여 관심 있는 단어를 저장하고 `My Word`에서 모아볼 수 있습니다.  

<br>

## 👨‍💻 개발자 소개  

<div align="center">

| **서현우** | **강태화** |
| :------: |  :------: |
| [<img src="https://avatars.githubusercontent.com/u/90229940?v=4" height=150 width=150> <br/> @Harang-Dev](https://github.com/Harang-Dev) | [<img src="https://avatars.githubusercontent.com/u/54405000?v=4" height=150 width=150> <br/> @Kooo1225](https://github.com/Kooo1225) |

</div>

<br>

## ⚙️ 개발 환경  

- **Front-end**: HTML, React, Styled-Components, React-Query, Ant Design  
- **Back-end**: Java 17, JWT, Swagger, Spring Boot, MyBatis  
- **Database**: MariaDB  
- **버전 및 이슈 관리**: GitHub, GitKraken  
- **협업 툴**: Discord, Notion  
- **서비스 배포 환경**: CloudType  
- **디자인**: [Figma](https://www.figma.com/design/4mXwyblbbQCYzIk1r3qDXU/MZ-%EC%82%AC%EC%A0%84?node-id=521-2&t=AIPcr6iFxr10dIPR-1)  

<br>

## 🚀 채택한 개발 기술  

### 🟢 React & Styled-Components  

- **React**  
  - 컴포넌트 단위로 개발하여 유지보수가 용이합니다.  
  - 유저 배너, 상단/하단 배너 등 **중복되는 UI 요소를 컴포넌트화**하여 코드의 재사용성을 높였습니다.  

- **Styled-Components**  
  - `props`를 이용한 **조건부 스타일링**을 적용하여 다양한 스타일을 동적으로 설정할 수 있었습니다.  
  - 빌드 시 고유한 클래스명이 자동으로 부여되어 **네이밍 컨벤션 설정 비용을 절감**할 수 있었습니다.  
  - `S.컴포넌트명` 네이밍 컨벤션을 활용하여 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.  

### 🔵 React-Query  

- 상태 관리 방식  
  - **최상위 컴포넌트에서 props를 내려주는 방식**은 불필요한 props 전달을 유발하기 때문에,  
    필요한 컴포넌트 내부에서만 상태를 사용하도록 React-Query를 적용했습니다.  

- **React-Query를 선택한 이유**  
  - `useState`나 `Redux`를 활용한 상태 관리 경험이 있었기에, **새로운 상태 관리 라이브러리를 적용**해 보고 싶었습니다.  
  - **Token 관리**에서 Redux보다 React-Query가 **훨씬 효율적**하다고 판단했습니다.  
  - API 호출 시 **자동 캐싱 및 동기화 기능**이 있어, 다양한 상태 관리를 쉽게 할 수 있었습니다.  

- **로그인 및 프로필 설정**  
  - 로그인 및 최초 프로필 설정 시, **사용자 토큰을 로컬 스토리지에 저장**하여 활용했습니다.  

<br>

## 📌 역할 분담  

### 🟠 **서현우 (@Harang-Dev)**  

- **UI 개발**  
  - 모든 페이지 UI 구현  

- **기능 개발**  
  - 단어 검색, 전체 단어 조회, 회원가입, 로그인, 검색 결과 필터링  
  - 내 단어(My Word) 기능 및 기타 핵심 기능 구현  

<br>

### 🔵 **강태화 (@Kooo1225)**  

- **API 개발**  
  - RESTful API 작성  
  - **JWT 인증 및 보안 기능 구현**  

<br>

## 📅 개발 기간 및 작업 관리  

### 🕒 개발 기간  

- **전체 개발 기간**: 2025-01-04 ~ 2025-01-14  
- **UI 구현**: 2025-01-04 ~ 2025-01-07  
- **기능 구현**: 2025-01-08 ~ 2025-01-14  

### 🛠 작업 관리  

- GitHub 및 GitKraken을 활용하여 **버전 관리 및 협업**을 진행했습니다.  
- 매일 **Discord 회의**를 통해 작업 순서를 정하고, Notion에 회의 내용을 기록하여 프로젝트를 체계적으로 관리했습니다.  

<br>

## 🎯 개선 목표  

- **추가 기능 개발**  
  - 댓글 기능 추가  
  - 새로운 단어 추가 요청 기능 구현  
  - 요청된 단어를 승인할 수 있는 **관리자 페이지** 개발  

