import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
  return (
<nav className="navbar-default navbar-static-side" role="navigation">
  <div className="sidebar-collapse">
    <ul className="nav metismenu" id="side-menu">
      <li className="nav-header">
        <div className="dropdown profile-element"> <span>
          <img alt="profile_small" className="img-circle" src="img/profile_small.jpg" />
        </span>
        <a data-toggle="dropdown" className="dropdown-toggle" href="/#">
          <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
          </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
          <ul className="dropdown-menu animated fadeInRight m-t-xs">
            <li><Link to={'profile'}>Profile</Link></li>
            <li><a href="/#contacts">Contacts</a></li>
            <li><a href="/#mailbox">Mailbox</a></li>
            <li className="divider"></li>
            <li><a href="/#login">Logout</a></li>
          </ul>
        </div>
        <div className="logo-element">
          IN+
        </div>
      </li>
      <li className="active">
        <Link to={'/dashboard'}><i className="fa fa-dashboard"></i> <span className="nav-label">Dashboard</span></Link>
      </li>
      <li>
        <Link to={'/agama'}><i className="fa fa-dashboard"></i> <span className="nav-label">Agama</span></Link>
      </li>
      <li>
        <Link to={'/profile'}><i className="fa fa-dashboard"></i> <span className="nav-label">Profile</span></Link>
      </li>
      <li>
        <a href="/#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Graphs</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#graph_flot">Flot Charts</a></li>
          <li><a href="/#graph_morris">Morris.js Charts</a></li>
          <li><a href="/#graph_rickshaw">Rickshaw Charts</a></li>
          <li><a href="/#graph_chartjs">Chart.js</a></li>
          <li><a href="/#graph_chartist">Chartist</a></li>
          <li><a href="/#c3">c3 charts</a></li>
          <li><a href="/#graph_peity">Peity Charts</a></li>
          <li><a href="/#graph_sparkline">Sparkline Charts</a></li>
        </ul>
      </li>
      <li>
        <a href="/#mailbox"><i className="fa fa-envelope"></i> <span className="nav-label">Mailbox </span><span className="label label-warning pull-right">16/24</span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#mailbox">Inbox</a></li>
          <li><a href="/#mail_detail">Email view</a></li>
          <li><a href="/#mail_compose">Compose email</a></li>
          <li><a href="/#email_template">Email templates</a></li>
        </ul>
      </li>
      <li>
        <a href="/#metrics"><i className="fa fa-pie-chart"></i> <span className="nav-label">Metrics</span>  </a>
      </li>
      <li>
        <a href="/#widgets"><i className="fa fa-flask"></i> <span className="nav-label">Widgets</span></a>
      </li>
      <li>
        <a href="/#"><i className="fa fa-edit"></i> <span className="nav-label">Forms</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#form_basic">Basic form</a></li>
          <li><a href="/#form_advanced">Advanced Plugins</a></li>
          <li><a href="/#form_wizard">Wizard</a></li>
          <li><a href="/#form_file_upload">File Upload</a></li>
          <li><a href="/#form_editors">Text Editor</a></li>
          <li><a href="/#form_autocomplete">Autocomplete</a></li>
          <li><a href="/#form_markdown">Markdown</a></li>
        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-desktop"></i> <span className="nav-label">App Views</span>  <span className="pull-right label label-primary">SPECIAL</span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#contacts">Contacts</a></li>
          <li><a href="/#profile">Profile</a></li>
          <li><a href="/#profile_2">Profile v.2</a></li>
          <li><a href="/#contacts_2">Contacts v.2</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#project_detail">Project detail</a></li>
          <li><a href="/#activity_stream">Activity stream</a></li>
          <li><a href="/#teams_board">Teams board</a></li>
          <li><a href="/#social_feed">Social feed</a></li>
          <li><a href="/#clients">Clients</a></li>
          <li><a href="/#full_height">Outlook view</a></li>
          <li><a href="/#vote_list">Vote list</a></li>
          <li><a href="/#file_manager">File manager</a></li>
          <li><a href="/#calendar">Calendar</a></li>
          <li><a href="/#issue_tracker">Issue tracker</a></li>
          <li><a href="/#blog">Blog</a></li>
          <li><a href="/#article">Article</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#timeline">Timeline</a></li>
          <li><a href="/#pin_board">Pin board</a></li>
        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-files-o"></i> <span className="nav-label">Other Pages</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#search_results">Search results</a></li>
          <li><a href="/#lockscreen">Lockscreen</a></li>
          <li><a href="/#invoice">Invoice</a></li>
          <li><a href="/#login">Login</a></li>
          <li><a href="/#login_two_columns">Login v.2</a></li>
          <li><a href="/#forgot_password">Forget password</a></li>
          <li><a href="/#register">Register</a></li>
          <li><a href="/#404">404 Page</a></li>
          <li><a href="/#500">500 Page</a></li>
          <li><a href="/#empty_page">Empty page</a></li>
        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-globe"></i> <span className="nav-label">Miscellaneous</span><span className="label label-info pull-right">NEW</span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#toastr_notifications">Notification</a></li>
          <li><a href="/#nestable_list">Nestable list</a></li>
          <li><a href="/#agile_board">Agile board</a></li>
          <li><a href="/#timeline_2">Timeline v.2</a></li>
          <li><a href="/#diff">Diff</a></li>
          <li><a href="/#pdf_viewer">PDF viewer</a></li>
          <li><a href="/#i18support">i18 support</a></li>
          <li><a href="/#sweetalert">Sweet alert</a></li>
          <li><a href="/#idle_timer">Idle timer</a></li>
          <li><a href="/#truncate">Truncate</a></li>
          <li><a href="/#password_meter">Password meter</a></li>
          <li><a href="/#spinners">Spinners</a></li>
          <li><a href="/#spinners_usage">Spinners usage</a></li>
          <li><a href="/#tinycon">Live favicon</a></li>
          <li><a href="/#google_maps">Google maps</a></li>
          <li><a href="/#datamaps">Datamaps</a></li>
          <li><a href="/#social_buttons">Social buttons</a></li>
          <li><a href="/#code_editor">Code editor</a></li>
          <li><a href="/#modal_window">Modal window</a></li>
          <li><a href="/#clipboard">Clipboard</a></li>
          <li><a href="/#text_spinners">Text spinners</a></li>
          <li><a href="/#forum_main">Forum view</a></li>
          <li><a href="/#validation">Validation</a></li>
          <li><a href="/#tree_view">Tree view</a></li>
          <li><a href="/#loading_buttons">Loading buttons</a></li>
          <li><a href="/#chat_view">Chat view</a></li>
          <li><a href="/#masonry">Masonry</a></li>
          <li><a href="/#tour">Tour</a></li>
        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-flask"></i> <span className="nav-label">UI Elements</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#typography">Typography</a></li>
          <li><a href="/#icons">Icons</a></li>
          <li><a href="/#draggable_panels">Draggable Panels</a></li> <li><a href="/#resizeable_panels">Resizeable Panels</a></li>
          <li><a href="/#buttons">Buttons</a></li>
          <li><a href="/#video">Video</a></li>
          <li><a href="/#tabs_panels">Panels</a></li>
          <li><a href="/#tabs">Tabs</a></li>
          <li><a href="/#notifications">Notifications & Tooltips</a></li>
          <li><a href="/#helper_classes">Helper css classes</a></li>
          <li><a href="/#badges_labels">Badges, Labels, Progress</a></li>
        </ul>
      </li>

      <li>
        <a href="/#grid_options"><i className="fa fa-laptop"></i> <span className="nav-label">Grid options</span></a>
      </li>
      <li>
        <a href="/#"><i className="fa fa-table"></i> <span className="nav-label">Tables</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#table_basic">Static Tables</a></li>
          <li><a href="/#table_data_tables">Data Tables</a></li>
          <li><a href="/#table_foo_table">Foo Tables</a></li>
          <li><a href="/#jq_grid">jqGrid</a></li>
        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-shopping-cart"></i> <span className="nav-label">E-commerce</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#ecommerce_products_grid">Products grid</a></li>
          <li><a href="/#ecommerce_product_list">Products list</a></li>
          <li><a href="/#ecommerce_product">Product edit</a></li>
          <li><a href="/#ecommerce_product_detail">Product detail</a></li>
          <li><a href="ecommerce-/#cart">Cart</a></li>
          <li><a href="ecommerce-/#orders">Orders</a></li>
          <li><a href="/#ecommerce_payments">Credit Card form</a></li>
        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-picture-o"></i> <span className="nav-label">Gallery</span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li><a href="/#basic_gallery">Lightbox Gallery</a></li>
          <li><a href="/#slick_carousel">Slick Carousel</a></li>
          <li><a href="/#carousel">Bootstrap Carousel</a></li>

        </ul>
      </li>
      <li>
        <a href="/#"><i className="fa fa-sitemap"></i> <span className="nav-label">Menu Levels </span><span className="fa arrow"></span></a>
        <ul className="nav nav-second-level collapse">
          <li>
            <a href="/#">Third Level <span className="fa arrow"></span></a>
            <ul className="nav nav-third-level">
              <li>
                <a href="/#">Third Level Item</a>
              </li>
              <li>
                <a href="/#">Third Level Item</a>
              </li>
              <li>
                <a href="/#">Third Level Item</a>
              </li>

            </ul>
          </li>
          <li><a href="/#">Second Level Item</a></li>
          <li>
            <a href="/#">Second Level Item</a></li>
            <li>
              <a href="/#">Second Level Item</a></li>
            </ul>
          </li>
          <li>
            <a href="/#css_animation"><i className="fa fa-magic"></i> <span className="nav-label">CSS Animations </span><span className="label label-info pull-right">62</span></a>
          </li>
          <li className="landing_link">
            <a target="_blank" href="/#landing"><i className="fa fa-star"></i> <span className="nav-label">Landing Page</span> <span className="label label-warning pull-right">NEW</span></a>
          </li>
          <li className="special_link">
            <a href="/#package"><i className="fa fa-database"></i> <span className="nav-label">Package</span></a>
          </li>
        </ul>

      </div>
    </nav>
);
}
}

export default Sidebar;
