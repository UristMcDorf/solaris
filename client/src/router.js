import Vue from 'vue'
import Router from 'vue-router'
import AccountAchievements from './views/AccountAchievements.vue'
import AccountCreation from './views/AccountCreation.vue'
import AccountForgotPassword from './views/AccountForgotPassword.vue'
import AccountForgotUsername from './views/AccountForgotUsername.vue'
import AccountResetEmail from './views/AccountResetEmail.vue'
import AccountResetUsername from './views/AccountResetUsername.vue'
import AccountResetPassword from './views/AccountResetPassword.vue'
import AccountExternalResetPassword from './views/AccountExternalResetPassword.vue'
import AccountSettings from './views/AccountSettings.vue'
import Game from './views/Game.vue'
import GameActiveGames from './views/GameActiveGames.vue'
import GameCreation from './views/GameCreation.vue'
import GameDetail from './views/GameDetail.vue'
import GameList from './views/GameList.vue'
import Home from './views/Home.vue'
import MainMenu from './views/MainMenu.vue'
import Leaderboard from './views/Leaderboard.vue'
import MyGuild from './views/guild/MyGuild.vue'
import GuildCreate from './views/guild/GuildCreate.vue'
import GuildRename from './views/guild/GuildRename.vue'
import GuildDetails from './views/guild/GuildDetails.vue'
import Administration from './views/Administration.vue'
import Avatars from './views/Avatars.vue'
import GalacticCreditsShop from './views/shop/GalacticCreditsShop.vue'
import ShopPurchaseComplete from './views/shop/PurchaseComplete.vue'
import ShopPurchaseFailed from './views/shop/PurchaseFailed.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account/achievements/:userId',
      name: 'account-achievements',
      component: AccountAchievements
    },
    {
      path: '/account/create',
      name: 'account-creation',
      component: AccountCreation
    },
    {
      path: '/account/forgot-password',
      name: 'account-forgot-password',
      component: AccountForgotPassword
    },
    {
      path: '/account/forgot-username',
      name: 'account-forgot-username',
      component: AccountForgotUsername
    },
    {
      path: '/account/reset-email',
      name: 'account-reset-email',
      component: AccountResetEmail
    },
    {
      path: '/account/reset-username',
      name: 'account-reset-username',
      component: AccountResetUsername
    },
    {
      path: '/account/reset-password',
      name: 'account-reset-password',
      component: AccountResetPassword
    },
    {
      path: '/account/reset-password-external',
      name: 'account-reset-password-external',
      component: AccountExternalResetPassword
    },
    {
      path: '/account/settings',
      name: 'account-settings',
      component: AccountSettings
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/game/active-games',
      name: 'game-active-games',
      component: GameActiveGames
    },
    {
      path: '/game/create',
      name: 'game-creation',
      component: GameCreation
    },
    {
      path: '/game/detail',
      name: 'game-detail',
      component: GameDetail
    },
    {
      path: '/game/list',
      name: 'game-list',
      component: GameList
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main-menu',
      name: 'main-menu',
      component: MainMenu
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    },
    {
      path: '/guild/create',
      name: 'guild-create',
      component: GuildCreate
    },
    {
      path: '/guild/rename',
      name: 'guild-rename',
      component: GuildRename
    },
    {
      path: '/guild',
      name: 'guild',
      component: MyGuild
    },
    {
      path: '/guild/details/:guildId',
      name: 'guild-details',
      component: GuildDetails
    },
    {
      path: '/administration',
      name: 'administration',
      component: Administration
    },
    {
      path: '/avatars',
      name: 'avatars',
      component: Avatars
    },
    {
      path: '/shop',
      name: 'galactic-credits-shop',
      component: GalacticCreditsShop
    },
    {
      path: '/shop/paymentcomplete',
      name: 'galactic-credits-shop-payment-complete',
      component: ShopPurchaseComplete
    },
    {
      path: '/shop/paymentfailed',
      name: 'galactic-credits-shop-payment-failed',
      component: ShopPurchaseFailed
    },
    {
      path: '/privacypolicy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    }
  ]
})
