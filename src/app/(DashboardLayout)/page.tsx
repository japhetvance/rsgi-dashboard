
import CardBox from '@/app/components/shared/CardBox';
import React from 'react'
import ThemeBreadcrumb from './layout/shared/breadcrumb/ThemeBreadcrumb';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Page",
  description: "This is a sample page",
};

const samplePage = () => {
  return (
    <>
      <ThemeBreadcrumb title="Sample Page" />
      <CardBox>
        <h5 className="card-title">Sample Page</h5>
        <p className="card-subtitle">This is a sample page</p>
      </CardBox>
    </>
  )
}

export default samplePage
