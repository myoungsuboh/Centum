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

export {NaviItems, SideNaviItems};
