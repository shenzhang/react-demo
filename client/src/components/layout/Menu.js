import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Menu as AntdMenu, Icon } from 'antd';
import { selectMenu } from './actions'
import { setInterval } from 'timers';

const SubMenu = AntdMenu.SubMenu;


class Menu extends React.Component {
  menus = [
    {
      name: '查询历史',
      icon: 'search',
      subMenus: [
        {
          name: '张三',
          url: '/customers/123'
        }
      ]
    },
    {
      name: '客户管理',
      icon: 'user',
      subMenus: [
        {
          name: '查询客户',
          url: '/customers'
        },
        {
          name: '添加客户',
          url: '/add-customer'
        }
      ]
    }
  ];

  constructor(props) {
    super(props);
    this.state = this.syncLocation(props.location.pathname.replace(/\/+$/, ''));
  }

  syncLocation = (path) => {
    let selectedKeys = [];
    let openKeys = [];

    for (let x = 0; x < this.menus.length; x++) {
      let menu = this.menus[x];
      if (menu.url && menu.url === path) {
        selectedKeys = [menu.name];
        openKeys = [];
        break;
      }

      if (menu.subMenus) {
        for (let y = 0; y < menu.subMenus.length; y++) {
          let subMenu = menu.subMenus[y];
          if (subMenu.url && subMenu.url === path) {
            selectedKeys = [subMenu.name];
            openKeys = [menu.name];
          }
        }
      }
    }

    return {
      selectedKeys,
      openKeys
    };
  }

  buildMenu = (menus) => {
    return menus.map((menu, index) => {
      const name = menu.name;
      if (menu.hasOwnProperty('subMenus')) {
        return (
          <SubMenu key={name} title={<span><Icon type={menu.icon} /><span>{name}</span></span>}>
            {this.buildMenu(menu.subMenus)}
          </SubMenu>
        )
      } else {
        return (
          <AntdMenu.Item key={name}>
            {
              menu.url ? <Link to={menu.url}>{name}</Link> : name
            }
          </AntdMenu.Item>
        )
      }
    });
  };

  render() {
    console.log('render', this.state.openKeys, this.state.selectedKeys);

    return (
      <AntdMenu theme="dark" mode="inline"
        defaultSelectedKeys={this.state.selectedKeys}
        defaultOpenKeys={this.state.openKeys}
      >
        {this.buildMenu(this.menus, this.props.history)}
      </AntdMenu>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   selectMenu: (e) => {
//     console.log(e);
//     dispatch(selectMenu(e.keyPath));
//   }
// });

// export default withRouter(connect(null, mapDispatchToProps)(Menu))
export default withRouter(Menu)