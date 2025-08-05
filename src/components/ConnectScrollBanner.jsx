import React from 'react'

const ConnectScrollBanner = () => {
  const contactItems = [
    '⚠️ We do NOT deal with cash.',
    '💳 All payments are accepted online via company bank accounts only.',
    '❓ For any doubts or queries, feel free to contact us:',
    '📞 Phone: +91 78430 77794',
    '✉️ Email: zakki@majesticrealties.com',
  ]

  return (
    <div className="w-full bg-yellow-400 text-black overflow-hidden py-0 font-medium">
      <div className="flex space-x-12 px-4 marquee">
        {contactItems.map((item, index) => (
          <span key={index} className="cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ConnectScrollBanner
