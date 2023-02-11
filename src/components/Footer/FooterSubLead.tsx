import React from 'react'

interface IProps{
	children: React.ReactNode
}

export default function FooterSubLead({children}: IProps) {
  return <h4 className="sub-section-lead font-source font-semibold lg:text-[1.1775rem] lg:leading-[1.7012rem] text-[0.9856rem] leading-[2.175rem] text-primaryBlue tracking-[3%]">{children}</h4>
}