<template>
  <view-container>
    <view-title title="Purchase Complete" />

    <p>Thank you for your purchase, it goes a long way to help support continued development of <strong>Solaris</strong>.</p>
    
    <p>Head on over to the <router-link :to="{ name: 'avatars'}"><i class="fas fa-shopping-basket"></i> Avatar Store</router-link> to spend your credits!</p>
  </view-container>
</template>

<script>
import ViewTitle from '../../components/ViewTitle'
import ViewContainer from '../../components/ViewContainer'

export default {
  components: {
    'view-container': ViewContainer,
    'view-title': ViewTitle
  },
  mounted () {
    let credits = +this.$route.query.credits

    this.$store.commit('setUserCredits', this.$store.state.userCredits + credits)
  }
}
</script>

<style scoped>
</style>
