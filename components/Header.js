import Head from 'next/head';

export default function Header({title}) {
  return (
    <>
      <Head>
        <title>JustPay | {title}</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
    </>
  )
}