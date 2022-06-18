import React , { useEffect , useState } from 'react';

const AnswerSheet = () => {
    
    const [myNum , setMyNum] = useState(null);
    const [myObj , setMyObj] = useState({});
    
    const handleMyNum = ( e ) => {
        e.preventDefault();
        if (e.typeof === "string") {
            alert("숫자를 입력하세요");
            return
        }
        setMyNum(e.target.value);
    }
    
    const double = () => {
        if (!myNum) {
            alert("값을 확인하세요");
            return
        }
        const data = myNum * 2;
        alert(data)
    }
    const myAlert = () => {
        for (let i = 0 ; i < Math.round(myNum) ; i ++) {
            alert(`${i + 1} 번째 반복입니다!`);
        }
    }
    
    const objMaker = () => {
        if (myNum === null || myNum === "") {
            alert("숫자를 입력하세요");
            return
        }
        setMyObj(( obj ) => {
            const myIndex = Object.keys(myObj).length.toString();
            return { ...obj , [ myIndex ]: myNum }
        })
    }
    
    useEffect(() => {
        if (Object.keys(myObj).length > 0) {
            alert(JSON.stringify(myObj));
        }
    } , [myObj])
    
    return (
        <main>
            <section className="flex bg-gray-300 w-full items-center justify-center flex-col pb-32">
                <div className="flex flex-col m-10">
                    <input className="border-2" type="number" placeholder="숫자를 입력하시오" onChange={handleMyNum}/>
                    <br/>
                    <button onClick={double} className="border-2 border-black rounded bg-gray-400 px-5 mb-5"> X 2 계산하기
                    </button>
                    <button onClick={myAlert} className="border-2 border-black rounded bg-gray-400 px-5 mb-5">반올림 한 숫자
                        만큼 <br/>alert 띄우기
                    </button>
                    <button onClick={objMaker} className="border-2 border-black rounded bg-gray-400 px-5 mb-5">입력된 숫자로
                        객체 만들기<br/>키값은 인덱스를 사용<br/>(배열사용금지)
                    </button>
                </div>
                <div className="bg-gray-500 p-2">
                    현재 객체:<br/>
                    <div className="px-10 w-52">
                        {JSON.stringify(myObj)}
                    </div>
                </div>
                <div className="p-10">
                    ► 기능적으로 동일하게 구현할 경우 정답처리
                </div>
            </section>
        </main>
    )
};

export default AnswerSheet;