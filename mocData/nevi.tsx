import Link from 'next/link';

const NaviItems = [
  {
    key: '1',
    label: (
      <Link rel="네이버" href="https://www.naver.com">
        네이버
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link rel="다음" href="https://www.daum.net">
        다음
      </Link>
    ),
  },
];

const SideNaviItems = [
  {
    key: 'solution',
    label: '솔루션',
    children: (
      <>
        {NaviItems.map(dt => {
          return (
            <div key={dt.key} className="text-lg">
              {dt.label}
            </div>
          );
        })}
      </>
    ),
  },
];

const NavCategory = [
  {key: 1, value: '쎈텀유학'},
  {key: 2, value: '필리핀 어학연수'},
  {key: 3, value: '학원 정보'},
  {key: 4, value: '프로모션'},
  {key: 5, value: '상담 문의'},
  {key: 6, value: '게시판'},
];

export {NaviItems, SideNaviItems, NavCategory};
