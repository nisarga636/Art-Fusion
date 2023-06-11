import { useState } from "react";
import { Tab } from "@headlessui/react";

export default function MyTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-sm justify-center">
        <Tab
          className={({ selected }) =>
            `${selected ? "bg-white text-black" : "text-gray-400"} 
             px-5 py-2 font-medium text-sm rounded-md`
          }
        >
          Tab 1
        </Tab>
        <Tab
          className={({ selected }) =>
            `${selected ? "bg-white text-black" : "text-gray-400"} 
             px-5 py-2 font-medium text-sm rounded-md`
          }
        >
          Tab 2
        </Tab>
        <Tab
          className={({ selected }) =>
            `${selected ? "bg-white text-black" : "text-gray-400"} 
             px-5 py-2 font-medium text-sm rounded-md`
          }
        >
          Tab 3
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className="bg-white rounded-xl p-3">
          <img
            src="https://th.bing.com/th/id/R.f0a2d427b7de3322abfa8c772cb1e1d8?rik=7xAZn%2bVgJvUsdw&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1545344262-82978a5099f6%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=vvaJf8sQM5oNpS8xsKJ1Dfcct1RV4KZt%2frmll0fmAQE%3d&risl=&pid=ImgRaw&r=0"
            alt="Image 1"
            style={{ marginBottom: "1rem" }}
            width="200"
            height="300"
          />
          <img
            src="https://th.bing.com/th/id/R.f0a2d427b7de3322abfa8c772cb1e1d8?rik=7xAZn%2bVgJvUsdw&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1545344262-82978a5099f6%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=vvaJf8sQM5oNpS8xsKJ1Dfcct1RV4KZt%2frmll0fmAQE%3d&risl=&pid=ImgRaw&r=0"
            alt="Image 2"
            style={{ marginBottom: "1rem" }}
            width="200"
            height="300"
          />
        </Tab.Panel>
        <Tab.Panel className="bg-white rounded-xl p-3">
          <img
            src="https://www.freeiconspng.com/thumbs/github-logo-icon/github-logo-icon-0.png"
            alt="Image 3"
            style={{ marginBottom: "1rem" }}
            width="200"
            height="300"
          />
          <img
            src="https://images.unsplash.com/photo-1503864664483-e8a499e2eb22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="Image 4"
            style={{ marginBottom: "1rem" }}
            width="200"
            height="300"
          />
        </Tab.Panel>
        <Tab.Panel className="bg-white rounded-xl p-3">
          <img
            src="https://images.unsplash.com/photo-1562170824-b547dae88b97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="Image 5"
            style={{ marginBottom: "1rem" }}
            width="200"
            height="300"
          />
          <img
            src="https://images.unsplash.com/photo-1562170824-b547dae88b97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="Image 6"
            style={{ marginBottom: "1rem" }}
            width="200"
            height="300"
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
