import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Separator,
} from "@/components";
import { CalendarDays, MapPinned } from "lucide-react";
import { Weather } from "@/types";

interface Props {
    data: Weather;
}

function GetTodayWidget({ data }: Props) {
    return (
        <Card className="w-1/4 min-w-[25%] h-full">
            <CardHeader>
                <CardTitle className="text-xl">Today</CardTitle>
                <CardDescription>
                    오늘 현재 날씨를 조회하고 있습니다.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center gap-4">
                        {/* 날씨 아이콘 데이터 바인딩 */}
                        {data.current.condition.icon.includes("day") ? (
                            // 날씨 아이콘이 낮인 경우 (True)
                            <img
                                src={`src/assets/icons/${data.current.condition.code}d.svg`}
                                alt="weather-icon"
                                className="h-16 w-16"
                            />
                        ) : (
                            // 날씨 아이콘이 밤인 경우 (False)
                            <img
                                src={`src/assets/icons/${data.current.condition.code}n.svg`}
                                alt="weather-icon"
                                className="h-16 w-16"
                            />
                        )}
                        <div className="w-full flex items-start gap-1">
                            <span className="poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight">
                                {/* 온도 데이터 바인딩 */}
                                {/* Math함수로 소숫점 처리 */}
                                {Math.round(data.current.temp_c)}
                            </span>
                            <span className="text-4xl font-extrabold">
                                &#8451;
                            </span>
                        </div>
                    </div>
                    <Separator className="mt-2 mb-3" />
                    <div className="w-full flex flex-col">
                        {/* 캘린더 날짜 표시 영역 */}
                        <div className="flex items-center justify-start gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <p className="leading-6">
                                {/* 날짜 데이터 바인딩 */}
                                {/* split으로 문자열을 쪼개서 "날짜""시간", 0번째 배열인 날짜만 출력 */}
                                {data.location.localtime.split(" ")[0]}
                            </p>
                        </div>
                        {/* 위치 표시 영역 */}
                        <div className="flex items-center justify-start gap-2">
                            <MapPinned className="h-4 w-4" />
                            <p className="leading-6">
                                {/* 위치 데이터 바인딩 */}
                                {data.location.name}&thinsp;&middot;&thinsp;
                                {data.location.country}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export { GetTodayWidget };
