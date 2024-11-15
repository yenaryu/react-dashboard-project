import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
    useKakaoLoaderOrigin({
        appkey: "fd5f52d797d60e832ca121e1896bd383",
        libraries: ["clusterer", "drawing", "services"],
    });
}
