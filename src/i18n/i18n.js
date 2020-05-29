import { register, addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'

//register('en', () => import('../i18n/en.json'))
//register('fr', () => import('../i18n/fr.json'))

import en from './lang/en.json'
import fr from './lang/fr.json'

addMessages('en', en)
addMessages('fr', fr)

init({
    fallbackLocale: 'fr',
    initialLocale: getLocaleFromNavigator(),
})