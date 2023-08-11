import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        ></S.Campo>
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
}

export default BarraLateral
