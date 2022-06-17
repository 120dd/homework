import React from 'react';

const Home = ( props ) => {
    return(
        <main>
            <ul className="flex flex-col justify-center items-center">
                <li className="text-lg m-10">
                    ⦿ 본 시험은 실습 시험입니다.
                </li>
                <li className="text-lg m-10">
                    1. 함수를 작성하시오
                </li>
                <li className="text-lg m-10">
                    2. 반복문을 작성하시오
                </li>
                <li className="text-lg m-10">
                    3. 메소드를 사용하여 반올림을 구현하시오
                </li>
                <li className="text-lg m-10">
                    4. 리터럴 객체를 만들고 얼러트로 출력하시오
                </li>
                <li className="text-lg m-10">
                    5. 이벤트 핸들러를 사용하시오
                </li>
                <li className="text-lg m-10">
                    ☒ 문제 출제 이유<br/>
                    각 주차 별 주요 개념을 실제로 사용할 수 있는 지<br/> 확인하기 위해 출제하였습니다
                </li>
            </ul>
        </main>
    )
};

export default Home;