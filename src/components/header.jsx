import React  from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <header className="w-full border-4 bg-yellow-400 text-white">
            <h1 className="p-5 text-4xl justify-center flex items-center">창의코딩 기말고사</h1>
            <h2 className="text-center p-2"> 20163964<br/> 언어병리학과 최종선</h2>
            <div className="flex justify-around bg-white">
                <div className="py-1 text-black border-8 w-1/2 border-yellow-500 text-center">
                    <Link to={"/home"}>
                        <div className="w-full">
                            문제
                        </div>
                    </Link>
                </div>
                <div className="py-1 text-black border-8 w-1/2 border-yellow-500 text-center">
                    <Link to={"/answer"}>
                        <div className="w-full">
                            답안지
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;