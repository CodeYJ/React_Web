/* eslint-disable */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //#region  스크롤 이벤트

  // 스크롤 값 초기화
  let [position, setPosition] = useState(0);

  // 현재 윈도우의 스크롤 값 할당
  function onScroll() {
    setPosition(window.scrollY);
  }

  // 스크롤 시점에 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll); // 메모리 누수 방지
    };
  }, []);
  //#endregion

  console.log(position);
  // body 영역
  return (
    <div className="App">
      <div className='startPage'>
        <div style={
          {
            transform: `translateX(${-position}px)`
          }
        }
        >
          FRONTEND DEVELOPER<br /></div>
        <div style={
          {
            transform: `translateX(${position}px)`
          }
        }
        >
          HAN YEONG JUN</div>
      </div>

      <div style={{ height: '500px' }} />

      <div className='aboutMe' style={
        {
          opacity: (position - 400) / 700
        }
      }
      >
        <div className='aboutMeArea'>

          <span className='aboutMeID' />
          <span className='aboutMeIDTitle'>
            <h2>"<span className='gradient-text'>배움의 즐거움</span>을 아는 개발자,<br />한영준입니다."</h2></span>

          <div className='aboutMeText'>
            <p><span className='gradient-text'>Frontend</span>에 대한 관심이 깊은 <span className='gradient-text'>주니어 개발자</span>입니다.<br />
              처음 회사에 입사하여 여러 가지 일을 하며 느낀 것은, <span className='gradient-text'>내가 원하는 일</span>만 할 수 있는 것이 아니라는 것입니다.<br />
              맡은 업무별로 사용하게 되는 언어가 다르고, 매번 새로운 개발 플랫폼이나 프로그램을 사용하게 되었습니다.<br />
              이와 같은 경험을 통해 <span className='gradient-text'>분야를 가리지 않고</span> 여러가지 개발에 참여하며 적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다.<br />
              <br />
              <hr />
              <span className='gradient-text' style={
                {
                  fontSize: "25px"
                }
              }>"기업이 원하는 요소를 갖춘 사람이 되자!"</span><br />
              항상 되새기고 또 되새기는 문장입니다.<br />
              누구와 비교하여도 뒤지지 않을 저의 큰 장점 중 하나입니다.<br />
              항상 위의 문장을 마음에 품고 업무를 처리하면 <span className='gradient-text'>기업의 성장</span> 또한 이루어낼 수 있지만, <span className='gradient-text'>자신의 성장</span>에도 많은 도움을 주는 문장이기 때문에 제게는 큰 자극제가 되어 주었습니다.<br />
              앞으로도 부단히 노력하여 나 자신에게 계속해서 <span className='gradient-text'>성장해 나갈 기회</span>를 만들어주고자 합니다.
            </p></div>
        </div>

      </div>

      <div style={{ height: '100px' }} />

      <span className='skill'>Skill.</span>
      <div className='skillList'>
        <div className='skillItem'>React</div>
        <div className='skillItem'>JavaScript</div>
        <div className='skillItem'>HTML5</div>
        <div className='skillItem'>CSS</div>
        <div className='skillItem'>JQuery</div>
        <div className='skillItem'>WPF</div>
        <div className='skillItem'>WinForm</div>
        <div className='skillItem'>Unity</div>
        <div className='skillItem'>Visual Studio Code</div>
        <div className='skillItem'>Visual Studio</div>
      </div>

      <div style={{ height: '100px' }} />

      <div className='activity'>
        <div className='activityTitle'>
          <p>School Activity.</p>
        </div>
        <div className='activityList'>
          <b style={
            {
              opacity: (position - 1600) / 400
            }
          }> 인제대학교 NetIn 학술 동아리 부원 활동
            <span style={{
              fontSize: "17px",
              marginLeft: "15px"
            }}>2017.03.02 ~ 2019.03.01</span>
          </b>
          <hr />
          <b style={
            {
              opacity: (position - 1800) / 400
            }
          }>
            인제대학교 전자IT기계자동차공학부 학생회
            <span style={{
              fontSize: "17px",
              marginLeft: "15px"
            }}>2018.03.01 ~ 2019.03.01</span>
          </b>
          <hr />
          <b style={
            {
              opacity: (position - 1950) / 400
            }
          }>
            계절학기 Python 프로그래밍 기초 교육 특강
            <span style={{
              fontSize: "17px",
              marginLeft: "15px"
            }}>2021.07.14 ~ 2021.07.28</span>
          </b>
          <hr />
        </div>
        <div className='activityTitle'>
          <p>School Experience.</p>
        </div>
        <div className='activityList'>
          <b style={
            {
              opacity: (position - 2050) / 400
            }
          }>
            임베디드 시스템 무인 화분 돌봄이 "키움" 개발
            <span style={{
              fontSize: "17px",
              marginLeft: "15px"
            }}>2021.09.07~2021.11.30</span>
          </b>
          <hr />
          <b style={
            {
              opacity: (position - 2150) / 400
            }
          }>
            Unity 3D"교내 AR Navigation" 제작
            <span style={{
              fontSize: "17px",
              marginLeft: "15px"
            }}>2022.03.01~2022.06.20</span>
          </b>
          <div style={{ height: '50px' }} />
        </div>
      </div>

      <div style={{ height: '100px' }} />

      <span className='project'>Projects.</span>

      <div style={{ height: '50px' }} />

      <div className='projectList'>

        <div className='projectItem'>

          <div className='projectInfoLeft' style={
            {
              transform: `translateX(${(position - 2900) / 10}px)`,
              opacity: (position - 2600) / 400
            }
          }>
            <p>
              <span className='projectTitleLeft'>Unity WebRTC를 이용한<br />실시간 VR 화상전화 솔루션</span>
              <br />
              <br />
              Unity WebRTC를 이용한 실시간 VR 화상전화 솔루션 서비스의 모바일(Android) 버전 개발 책임자
              <br />
              구 버전의 라이브러리를 최신 버전의 라이브러리로 변경하며 발생한 오류 및 코드 최적화 경험
              <br />
              기존에 진행하던 프로그램의 버그 수정 및 신규 기능 추가를 통한 프로젝트 유지 보수 경험
              <br />
            </p>
            <span className='projecttool'>C#</span>
            <span className='projecttool'>WebRTC</span>
            <span className='projecttool'>Android</span>
            <span className='projecttool'>Visual Studio</span>
            <span className='projecttool'>Unity</span>
          </div>
        </div>

        <div className='projectItem'>

          <div className='projectInfoRight' style={
            {
              transform: `translateX(${-(position - 2900) / 10}px)`,
              opacity: (position - 2600) / 400
            }
          }>
            <p>
              <span className='projectTitleRight'>실무자 교육용 웹 프로그램,<br />반응형 웹페이지 제작</span>
              <br />
              <br />
              Java Script, HTML5, CSS3를 이용한 반응형 웹 페이지 제작 책임자
              <br />
              Three.js 라이브러리를 이용하여 3D모델링을 포커싱하거나, 움직이고 깜빡이는 등 3D 모델에 적용 가능한 웹기능 개발
              <br />
              고가의 중장비나 위험한 실습 활동을 3D 시뮬레이션으로 교육하는 웹 프로그램 제작
              <br />
            </p>
            <span className='projecttool'>JavaScript</span>
            <span className='projecttool'>HTML5</span>
            <span className='projecttool'>CSS</span>
            <span className='projecttool'>JQuery</span>
            <span className='projecttool'>Web</span>
            <span className='projecttool'>Visual Studio Code</span>
          </div>
        </div>

        <div className='projectItem'>

          <div className='projectInfoLeft' style={
            {
              transform: `translateX(${(position - 2900) / 10}px)`,
              opacity: (position - 2600) / 400
            }
          }>
            <p>
              <span className='projectTitleLeft'>국방용 자료 수집 장치 공동 책임</span>
              <br />
              <br />
              Visual Studio Code, C# Winform을 이용한 국방용 자료 수집 장치 개발 공동 책임자
              <br />
              기존의 버그 수정과 신규 기능 추가 및 유지 보수
              <br />
            </p>
            <span className='projecttool'>C#</span>
            <span className='projecttool'>WinForm</span>
            <span className='projecttool'>Openssl</span>
            <span className='projecttool'>FFmpeg</span>
            <span className='projecttool'>Visual Studio Code</span>
          </div>
        </div>

        <div className='projectItem'>

          <div className='projectInfoRight' style={
            {
              transform: `translateX(${-(position - 2900) / 10}px)`,
              opacity: (position - 2600) / 400
            }
          }>
            <p>
              <span className='projectTitleRight'>국방용 소프트웨어 통제 장치 개발</span>
              <br />
              <br />
              Visual Studio Cdde, C# WPF를 이용한 국방용 장비 소프트웨어 통제 장치 개발 공동 책임자
              <br />
              프론트엔드 UI/ UX 설계 및 프로그램 동작 기능 구현
              <br />
            </p>
            <span className='projecttool'>C#</span>
            <span className='projecttool'>WPF</span>
            <span className='projecttool'>Visual Studio Code</span>
          </div>
        </div>
      </div>
      <span className='Conclusion'>Designed & Developed By HanYeongJun</span>
    </div>
  );
}

export default App;
