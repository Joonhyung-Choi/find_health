import Script from "next/script";
import styled from "styled-components";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
    });
  }, []);

  return <Map ref={mapRef}></Map>;
}

const Map = styled.div`
  z-index: 1;
  width: 100%;
  height: 900px;
`;
