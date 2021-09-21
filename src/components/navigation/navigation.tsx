import React, { useState } from 'react';
import classNames from 'classnames';
// import { isUrl, isImg } from '@/utils';
// import Icon, { IconFont } from '@/components/icon/Icon';
// import styles from './index.scss';

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

// const getIcon = (
//   icon: string | React.ReactNode,
//   iconPrefixes: string | 'icon-',
// ) => {
//   if (typeof icon === 'string' && icon !== '') {
//     if (isUrl(icon) || isImg(icon)) {
//       return <Icon />
//     }
//     if (icon.startsWith(iconPrefixes)) {
//       return <IconFont type={icon} />;
//     }
//   }
//   return icon;
// };

const Navigation = (props: NavigationProps) => {
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
          // TODO: 这样组织 class 可读性很差，也不好维护
          className={classNames('py-2 cursor-pointer text-gray-400 hover:text-yellow-600', {
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

export default Navigation;
