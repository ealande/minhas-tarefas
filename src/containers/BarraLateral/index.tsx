import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar"></S.Campo>
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="finished" contador={2} />
        <FiltroCard legenda="urgent" contador={2} />
        <FiltroCard legenda="important" contador={5} />
        <FiltroCard legenda="normal" contador={4} />
        <FiltroCard legenda="todas" contador={3} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
