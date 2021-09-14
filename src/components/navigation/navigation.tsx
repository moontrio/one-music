import React, { useState } from 'react';
import cn from 'classnames';

// TODO: prop interface naming
interface NavigationItem {
  value: string;
  name: string;
  icon: string;
}

// TODO: navigation group
interface NavigationProps {
  selectedNav?: string;
  navigationList: NavigationItem[];
}

export default function navigation(props: NavigationProps) {
  const { selectedNav, navigationList = [] } = props;
  const [current, setCurrent] = useState(
    selectedNav || (navigationList[0] && navigationList[0].value)
  );

  const handleNavClick = (value: string) => setCurrent(value);

  return (
    <ul>
      {navigationList.map((item) => (
        <li
          key={item.value}
          className={cn('py-2 cursor-pointer text-gray-400 hover:text-yellow-600', {
            'text-yellow-600': current === item.value,
          })}
          onClick={() => handleNavClick(item.value)}
        >
          <i className={'iconfont ' + item.icon}></i>
          <span className="pl-4">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
