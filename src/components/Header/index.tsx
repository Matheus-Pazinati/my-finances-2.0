import logoImg from '../../assets/igniteLogo.svg'

export function Header() {
  return (
    <div>
      <h1>
        <img src={logoImg} alt="" />
        my finance$
      </h1>
      <button>Nova transação</button>
    </div>
  )
}