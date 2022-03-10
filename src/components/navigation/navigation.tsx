import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '@/components/icon';

// TODO: prop interface naming
export type NavigationItemValue = string
export interface NavigationItem {
  value: NavigationItemValue;
  name: string;
  icon: string;
}

// TODO: navigation group
interface NavigationProps {
  navigationList: NavigationItem[];
  clickHandle: Function;
}

// TODO: 这玩意儿叫 navigation 还是叫 menu，区别在于 navigation 可以跳转？？那和 menu 加一个 clickHandle 的区别呢
const Navigation: React.FC<NavigationProps> = ({ navigationList, clickHandle = () => {} }) => {
  const [current, setCurrent] = useState<String | null>(null);
  const location = useLocation();

  const handleNavClick = (value: NavigationItemValue) => {
    setCurrent(value);
    clickHandle(value);
    console.log(value);
  };

  useEffect(() => {
    const [, currentPath] = location?.pathname.split('/')
    const [firstNavItem] = navigationList;
    handleNavClick(currentPath || firstNavItem.value);
  }, []);

  return (
    <ul>
      {navigationList.map((item) => (
        <li
          key={item.value}
          // TODO: 这样组织 class 可读性很差，也不好维护
          className={classNames([
            'py-2 px-4 w-40 mb-1 cursor-pointer text-gray-600 rounded-lg',
            'hover:bg-gray-200'
          ], { 'bg-gray-200 text-yellow-600': current === item.value })}
          onClick={() => handleNavClick(item.value)}
        >
          <Icon icon={item.icon} />
          <span className="pl-4">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
