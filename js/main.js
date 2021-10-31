/*
    모든 애니메이션의 정보를 배열에 담아 둔다.
*/

(() => {
    // ※ 전역을 오염시키지 않으려는 의도로 IIFE를 사용한다.
    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 위쪽에 있는 스크롤 섹션들의 높잇값의 합
    let currentScene = 0; // 현재 활성화된 (눈 앞에 보이는) 씬(scroll-section)

    const sceneInfo = [
        // 스크롤 섹션별 객체를 만듦.
        {
            // 0
            type: 'sticky',
            // 디바이스마다 크기가 다르므로 상대적인 크기를 정의하기 위한 배수를 기재한다.
            heightNum: 5, // 브라우저 높이의 5배수로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),
            },
        },
        {
            // 1
            type: 'normal',
            // 디바이스마다 크기가 다르므로 상대적인 크기를 정의하기 위한 배수를 기재한다.
            heightNum: 5, // 브라우저 높이의 5배수로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1'),
            },
        },
        {
            // 2
            type: 'sticky',
            // 디바이스마다 크기가 다르므로 상대적인 크기를 정의하기 위한 배수를 기재한다.
            heightNum: 5, // 브라우저 높이의 5배수로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2'),
            },
        },
        {
            // 3
            type: 'sticky',
            // 디바이스마다 크기가 다르므로 상대적인 크기를 정의하기 위한 배수를 기재한다.
            heightNum: 5, // 브라우저 높이의 5배수로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3'),
            },
        },
    ];

    function setLayout() {
        // STEP1. 각 스크롤 섹션의 높이 설정하기
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.pageYOffset;

        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            // 스크롤이 다음의 장면으로 내려갈 때
            currentScene++;
        }

        if (yOffset < prevScrollHeight) {
            // 스크롤이 이전 장면으로 올라갈 때
            if (currentScene === 0) return; // 일부 브라우저에서 바운스 효과를 사용할 때 스크롤이 음수가 될 수 있음.
            currentScene--;
        }

        document.body.setAttribute('id', `show-scene-${currentScene}`);
        console.log(yOffset, currentScene);
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });
    /*
        DOMContentLoaded: DOM의 구성 작업이 완료되었을 때
        load는 웹페이지의 리소스까지 전부 로드되었을 때 
    */
    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
})();
