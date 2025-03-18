'use client';
import React from 'react';

const StudyAbroad = () => {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-lg font-bold">상담문의 주시면 빠르게 답변드리겠습니다.</span>
      <div>
        <form
          onSubmit={event => {
            event.preventDefault(); // 기본 동작 방지
            const formData = new FormData(event.currentTarget);
            alert(`선택한 값: ${formData.get('page')}`);
          }}
        >
          <label htmlFor="page">페이지 선택:</label>
          <select id="page" name="page">
            <option value="1">메인 화면</option>
            <option value="2">팝업 베너, 사이드 퀵 버튼</option>
            <option value="3">로그인</option>
            <option value="4">회원가입</option>
            <option value="5">아이디 찾기</option>
            <option value="6">비밀번호 찾기</option>
            <option value="7">센텀 유학</option>
            <option value="8">필리핀 어학연수</option>
            <option value="9">학원 정보</option>
            <option value="10">학원 상세 페이지</option>
            <option value="11">프로모션</option>
            <option value="12">프로모션 상세 페이지</option>
            <option value="13">상담 문의</option>
            <option value="14">게시판</option>
            <option value="15">게시판 상세 정보</option>
          </select>
          <button type="submit">제출</button>
        </form>
      </div>
    </div>
  );
};

export default StudyAbroad;
