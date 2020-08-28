import moment from 'moment'
import { setupFirebase } from './services/firebase'

const { REACT_APP_FIREBASE_ENV } = process.env

// initial setup firebase
setupFirebase(REACT_APP_FIREBASE_ENV)

moment.updateLocale('pt-br', require('moment/locale/pt-br'))
