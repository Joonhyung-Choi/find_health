# find_health
2023년 2학기 졸업 프로젝트

## 주제 선정 배경
건강 관련 웹 서비스를 계획하던 중 예전 코로나에 걸렸을 때 어떤 병원을 가야할 지, 열려있는 약국이 있는지 몰라 아픈 몸을 이끌고 돌아다녔던 경험을 따올리게 되었다.</br>
때문에 유저로부터 입력받은 위치 정보를 기반으로 근처의 약국, 병원의 현황을 알 수 있다면 좋겠다고 생각하여 find_health 웹 서비스를 계획하게 되었다.

## 개발 환경 및 기술 스택
- 개발 환경 : vscode
- 기술 스택 : next.js, typescript
- 버전 관리 : git, github
- 페이지 설계 및 디자인 : figma
- 배포 : aws ec2
- 사용 API
<table>
	<tr>
		<td>사용 API 이름</td>
		<td>APi 정보 URL</td>
	</tr>
	<tr>
		<td>국립중앙의료원 전국 약국 정보 조회 서비스</td>
		<td>https://www.data.go.kr/data/15000576/openapi.do</td>
	</tr>
	<tr>
		<td>건강보험심사평가원 병원정보서비스</td>
		<td>https://www.data.go.kr/data/15001698/openapi.do#tab_layer_prcuse_exam</td>
	</tr>
	<tr>
		<td>카카오 맵</td>
		<td>https://apis.map.kakao.com/web/</td>
	</tr>
</table>
   

## 시스템 구성도
서비스 기본 구조</br>
![image](https://github.com/Joonhyung-Choi/find_health/assets/87540456/09d8f5a4-43c0-48d0-bd00-e72517fbff7a)
![image](https://github.com/Joonhyung-Choi/find_health/assets/87540456/fb6acd95-f0f7-4e03-a06b-f2c0e7a1566c)

## 구현 기술
- next.js typescript를 이용한 웹 페이지 퍼블리싱
- 약국 정보 api, 병원 정보 서비스 api를 통한 데이터 수집
- 수집한 데이터와 카카오 맵 api를 이용한 지도 서비스
- 유저가 입력한 지역 정보를 통해 근처의 약국 및 병원 데이터 표시
- 유저가 입력한 질병, 질환 부위에 따라 알맞는 병원 추천

## 구현 결과

## 기대 효과
- 약국의 운영일, 운영시간 등을 알기 쉽게 되어 영업중인 약국을 찾는 시간을 절약
- 어떤 병원이 자신의 증상에 맞는지 모르는 사람의 고민을 덜어주는 효과 기대
