import { SearchBar } from "@/components";
import { useState } from "react";
import { useAtom } from "jotai";
import { cityNameAtom } from "@/stores";

function Header() {
    const [cityName, setcityName] = useAtom(cityNameAtom);
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setInputValue("");
            setcityName(inputValue);
            console.log(cityName);
        }
    };

    return (
        <header className="w-full h-20 flex items-center p-6 gap-6">
            <div className="w-1/2 flex items-center justify-start gap-6 ">
                {/* 로고 영역 */}
                <div className="h-full flex items-center justify-center gap-2">
                    {/* 아이콘 */}
                    <img
                        src="src/assets/icons/1030n.svg"
                        alt="logo"
                        className="h-10"
                    />
                    {/* 폰트로고 */}
                    <h3 className="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight">
                        Weather.io
                    </h3>
                </div>
                {/* 검색창 영역 */}
                <SearchBar
                    placeholder="검색할 지역 이름을 영어로 입력하세요."
                    className="flex-1"
                    onInput={handleChange}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </header>
    );
}

export { Header };
