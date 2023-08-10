import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar"></S.Campo>
      <S.Filtros>
        <FiltroCard legenda="Pendente" contador={1} />
        <FiltroCard legenda="Concluída" contador={2} />
        <FiltroCard legenda="Urgente" contador={2} />
        <FiltroCard legenda="Importante" contador={5} />
        <FiltroCard legenda="Normal" contador={4} />
        <FiltroCard legenda="All" contador={14} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
