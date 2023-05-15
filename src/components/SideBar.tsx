import { Fragment, FC } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

type NavigationItem = {
  name: string
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar: FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800 h-screen w-64 fixed top-0 left-0 z-10">
      {({ open }) => (
        <>
          <div className="px-2 py-4">
            <h1 className="text-white text-xl font-bold">My App</h1>
          </div>
          <div className="px-2 pb-4">
            <Disclosure.Button className="flex justify-between w-full text-gray-400 hover:text-white">
              <span className="text-sm font-medium">Navigation</span>
              <ChevronDownIcon className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5')} />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2">
              <nav className="space-y-1">
                {navigation.map((item: NavigationItem) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Sidebar
