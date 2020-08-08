import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface pageHeaderProps {
  title: string
  description?: string
}

// Tenho um componente chamado PageHeader, ele é um FunctionComponent (FC) e as propriedades que ele tem são as que estão dentro de "<>"
const PageHeader: React.FC<pageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to ="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  )
}

export default PageHeader