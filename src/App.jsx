import React from "react";
import "./App.css";

import { Button, DatePicker } from "@alicloud/console-components";
import AppLayout from "@alicloud/console-components-app-layout";
import Page from "@alicloud/console-components-page";
import ConsoleMenu from "@alicloud/console-components-console-menu";
import "@alicloud/console-components/dist/wind.css";
import moment from "moment";
console.log(moment)

const menuItems = [
  {
    key: "overview",
    label: "概览",
  },
  {
    key: "lists",
    label: "列表",
    items: [
      {
        key: "basic-list-1",
        label: "基础列表1",
      },
      {
        key: "basic-list-2",
        label: "基础列表2",
      },
    ],
  },
  {
    key: "basic-form",
    label: "基础表单",
  },
];

function App() {
  return (
    <div className="App">
      <AppLayout nav={<ConsoleMenu items={menuItems} header="页面一级导航" />}>
        <Page>
          <Page.Header>页面内容</Page.Header>
          <Page.Content>
            <div>
              <Button type="primary">使用Button</Button>
            </div>
            <div>
              使用DatePicker：
              <DatePicker></DatePicker>
            </div>
          </Page.Content>
        </Page>
      </AppLayout>
    </div>
  );
}

export default App;
