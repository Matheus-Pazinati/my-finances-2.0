import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import logoImg from '../../assets/igniteLogo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleModalOpen() {
    setIsModalOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          <img src={logoImg} alt="" />
          <p>
            my finance<span>$</span>
          </p>
        </h1>

        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Trigger asChild>
            <button>Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal onModalOpen={handleModalOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
