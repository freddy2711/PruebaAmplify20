import { combineReducers } from 'redux'
import InfoGeneralReducer from './InfoGeneralReducer'
import InfoExtraReducer from './ExtraInfoReducer'
import guardarReducer from './guardarReducer'
import EditarInfoReducer from './EditarInfoReducer'

export default combineReducers({
  infoGeneral: InfoGeneralReducer,
  infoExtra: InfoExtraReducer,
  infoGuardar: guardarReducer,
  infoEditar: EditarInfoReducer,
})
