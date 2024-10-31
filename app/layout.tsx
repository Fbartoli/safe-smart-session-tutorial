import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Safe from '../public/safe.svg'
import './globals.css'

import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safe Tutorial: ERC-7579',
  description: 'Generated by create next app'
}



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>

      <body className={inter.className}>
        <DynamicContextProvider
          settings={{
            environmentId: '336e4f47-b1d1-44f3-bea0-129795426bfd',
            walletConnectors: [EthereumWalletConnectors],
            social: { strategy: 'popup' },
            shadowDOMEnabled: false,
            // Add other configuration options as needed
          }}
        >
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem'
            }}
          >
            <a href='https://safe.global'>
              <Safe width={95} height={36} />
            </a>
            <div style={{ display: 'flex' }}>
              <DynamicWidget />
            </div>
          </nav>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h1>Smart session</h1>

            <div>
              Create a new ERC-7579-compatible Safe Smart Account and delegate transaction signing
            </div>
          </div>
          <div
            style={{
              width: '90%',
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '20px'
            }}
          >
            {children}
          </div>
        </DynamicContextProvider>

      </body>
    </html>
  )
}
