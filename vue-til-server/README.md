# Vue TIL 애플리케이션 Node.js 서버 코드

[인프런 Vue.js 끝장내기 강좌](https://www.inflearn.com/course/vue-js-%EB%81%9D%EB%82%B4%EA%B8%B0-%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90) TIL 애플리케이션의 백엔드를 실행하기 위해 들고온 소스(일부 수정)

## 개발 환경

- [Node.js 10.16.3]

### 설치 절차

1. VSCode의 내장 터미널을 `bash`로 진행

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

2. 설치가 완료되면 터미널에서 아래 명령어로 `nvm` 명령어를 시스템 레벨에 추가

```bash
vi ~/.bashrc
```

```bash
# vi로 연 .bashrc 파일에 "i" 키를 입력하여 쓰기 모드로 진입
# 그리고 나서 아래 내용을 추가하고 ":"를 입력한 다음 "wq"를 입력하여 저장 후 종료
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. nvm으로 버전 꼭 맞출 것

## 서버 실행 절차

```bash
# Node.js를 실행하기 위해 필요한 라이브러리를 설치하는 명령어
npm i
```

- mongoose 정보 수정

- `package.json`에 정의되어 있는 실행 명령어를 입력

```bash
npm run start
```

[코드 출처](https://github.com/joshua1988/vue-til-server)
