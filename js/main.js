/*
    모든 애니메이션의 정보를 배열에 담아 둔다.
*/

(() => {
    // ※ 전역을 오염시키지 않으려는 의도로 IIFE를 사용한다.
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
        // 각 스크롤 섹션의 높이 세팅하기
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        console.log(sceneInfo);
    }

    setLayout();

    window.addEventListener('resize', setLayout);
})();
