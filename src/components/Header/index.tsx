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
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}