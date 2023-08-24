'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import StyledComponentsRegistry from '@/lib/registry'
import { UserProvider } from '@/context/UserContext'
import { Toast } from '@/components/ui/Toast'
import { ConfirmModal } from '@/components/ui/ConfirmModal'
import { Loading } from '@/components/ui/Loading'
import { NotificationsModal } from '@/components/NotificationsModal'

export const metadata: Metadata = {
  title: 'Quando Lança | Confira os principais lançamentos de jogos de 2023',
  description: 'Fique por dentro de novos lançamentos de jogos, adicione-os a sua lista de espera e seja notificado quando o jogo for lançado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <UserProvider>
        <StyledComponentsRegistry>
          <ConfirmModal />
          <Loading />
          <Toast />
          <NotificationsModal />
          {children}
        </StyledComponentsRegistry>
        </UserProvider>
      </body>
    </html>
  )
}
