import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/igniteLogo.svg'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          <img src={logoImg} alt="" />
          <p>my finance<span>$</span></p>
        </h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Nova transação</button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>

          </Dialog.Portal>
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  )
}