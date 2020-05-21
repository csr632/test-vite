import React from "react";
import "./App.css";

import { Button, DatePicker } from "@alicloud/console-components";
import AppLayout from "@alicloud/console-components-app-layout";
import Page from "@alicloud/console-components-page";
import ConsoleMenu from "@alicloud/console-components-console-menu";
import "@alicloud/console-components/dist/wind.css";
import moment from "moment";
console.log(moment);

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

const { Breadcrumb } = Page;
const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Blog</Breadcrumb.Item>
    <Breadcrumb.Item>Name It, and They Will Come</Breadcrumb.Item>
  </Breadcrumb>
);

function App() {
  return (
    <div className="App">
      <AppLayout nav={<ConsoleMenu items={menuItems} header="页面一级导航" />}>
        <Page>
          <Page.Header title="页面内容" breadcrumb={breadcrumb}></Page.Header>
          <Page.Content>
            <div>
              <Button type="primary">使用Button</Button>
            </div>
            <div>：：：</div>
          </Page.Content>
        </Page>
      </AppLayout>
    </div>
  );
}

console.log("：");

export default App;
