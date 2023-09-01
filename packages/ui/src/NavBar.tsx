import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="ui-relative ui-flex ui-flex-wrap ui-items-center ui-justify-between ui-px-2 ui-py-3 ui-bg-pr-base mb-3">
      <div className="ui-container ui-px-4 ui-mx-auto ui-flex ui-flex-wrap ui-items-center ui-justify-between">
        <div className="ui-w-full ui-relative ui-flex ui-justify-between lg:ui-w-auto  ui-px-4 ui-lg:static ui-lg:block lg:ui-justify-start">
          <a
            className="ui-text-small ui-font-bold ui-leading-relaxed ui-inline-block ui-mr-4 ui-py-2 ui-whitespace-nowrap ui-uppercase ui-text-n-white"
            href="/"
          >
            Great Minds
          </a>
          <button
            className="ui-cursor-pointer ui-text-xl ui-leading-none ui-px-3 ui-py-1 ui-border ui-border-solid ui-border-transparent ui-rounded ui-bg-transparent ui-block lg:ui-hidden ui-outline-none focus:ui-outline-none"
            type="button"
          >
            <span className="ui-block ui-relative ui-w-6 ui-h-px ui-rounded-sm ui-bg-white"></span>
            <span className="ui-block ui-relative ui-w-6 ui-h-px ui-rounded-sm ui-bg-white ui-mt-1"></span>
            <span className="ui-block ui-relative ui-w-6 ui-h-px ui-rounded-sm ui-bg-white ui-mt-1"></span>
          </button>
        </div>
        <div
          className="lg:ui-flex ui-flex-grow ui-items-center"
          id="example-navbar-warning"
        >
          <ul className="ui-flex ui-flex-col lg:ui-flex-row ui-list-none ui-ml-auto">
            <li className="ui-nav-item">
              <Link
                className="ui-px-3 ui-py-2 ui-flex ui-items-center ui-text-xs ui-uppercase ui-font-bold ui-leading-snug ui-text-n-white hover:ui-opacity-75"
                href="/explore"
              >
                Explorer
              </Link>
            </li>
            <li className="ui-nav-item">
              <a
                className="ui-px-3 ui-py-2 ui-flex ui-items-center ui-text-xs ui-uppercase ui-font-bold ui-leading-snug ui-text-n-white hover:ui-opacity-75"
                href="/docs"
              >
                Documents
              </a>
            </li>
            <li className="ui-nav-item">
              <a
                className="ui-px-3 ui-py-2 ui-flex ui-items-center ui-text-xs ui-uppercase ui-font-bold ui-leading-snug ui-text-n-white hover:ui-opacity-75"
                href="/student"
              >
                Student
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
