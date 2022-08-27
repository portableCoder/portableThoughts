import React, { useEffect, useState } from 'react';
import { GiCardboardBoxClosed } from 'react-icons/gi'
import Switch from './Switch'
import useTheme from './util/useTheme';
const TITLE = 'portableThoughts'
const Header = () => {
  const [theme, setTheme] = useTheme(true)
  let [showSlash, setShowSlash] = useState(true)
  const [title, setTitle] = useState({ text: "", index: 0, rev: false })
  useEffect(() => {
    const timer = setInterval(() => {
      setShowSlash((showSlash) => !showSlash)
    }, 500)
    const titleTyper = setInterval(() => {
      setTitle((title) => {
        let { text, rev, index } = { ...title }
        if (!rev) {
          text += TITLE.charAt(index)
          index++
          if (index > TITLE.length) {
            index = TITLE.length - 1
            rev = true
          }
        } else {
          text = text.slice(0, -1)
          index--
          if (index < 0) {
            index = 0
            text = ''
            rev = false
          }
        }

        return { text, rev, index }
      })
    }, 400)
    return () => {
      clearInterval(timer)
      clearInterval(titleTyper)
    }
  }, [])
  return <header className='flex justify-between w-full text-xl md:text-3xl font-bold py-1 px-3  md:py-2 md:px-6 text-black dark:text-white '>
    <div className='flex items-center justify-center gap-x-1'>
      <i className='m-auto md:my-0 hover:animate-bounce'><GiCardboardBoxClosed /></i>
      <h1 className='hover:animate-pulse flex '>{title.text}{showSlash && <p className='text-green-500'>_</p>} </h1>
    </div>
    <Switch checked={theme === "dark" ? true : false} onChange={(e) => {
      if (theme === "dark") {
        setTheme("light")
      } else {
        setTheme("dark")
      }
    }} />
  </header>;
};

export default Header;
