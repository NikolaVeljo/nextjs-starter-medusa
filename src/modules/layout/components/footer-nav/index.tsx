import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Image from "next/image"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Felix Vita</a>
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Social Networks</span>
            <ul className="grid grid-cols-2 gap-y-2">
              <li>
                <Link href="/">
                  <a>
                  <Image
                    src="/images/Facebook_logo.png"
                    width={30}
                    height={30}
                    loading="eager"
                    priority={true}
                    quality={100}
                    objectFit="scale-down"
                    alt="Logo"
                    draggable="false"
                  />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                  <Image
                    src="/images/Instagram_icon.png.webp"
                    width={30}
                    height={30}
                    loading="eager"
                    priority={true}
                    quality={100}
                    objectFit="scale-down"
                    alt="Logo"
                    draggable="false"
                  />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 Felix Vita
        </span>
      </div>
    </div>
  )
}

export default FooterNav
