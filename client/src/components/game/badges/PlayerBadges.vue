<template>
<div>
    <loading-spinner :loading="isLoading" />

    <div class="row bg-primary" v-if="!isLoading || !userHasBadges">
        <div v-if="!userHasBadges" class="col text-center pt-3">
            <p class="mb-3">This player has no badges.</p>
        </div>
    </div>

    <div class="row bg-secondary" v-if="!isLoading && userPlayer && playerId !== userPlayer._id">
        <div class="col text-center pt-3">
            <p class="mb-3">Buy this player a <a href="javascript:;" @click="onOpenPurchasePlayerBadgeRequested">Badge of Honor</a>.</p>
        </div>
    </div>

    <div class="pt-3 pb-3" v-if="!isLoading && userHasBadges">
        <badge v-for="badge in filteredBadges" :key="badge.key" :badge="badge" @onOpenPurchasePlayerBadgeRequested="onOpenPurchasePlayerBadgeRequested" />
    </div>
</div>
</template>

<script>
import LoadingSpinner from '../../LoadingSpinner'
import Badge from './Badge'
import BadgeApiService from '../../../services/api/badge'
import GameHelper from '../../../services/gameHelper'

export default {
    components: {
        'loading-spinner': LoadingSpinner,
        'badge': Badge
    },
  props: {
    playerId: String
  },
  data () {
    return {
        isLoading: false,
        badges: []
    }
  },
  async mounted () {
    await this.loadPlayerBadges()
  },
  methods: {
    onOpenPurchasePlayerBadgeRequested () {
        if (this.playerId !== this.userPlayer._id) {
            this.$emit('onOpenPurchasePlayerBadgeRequested', this.playerId)
        }
    },
    async loadPlayerBadges () {
        this.isLoading = true

        try {
            let response = await BadgeApiService.listBadgesByPlayer(this.$store.state.game._id, this.playerId)

            if (response.status === 200) {
                this.badges = response.data
            } else {
                this.badges = null
            }
        } catch (err) {
            console.error(err)
        }

        this.isLoading = false
    }
  },
  computed: {
    userPlayer () {
        return GameHelper.getUserPlayer(this.$store.state.game)
    },
    userHasBadges () {
        return this.badges.filter(b => b.awarded).length
    },
    filteredBadges () {
        return this.badges.filter(b => b.awarded)
    }
  }
}
</script>

<style scoped>
</style>
