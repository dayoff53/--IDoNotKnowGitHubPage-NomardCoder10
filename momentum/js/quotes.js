const quotes = [
{
    quote: "사람이 언제 죽는다고 생각하나? 사람한테 잊혀졌을떄다.",
    author: "닥터 - 히루루크",
},
{
    quote: "꿈은 도망가지 않아 도망가는 것은 언제나 나 자신이지.",
    author: "아버지 - 신형만",
},
{
    quote: "잘 들어라. 애초에 기대를 하니까 배신을 당하는 거다.",
    author: "<창고 - 트래이너>",
},
{
    quote: "걸려 넘어진 걸 돌부리의 탓으로 돌리면 뭐가 바뀌냐?",
    author: "당뇨 - 긴토키",
},
{
    quote: "호이가 계속되면 둘리인줄 알더라.",
    author: "검성 - 고길동",
},
{
    quote: "대충 흑백 사진에 글 쓰면 명언같다.",
    author: "이말년 - 침착맨",
},
{
    quote: "꽁기깅깅깅공강강꽁기깅깅꽁기깅강.",
    author: "레X락 자리 뺏은 - X지스틸",
},
{
    quote: "즐거운 것은 어째서 끝나버리는 걸까?",
    author: "SunMoon - 보노보노",
},
{
    quote: "사과할 필요는 없네. 그저 인정하고 다음에 이기면 되지. 그것이 어른의 특권이다.",
    author: "홍차 장인 - 풀 프론탈",
},
{
    quote: "손님들은 한 번 실망하면 망설이고 두 번 실망하면 발을 끊는다.",
    author: "자운 선생 - 김치달",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;