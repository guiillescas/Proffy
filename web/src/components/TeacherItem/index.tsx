import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/59893752?s=460&u=c07c8eb71ce76c97bbe756e511597bcb506af578&v=4" alt="Guilherme Illescas" />
        <div>
          <strong>Guilherme Illescas</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Sou uma pessoa apaixonada por desafios e novos aprendizados! Sempre buscando ser a melhor versão de mim mesmo e melhorar a vida dos outros com o que eu faço!
        Amo passar tempo imerso em problemas e resolvê-los da melhor forma possível.
          <br /><br />
          “Cada segundo é tempo para mudar tudo para sempre”, Charles Chaplin
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 230,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem