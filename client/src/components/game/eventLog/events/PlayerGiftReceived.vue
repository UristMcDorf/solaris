<template>
<div v-if="player">
  <p>
    You have received a carrier gift <carrier-label :carrierId="event.data.carrierId" :carrierName="event.data.carrierName"/> of <span class="text-warning">{{event.data.carrierShips}}</span> ships from <a href="javascript:;" @click="onOpenPlayerDetailRequested">{{player.alias}}</a> at <star-label :starId="event.data.starId" :starName="event.data.starName"/>.
  </p>
</div>
</template>

<script>
import StarLabelVue from '../../star/StarLabel'
import CarrierLabelVue from '../../carrier/CarrierLabel'
import GameHelper from '../../../../services/gameHelper'

export default {
  components: {
    'star-label': StarLabelVue,
    'carrier-label': CarrierLabelVue
  },
  props: {
    event: Object
  },
  data () {
    return {
      player: null
    }
  },
  mounted () {
    this.player = GameHelper.getPlayerById(this.$store.state.game, this.event.data.fromPlayerId)
  },
  methods: {
    onOpenPlayerDetailRequested (e) {
      this.$emit('onOpenPlayerDetailRequested', this.player._id)
    }
  }
}
</script>

<style scoped>
</style>
